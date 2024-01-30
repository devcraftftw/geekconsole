import { conform, useForm } from '@conform-to/react';
import { getFieldsetConstraint, parse } from '@conform-to/zod';
import { invariant } from '@epic-web/invariant';
import {
	json,
	redirect,
	type LoaderFunctionArgs,
	type ActionFunctionArgs,
	type MetaFunction,
} from '@remix-run/node';
import {
	Form,
	useActionData,
	useLoaderData,
	useSearchParams,
	type Params,
} from '@remix-run/react';
import { safeRedirect } from 'remix-utils/safe-redirect';
import { z } from 'zod';
import { ProviderNameSchema } from '~/app/core/components/providers/index.ts';
import {
	SESSION_KEY,
	authSessionStorage,
	authenticator,
	prisma,
	redirectWithConfetti,
	requireAnonymous,
	signupWithConnection,
	verifySessionStorage,
} from '~/app/core/server/index.ts';
import { useIsPending } from '~/app/shared/lib/hooks/index.ts';
import { NameSchema, UsernameSchema } from '~/app/shared/schemas/index.ts';
import {
	CheckboxField,
	ErrorList,
	Field,
	Spacer,
	StatusButton,
} from '~/app/shared/ui/index.ts';
import { type VerifyFunctionArgs } from './verify.tsx';

export const ONBOARDING_EMAIL_SESSION_KEY = 'onboardingEmail';
export const PROVIDER_ID_KEY = 'providerId';
export const PREFILLED_PROFILE_KEY = 'prefilledProfile';

const SignupFormSchema = z.object({
	imageUrl: z.string().optional(),
	username: UsernameSchema,
	name: NameSchema,
	agreeToTermsOfServiceAndPrivacyPolicy: z.boolean({
		required_error: 'You must agree to the terms of service and privacy policy',
	}),
	remember: z.boolean().optional(),
	redirectTo: z.string().optional(),
});

async function requireData({
	request,
	params,
}: {
	request: Request;
	params: Params;
}) {
	await requireAnonymous(request);

	const verifySession = await verifySessionStorage.getSession(
		request.headers.get('cookie'),
	);
	const email = verifySession.get(ONBOARDING_EMAIL_SESSION_KEY);
	const providerId = verifySession.get(PROVIDER_ID_KEY);

	const result = z
		.object({
			email: z.string(),
			providerName: ProviderNameSchema,
			providerId: z.string(),
		})
		.safeParse({ email, providerName: params.provider, providerId });

	if (result.success) {
		return result.data;
	} else {
		console.error(result.error);
		throw redirect('/signup');
	}
}

export async function loader({ request, params }: LoaderFunctionArgs) {
	const { email } = await requireData({ request, params });

	const authSession = await authSessionStorage.getSession(
		request.headers.get('cookie'),
	);

	const verifySession = await verifySessionStorage.getSession(
		request.headers.get('cookie'),
	);

	const prefilledProfile = verifySession.get(PREFILLED_PROFILE_KEY);

	const formError = authSession.get(authenticator.sessionErrorKey);

	return json({
		email,
		status: 'idle',
		submission: {
			intent: '',
			payload: (prefilledProfile ?? {}) as Record<string, unknown>,
			error: {
				'': typeof formError === 'string' ? [formError] : [],
			},
		},
	});
}

export async function action({ request, params }: ActionFunctionArgs) {
	const { email, providerId, providerName } = await requireData({
		request,
		params,
	});

	const formData = await request.formData();

	const verifySession = await verifySessionStorage.getSession(
		request.headers.get('cookie'),
	);

	const submission = await parse(formData, {
		schema: SignupFormSchema.superRefine(async (data, ctx) => {
			const existingUser = await prisma.user.findUnique({
				where: { username: data.username },
				select: { id: true },
			});

			if (existingUser) {
				ctx.addIssue({
					path: ['username'],
					code: z.ZodIssueCode.custom,
					message: 'A user already exists with this username',
				});

				return;
			}
		}).transform(async (data) => {
			const session = await signupWithConnection({
				...data,
				email,
				providerId,
				providerName,
			});

			return { ...data, session };
		}),
		async: true,
	});

	if (submission.intent !== 'submit') {
		return json({ status: 'idle', submission } as const);
	}

	if (!submission.value?.session) {
		return json({ status: 'error', submission } as const, { status: 400 });
	}

	const { session, remember, redirectTo } = submission.value;

	const authSession = await authSessionStorage.getSession(
		request.headers.get('cookie'),
	);
	authSession.set(SESSION_KEY, session.id);

	const headers = new Headers();

	headers.append(
		'set-cookie',
		await authSessionStorage.commitSession(authSession, {
			expires: remember ? session.expirationDate : undefined,
		}),
	);

	headers.append(
		'set-cookie',
		await verifySessionStorage.destroySession(verifySession),
	);

	return redirectWithConfetti(safeRedirect(redirectTo), { headers });
}

