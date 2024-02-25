import { getFormProps, getInputProps, useForm } from '@conform-to/react';
import { getZodConstraint, parseWithZod } from '@conform-to/zod';
import {
	json,
	redirect,
	type ActionFunctionArgs,
	type LoaderFunctionArgs,
	type MetaFunction,
} from '@remix-run/node';
import {
	Form,
	useActionData,
	useLoaderData,
	useSearchParams,
} from '@remix-run/react';
import { AuthenticityTokenInput } from 'remix-utils/csrf/react';
import { HoneypotInputs } from 'remix-utils/honeypot/react';
import { safeRedirect } from 'remix-utils/safe-redirect';
import { z } from 'zod';
import {
	requireAnonymous,
	SESSION_KEY,
	signup,
} from '#app/core/server-utils/auth/auth.server';
import { redirectWithConfetti } from '#app/core/server-utils/confetti/confetti.server';
import { validateCSRF } from '#app/core/server-utils/csrf/csrf.server';
import { prisma } from '#app/core/server-utils/db/db.server';
import { checkHoneypot } from '#app/core/server-utils/honeypot/honeypot.server';
import { authSessionStorage } from '#app/core/server-utils/session/session.server';
import { verifySessionStorage } from '#app/core/server-utils/verification/verification.server';
import { useIsPending } from '#app/shared/lib/hooks/index.ts';
import {
	NameSchema,
	PasswordSchema,
	UsernameSchema,
} from '#app/shared/schemas/index.ts';
import {
	CheckboxField,
	ErrorList,
	Field,
	Spacer,
	StatusButton,
} from '#app/shared/ui/index.ts';

export const ONBOARDING_EMAIL_SESSION_KEY = 'onboardingEmail';

const SignupFormSchema = z
	.object({
		username: UsernameSchema,
		name: NameSchema,
		password: PasswordSchema,
		confirmPassword: PasswordSchema,
		agreeToTermsOfServiceAndPrivacyPolicy: z.boolean({
			required_error:
				'You must agree to the terms of service and privacy policy',
		}),
		remember: z.boolean().optional(),
		redirectTo: z.string().optional(),
	})
	.superRefine(({ confirmPassword, password }, ctx) => {
		if (confirmPassword !== password) {
			ctx.addIssue({
				path: ['confirmPassword'],
				code: 'custom',
				message: 'The passwords must match',
			});
		}
	});

async function requireOnboardingEmail(request: Request) {
	await requireAnonymous(request);

	const verifySession = await verifySessionStorage.getSession(
		request.headers.get('cookie'),
	);

	const email = verifySession.get(ONBOARDING_EMAIL_SESSION_KEY);

	if (typeof email !== 'string' || !email) {
		throw redirect('/signup');
	}

	return email;
}

export async function loader({ request }: LoaderFunctionArgs) {
	const email = await requireOnboardingEmail(request);
	return json({ email });
}

export async function action({ request }: ActionFunctionArgs) {
	const email = await requireOnboardingEmail(request);

	const formData = await request.formData();

	await validateCSRF(formData, request.headers);
	checkHoneypot(formData);

	const submission = await parseWithZod(formData, {
		schema: (intent) =>
			SignupFormSchema.superRefine(async (data, ctx) => {
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
				if (intent !== null) return { ...data, session: null };

				const session = await signup({ ...data, email });

				return { ...data, session };
			}),
		async: true,
	});

	if (submission.status !== 'success' || !submission.value.session) {
		return json(
			{ result: submission.reply() },
			{
				status: submission.status === 'error' ? 400 : 200,
			},
		);
	}

	const { session, remember, redirectTo } = submission.value;

	const cookieSession = await authSessionStorage.getSession(
		request.headers.get('cookie'),
	);

	cookieSession.set(SESSION_KEY, session.id);

	const verifySession = await verifySessionStorage.getSession(
		request.headers.get('cookie'),
	);

	const headers = new Headers();

	headers.append(
		'set-cookie',
		await authSessionStorage.commitSession(cookieSession, {
			expires: remember ? session.expirationDate : undefined,
		}),
	);

	headers.append(
		'set-cookie',
		await verifySessionStorage.destroySession(verifySession),
	);

	return redirectWithConfetti(safeRedirect(redirectTo), { headers });
}

export default function OnboardingRoute() {
	const data = useLoaderData<typeof loader>();
	const actionData = useActionData<typeof action>();
	const isPending = useIsPending();

	const [searchParams] = useSearchParams();
	const redirectTo = searchParams.get('redirectTo');

	const [form, fields] = useForm({
		id: 'signup-form',
		constraint: getZodConstraint(SignupFormSchema),
		defaultValue: { redirectTo },
		lastResult: actionData?.result,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: SignupFormSchema });
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
					{...getFormProps(form)}
				>
					<AuthenticityTokenInput />
					<HoneypotInputs />

					<Field
						labelProps={{ htmlFor: fields.username.id, children: 'Username' }}
						inputProps={{
							...getInputProps(fields.username, { type: 'text' }),
							autoComplete: 'username',
							className: 'lowercase',
						}}
						errors={fields.username.errors}
					/>
					<Field
						labelProps={{ htmlFor: fields.name.id, children: 'Name' }}
						inputProps={{
							...getInputProps(fields.name, { type: 'text' }),
							autoComplete: 'name',
						}}
						errors={fields.name.errors}
					/>
					<Field
						labelProps={{ htmlFor: fields.password.id, children: 'Password' }}
						inputProps={{
							...getInputProps(fields.password, { type: 'password' }),
							autoComplete: 'new-password',
						}}
						errors={fields.password.errors}
					/>

					<Field
						labelProps={{
							htmlFor: fields.confirmPassword.id,
							children: 'Confirm Password',
						}}
						inputProps={{
							...getInputProps(fields.confirmPassword, { type: 'password' }),
							autoComplete: 'new-password',
						}}
						errors={fields.confirmPassword.errors}
					/>

					<CheckboxField
						labelProps={{
							htmlFor: fields.agreeToTermsOfServiceAndPrivacyPolicy.id,
							children:
								'Do you agree to our Terms of Service and Privacy Policy?',
						}}
						buttonProps={getInputProps(
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
						buttonProps={getInputProps(fields.remember, { type: 'checkbox' })}
						errors={fields.remember.errors}
					/>

					<input {...getInputProps(fields.redirectTo, { type: 'hidden' })} />
					<ErrorList errors={form.errors} id={form.errorId} />

					<div className="flex items-center justify-between gap-6">
						<StatusButton
							className="w-full"
							status={isPending ? 'pending' : form.status ?? 'idle'}
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
	return [{ title: 'Setup GeekConsole Account' }];
};
