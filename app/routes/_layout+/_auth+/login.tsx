import { useForm, getFormProps, getInputProps } from '@conform-to/react';
import { getZodConstraint, parseWithZod } from '@conform-to/zod';
import { invariant } from '@epic-web/invariant';
import {
	type ActionFunctionArgs,
	json,
	redirect,
	type LoaderFunctionArgs,
	type MetaFunction,
} from '@remix-run/node';
import { Form, Link, useActionData, useSearchParams } from '@remix-run/react';
import { AuthenticityTokenInput } from 'remix-utils/csrf/react';
import { HoneypotInputs } from 'remix-utils/honeypot/react';
import { safeRedirect } from 'remix-utils/safe-redirect';
import { z } from 'zod';
import { ProviderConnectionForm } from '~/app/core/components/providers/index.ts';
import {
	SESSION_KEY,
	authSessionStorage,
	checkHoneypot,
	getUserId,
	login,
	prisma,
	redirectWithToast,
	requireAnonymous,
	validateCSRF,
	verifySessionStorage,
} from '~/app/core/server/index.ts';
import { useIsPending } from '~/app/shared/lib/hooks/index.ts';
import { combineResponseInits } from '~/app/shared/lib/utils/index.ts';
import {
	EmailSchema,
	PasswordSchema,
	UsernameSchema,
} from '~/app/shared/schemas/index.ts';
import {
	CheckboxField,
	ErrorList,
	Field,
	GeneralErrorBoundary,
	Spacer,
	StatusButton,
} from '~/app/shared/ui/index.ts';
import { twoFAVerificationType } from '../settings+/profile.two-factor.tsx';
import { getRedirectToUrl, type VerifyFunctionArgs } from './verify.tsx';

const VERIFIED_TIME_KEY = 'verified-time';
const UNVERIFIED_SESSION_KEY = 'unverified-session-id';
const REMEMBER_KEY = 'remember-me';

export async function handleNewSession(
	{
		request,
		session,
		redirectTo,
		remember,
	}: {
		request: Request;
		session: { userId: string; id: string; expirationDate: Date };
		redirectTo?: string;
		remember: boolean;
	},
	responseInit?: ResponseInit,
) {
	const verification = await prisma.verification.findUnique({
		select: { id: true },
		where: {
			target_type: { target: session.userId, type: twoFAVerificationType },
		},
	});

	const userHasTwoFactor = Boolean(verification);

	if (userHasTwoFactor) {
		const verifySession = await verifySessionStorage.getSession();
		verifySession.set(UNVERIFIED_SESSION_KEY, session.id);
		verifySession.set(REMEMBER_KEY, remember);

		const redirectUrl = getRedirectToUrl({
			request,
			type: twoFAVerificationType,
			target: session.userId,
			redirectTo,
		});

		return redirect(
			`${redirectUrl.pathname}?${redirectUrl.searchParams}`,
			combineResponseInits(
				{
					headers: {
						'set-cookie':
							await verifySessionStorage.commitSession(verifySession),
					},
				},
				responseInit,
			),
		);
	} else {
		const authSession = await authSessionStorage.getSession(
			request.headers.get('cookie'),
		);
		authSession.set(SESSION_KEY, session.id);

		return redirect(
			safeRedirect(redirectTo),
			combineResponseInits(
				{
					headers: {
						'set-cookie': await authSessionStorage.commitSession(authSession, {
							expires: remember ? session.expirationDate : undefined,
						}),
					},
				},
				responseInit,
			),
		);
	}
}

export async function handleVerification({
	request,
	submission,
}: VerifyFunctionArgs) {
	invariant(
		submission.status === 'success',
		'Submission should be successful by now',
	);

	const cookieSession = await authSessionStorage.getSession(
		request.headers.get('cookie'),
	);
	cookieSession.set(VERIFIED_TIME_KEY, Date.now());

	const verifySession = await verifySessionStorage.getSession(
		request.headers.get('cookie'),
	);
	const remember = verifySession.get(REMEMBER_KEY);

	const { redirectTo } = submission.value;

	const headers = new Headers();

	const unverifiedSessionId = verifySession.get(UNVERIFIED_SESSION_KEY);

	if (unverifiedSessionId) {
		const session = await prisma.session.findUnique({
			select: { expirationDate: true },
			where: { id: unverifiedSessionId },
		});

		if (!session) {
			throw await redirectWithToast('/login', {
				type: 'error',
				title: 'Invalid session',
				description: 'Could not find session to verify. Please try again.',
			});
		}

		cookieSession.set(SESSION_KEY, unverifiedSessionId);

		headers.append(
			'set-cookie',
			await authSessionStorage.commitSession(cookieSession, {
				expires: remember ? session.expirationDate : undefined,
			}),
		);
	} else {
		headers.append(
			'set-cookie',
			await authSessionStorage.commitSession(cookieSession),
		);
	}

	headers.append(
		'set-cookie',
		await verifySessionStorage.destroySession(verifySession),
	);

	return redirect(safeRedirect(redirectTo), { headers });
}

