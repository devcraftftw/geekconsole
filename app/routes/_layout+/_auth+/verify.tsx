import {
	useForm,
	type Submission,
	getFormProps,
	getInputProps,
} from '@conform-to/react';
import { getZodConstraint, parseWithZod } from '@conform-to/zod';
import { json, type ActionFunctionArgs } from '@remix-run/node';
import { Form, useActionData, useSearchParams } from '@remix-run/react';
import { AuthenticityTokenInput } from 'remix-utils/csrf/react';
import { HoneypotInputs } from 'remix-utils/honeypot/react';
import { z } from 'zod';
import {
	checkHoneypot,
	ensurePrimary,
	generateTOTP,
	prisma,
	redirectWithToast,
	requireUserId,
	validateCSRF,
	verifyTOTP,
} from '~/app/core/server/index.ts';
import { handleVerification as handleChangeEmailVerification } from '~/app/routes/_layout+/settings+/profile.change-email.tsx';
import { twoFAVerificationType } from '~/app/routes/_layout+/settings+/profile.two-factor.tsx';
import { type twoFAVerifyVerificationType } from '~/app/routes/_layout+/settings+/profile.two-factor.verify.tsx';
import { useIsPending } from '~/app/shared/lib/hooks/index.ts';
import { getDomainUrl } from '~/app/shared/lib/utils/index.ts';
import {
	ErrorList,
	Field,
	Spacer,
	StatusButton,
} from '~/app/shared/ui/index.ts';
import {
	handleVerification as handleLoginTwoFactorVerification,
	shouldRequestTwoFA,
} from './login.tsx';
import { handleVerification as handleOnboardingVerification } from './onboarding.tsx';
import { handleVerification as handleResetPasswordVerification } from './reset-password.tsx';

export const codeQueryParam = 'code';
export const targetQueryParam = 'target';
export const typeQueryParam = 'type';
export const redirectToQueryParam = 'redirectTo';

const types = ['onboarding', 'reset-password', 'change-email', '2fa'] as const;
const VerificationTypeSchema = z.enum(types);
export type VerificationTypes = z.infer<typeof VerificationTypeSchema>;

const VerifySchema = z.object({
	[codeQueryParam]: z.string().min(6).max(6),
	[typeQueryParam]: VerificationTypeSchema,
	[targetQueryParam]: z.string(),
	[redirectToQueryParam]: z.string().optional(),
});

export type VerifyFunctionArgs = {
	request: Request;
	submission: Submission<
		z.input<typeof VerifySchema>,
		string[],
		z.output<typeof VerifySchema>
	>;
	body: FormData | URLSearchParams;
};

export async function action({ request }: ActionFunctionArgs) {
	const formData = await request.formData();
	checkHoneypot(formData);
	await validateCSRF(formData, request.headers);
	return validateRequest(request, formData);
}

export async function requireRecentVerification(request: Request) {
	const userId = await requireUserId(request);
	const shouldReverify = await shouldRequestTwoFA(request);

	if (shouldReverify) {
		const reqUrl = new URL(request.url);
		const redirectUrl = getRedirectToUrl({
			request,
			target: userId,
			type: twoFAVerificationType,
			redirectTo: reqUrl.pathname + reqUrl.search,
		});

		throw await redirectWithToast(redirectUrl.toString(), {
			title: 'Please Reverify',
			description: 'Please reverify your account before proceeding',
		});
	}
}

export function getRedirectToUrl({
	request,
	type,
	target,
	redirectTo,
}: {
	request: Request;
	type: VerificationTypes;
	target: string;
	redirectTo?: string;
}) {
	const redirectToUrl = new URL(`${getDomainUrl(request)}/verify`);

	redirectToUrl.searchParams.set(typeQueryParam, type);
	redirectToUrl.searchParams.set(targetQueryParam, target);

	if (redirectTo) {
		redirectToUrl.searchParams.set(redirectToQueryParam, redirectTo);
	}

	return redirectToUrl;
}

export async function prepareVerification({
	period,
	request,
	type,
	target,
}: {
	period: number;
	request: Request;
	type: VerificationTypes;
	target: string;
}) {
	const verifyUrl = getRedirectToUrl({ request, type, target });
	const redirectTo = new URL(verifyUrl.toString());

	const { otp, ...verificationConfig } = generateTOTP({
		algorithm: 'SHA256',
		// Leaving off 0 and O on purpose to avoid confusing users.
		charSet: 'ABCDEFGHIJKLMNPQRSTUVWXYZ123456789',
		period,
	});

	const verificationData = {
		type,
		target,
		...verificationConfig,
		expiresAt: new Date(Date.now() + verificationConfig.period * 1000),
	};

	await prisma.verification.upsert({
		where: { target_type: { target, type } },
		create: verificationData,
		update: verificationData,
	});

	// add the otp to the url we'll email the user.
	verifyUrl.searchParams.set(codeQueryParam, otp);

	return { otp, redirectTo, verifyUrl };
}