export async function handleVerification({ submission }: VerifyFunctionArgs) {
	invariant(submission.value, 'submission.value should be defined by now');

	const verifySession = await verifySessionStorage.getSession();
	verifySession.set(ONBOARDING_EMAIL_SESSION_KEY, submission.value.target);

	return redirect('/onboarding', {
		headers: {
			'set-cookie': await verifySessionStorage.commitSession(verifySession),
		},
	});
}

export default function SignupRoute() {
	const data = useLoaderData<typeof loader>();
	const actionData = useActionData<typeof action>();
	const isPending = useIsPending();
	const [searchParams] = useSearchParams();
	const redirectTo = searchParams.get('redirectTo');

	const [form, fields] = useForm({
		id: 'onboarding-provider-form',
		constraint: getFieldsetConstraint(SignupFormSchema),
		lastSubmission: actionData?.submission ?? data.submission,
		onValidate({ formData }) {
			return parse(formData, { schema: SignupFormSchema });
		},
		shouldRevalidate: 'onBlur',
	});

	return (
		<div className="flex min-h-full flex-col justify-center pb-32 pt-20">
			<div className="mx-auto w-full max-w-lg">
				<div className="flex flex-col gap-3 text-center">
					<h1 className="text-h1">Welcome aboard {data.email}!</h1>
					<p className="text-body-md text-muted-foreground">
						Please enter your details.
					</p>
				</div>

				<Spacer size="xs" />

				<Form
					method="POST"
					className="mx-auto min-w-[368px] max-w-sm"
					{...form.props}
				>
					{fields.imageUrl.defaultValue ? (
						<div className="mb-4 flex flex-col items-center justify-center gap-4">
							<img
								src={fields.imageUrl.defaultValue}
								alt="Profile"
								className="h-24 w-24 rounded-full"
							/>
							<p className="text-body-sm text-muted-foreground">
								You can change your photo later
							</p>
							<input {...conform.input(fields.imageUrl, { type: 'hidden' })} />
						</div>
					) : null}

					<Field
						labelProps={{ htmlFor: fields.username.id, children: 'Username' }}
						inputProps={{
							...conform.input(fields.username),
							autoComplete: 'username',
							className: 'lowercase',
						}}
						errors={fields.username.errors}
					/>

					<Field
						labelProps={{ htmlFor: fields.name.id, children: 'Name' }}
						inputProps={{
							...conform.input(fields.name),
							autoComplete: 'name',
						}}
						errors={fields.name.errors}
					/>

					<CheckboxField
						labelProps={{
							htmlFor: fields.agreeToTermsOfServiceAndPrivacyPolicy.id,
							children:
								'Do you agree to our Terms of Service and Privacy Policy?',
						}}
						buttonProps={conform.input(
							fields.agreeToTermsOfServiceAndPrivacyPolicy,
							{ type: 'checkbox' },
						)}
						errors={fields.agreeToTermsOfServiceAndPrivacyPolicy.errors}
					/>

					<CheckboxField
						labelProps={{
							htmlFor: fields.remember.id,
							children: 'Remember me',
						}}
						buttonProps={conform.input(fields.remember, { type: 'checkbox' })}
						errors={fields.remember.errors}
					/>

					{redirectTo ? (
						<input type="hidden" name="redirectTo" value={redirectTo} />
					) : null}

					<ErrorList errors={form.errors} id={form.errorId} />

					<div className="flex items-center justify-between gap-6">
						<StatusButton
							className="w-full"
							status={isPending ? 'pending' : actionData?.status ?? 'idle'}
							type="submit"
							disabled={isPending}
						>
							Create an account
						</StatusButton>
					</div>
				</Form>
			</div>
		</div>
	);
}

export const meta: MetaFunction = () => {
	return [{ title: 'Setup Geek Console Account' }];
};