export async function shouldRequestTwoFA(request: Request) {
	const authSession = await authSessionStorage.getSession(
		request.headers.get('cookie'),
	);
	const verifySession = await verifySessionStorage.getSession(
		request.headers.get('cookie'),
	);

	if (verifySession.has(UNVERIFIED_SESSION_KEY)) return true;

	const userId = await getUserId(request);
	if (!userId) return false;

	// if it's over two hours since they last verified, we should request 2FA again
	const userHasTwoFA = await prisma.verification.findUnique({
		select: { id: true },
		where: { target_type: { target: userId, type: twoFAVerificationType } },
	});

	if (!userHasTwoFA) return false;

	const verifiedTime = authSession.get(VERIFIED_TIME_KEY) ?? new Date(0);
	const twoHours = 1000 * 60 * 2;

	return Date.now() - verifiedTime > twoHours;
}

const LoginFormSchema = z.object({
	usernameOrEmail: z.union([EmailSchema, UsernameSchema]),
	password: PasswordSchema,
	redirectTo: z.string().optional(),
	remember: z.boolean().optional(),
});

export async function loader({ request }: LoaderFunctionArgs) {
	await requireAnonymous(request);
	return json({});
}

export async function action({ request }: ActionFunctionArgs) {
	await requireAnonymous(request);

	const formData = await request.formData();

	await validateCSRF(formData, request.headers);
	checkHoneypot(formData);

	const submission = await parseWithZod(formData, {
		schema: (intent) =>
			LoginFormSchema.transform(async (data, ctx) => {
				if (intent !== null) return { ...data, session: null };

				const session = await login(data);

				if (!session) {
					ctx.addIssue({
						code: 'custom',
						message: 'Invalid username or password',
					});

					return z.NEVER;
				}

				return { ...data, session };
			}),
		async: true,
	});

	if (submission.status !== 'success' || !submission.value.session) {
		return json(
			{
				result: submission.reply({
					hideFields: ['password'],
				}),
			},
			{
				status: submission.status === 'error' ? 400 : 200,
			},
		);
	}

	const { session, remember, redirectTo } = submission.value;

	return handleNewSession({
		request,
		session,
		remember: remember ?? false,
		redirectTo,
	});
}

export default function LoginPage() {
	const actionData = useActionData<typeof action>();
	const isPending = useIsPending();
	const [searchParams] = useSearchParams();
	const redirectTo = searchParams.get('redirectTo');

	const [form, fields] = useForm({
		id: 'login-form',
		constraint: getZodConstraint(LoginFormSchema),
		defaultValue: { redirectTo },
		lastResult: actionData?.result,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: LoginFormSchema });
		},
		shouldRevalidate: 'onBlur',
	});

	return (
		<div className="flex min-h-full flex-col justify-center pb-32 pt-20">
			<div className="mx-auto w-full max-w-md">
				<div className="flex flex-col gap-3 text-center">
					<h1 className="text-h1">Welcome back!</h1>
					<p className="text-body-md text-muted-foreground">
						Please enter your details.
					</p>
				</div>

				<Spacer size="xs" />

				<div>
					<div className="mx-auto w-full max-w-md px-8">
						<Form method="POST" {...getFormProps(form)}>
							<AuthenticityTokenInput />
							<HoneypotInputs />

							<Field
								labelProps={{
									htmlFor: fields.usernameOrEmail.id,
									children: 'Username or Email',
								}}
								inputProps={{
									autoFocus: true,
									...getInputProps(fields.usernameOrEmail, { type: 'text' }),
								}}
								errors={fields.usernameOrEmail.errors}
							/>

							<Field
								labelProps={{ children: 'Password' }}
								inputProps={{
									...getInputProps(fields.password, {
										type: 'password',
									}),
									autoComplete: 'current-password',
								}}
								errors={fields.password.errors}
							/>

							<div className="flex justify-between">
								<CheckboxField
									labelProps={{
										htmlFor: fields.remember.id,
										children: 'Remember me',
									}}
									buttonProps={getInputProps(fields.remember, {
										type: 'checkbox',
									})}
									errors={fields.remember.errors}
								/>
								<div>
									<Link
										to="/forgot-password"
										className="text-body-xs font-semibold"
									>
										Forgot password?
									</Link>
								</div>
							</div>

							<input
								{...getInputProps(fields.redirectTo, { type: 'hidden' })}
							/>

							<ErrorList errors={form.errors} id={form.errorId} />

							<div className="flex items-center justify-between gap-6 pt-3">
								<StatusButton
									className="w-full"
									status={isPending ? 'pending' : form.status ?? 'idle'}
									type="submit"
									disabled={isPending}
								>
									Log in
								</StatusButton>
							</div>
						</Form>
						<div className="mt-5 flex flex-col gap-5 border-y-2 border-border py-3">
							<ProviderConnectionForm
								type="Login"
								providerName="github"
								redirectTo={redirectTo}
							/>
						</div>
						<div className="flex items-center justify-center gap-2 pt-6">
							<span className="text-muted-foreground">New here?</span>
							<Link
								to={
									redirectTo
										? `/signup?${encodeURIComponent(redirectTo)}`
										: '/signup'
								}
							>
								Create an account
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export const meta: MetaFunction = () => {
	return [{ title: 'Login to GeekConsole' }];
};

export function ErrorBoundary() {
	return <GeneralErrorBoundary />;
}