export async function isCodeValid({
	code,
	type,
	target,
}: {
	code: string;
	type: VerificationTypes | typeof twoFAVerifyVerificationType;
	target: string;
}) {
	const verification = await prisma.verification.findUnique({
		where: {
			target_type: { target, type },
			OR: [{ expiresAt: { gt: new Date() } }, { expiresAt: null }],
		},
		select: { algorithm: true, secret: true, period: true, charSet: true },
	});

	if (!verification) return false;

	const result = verifyTOTP({
		otp: code,
		...verification,
	});

	if (!result) return false;

	return true;
}

async function validateRequest(
	request: Request,
	body: URLSearchParams | FormData,
) {
	const submission = await parseWithZod(body, {
		schema: VerifySchema.superRefine(async (data, ctx) => {
			const codeIsValid = await isCodeValid({
				code: data[codeQueryParam],
				type: data[typeQueryParam],
				target: data[targetQueryParam],
			});

			if (!codeIsValid) {
				ctx.addIssue({
					path: ['code'],
					code: z.ZodIssueCode.custom,
					message: `Invalid code`,
				});

				return;
			}
		}),
		async: true,
	});

	if (submission.status !== 'success') {
		return json(
			{ result: submission.reply() },
			{
				status: submission.status === 'error' ? 400 : 200,
			},
		);
	}

	// this code path could be part of a loader (GET request), so we need to make
	// sure we're running on primary because we're about to make writes.
	await ensurePrimary();

	const { value: submissionValue } = submission;

	async function deleteVerification() {
		await prisma.verification.delete({
			where: {
				target_type: {
					type: submissionValue[typeQueryParam],
					target: submissionValue[targetQueryParam],
				},
			},
		});
	}

	switch (submissionValue[typeQueryParam]) {
		case 'reset-password': {
			await deleteVerification();
			return handleResetPasswordVerification({ request, body, submission });
		}

		case 'onboarding': {
			await deleteVerification();
			return handleOnboardingVerification({ request, body, submission });
		}

		case 'change-email': {
			await deleteVerification();
			return handleChangeEmailVerification({ request, body, submission });
		}

		case '2fa': {
			return handleLoginTwoFactorVerification({ request, body, submission });
		}
	}
}

export default function VerifyRoute() {
	const [searchParams] = useSearchParams();
	const isPending = useIsPending();
	const actionData = useActionData<typeof action>();

	const parseWithZoddType = VerificationTypeSchema.safeParse(
		searchParams.get(typeQueryParam),
	);
	const type = parseWithZoddType.success ? parseWithZoddType.data : null;

	const checkEmail = (
		<>
			<h1 className="text-h1">Check your email</h1>
			<p className="mt-3 text-body-md text-muted-foreground">
				We've sent you a code to verify your email address.
			</p>
		</>
	);

	const headings: Record<VerificationTypes, React.ReactNode> = {
		onboarding: checkEmail,
		'reset-password': checkEmail,
		'change-email': checkEmail,
		'2fa': (
			<>
				<h1 className="text-h1">Check your 2FA app</h1>
				<p className="mt-3 text-body-md text-muted-foreground">
					Please enter your 2FA code to verify your identity.
				</p>
			</>
		),
	};

	const [form, fields] = useForm({
		id: 'verify-form',
		constraint: getZodConstraint(VerifySchema),
		lastResult: actionData?.result,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: VerifySchema });
		},
		defaultValue: {
			code: searchParams.get(codeQueryParam),
			type: type,
			target: searchParams.get(targetQueryParam),
			redirectTo: searchParams.get(redirectToQueryParam),
		},
	});

	return (
		<main className="container flex flex-col justify-center pb-32 pt-20">
			<div className="text-center">
				{type ? headings[type] : 'Invalid Verification Type'}
			</div>

			<Spacer size="xs" />

			<div className="mx-auto flex w-72 max-w-full flex-col justify-center gap-1">
				<div>
					<ErrorList errors={form.errors} id={form.errorId} />
				</div>

				<div className="flex w-full gap-2">
					<Form method="POST" {...getFormProps(form)} className="flex-1">
						<AuthenticityTokenInput />
						<HoneypotInputs />

						<Field
							labelProps={{
								htmlFor: fields[codeQueryParam].id,
								children: 'Code',
							}}
							inputProps={{
								...getInputProps(fields[codeQueryParam], { type: 'text' }),
								autoComplete: 'one-time-code',
							}}
							errors={fields[codeQueryParam].errors}
						/>

						<input
							{...getInputProps(fields[typeQueryParam], { type: 'hidden' })}
						/>
						<input
							{...getInputProps(fields[targetQueryParam], { type: 'hidden' })}
						/>
						<input
							{...getInputProps(fields[redirectToQueryParam], {
								type: 'hidden',
							})}
						/>

						<StatusButton
							className="w-full"
							status={isPending ? 'pending' : form.status ?? 'idle'}
							type="submit"
							disabled={isPending}
						>
							Submit
						</StatusButton>
					</Form>
				</div>
			</div>
		</main>
	);
}
