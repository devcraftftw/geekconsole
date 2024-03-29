import { getFormProps, getInputProps, useForm } from '@conform-to/react';
import { getZodConstraint, parseWithZod } from '@conform-to/zod';
import * as E from '@react-email/components';
import {
	type MetaFunction,
	json,
	type ActionFunctionArgs,
	redirect,
} from '@remix-run/node';
import { Form, useActionData, useSearchParams } from '@remix-run/react';
import { AuthenticityTokenInput } from 'remix-utils/csrf/react';
import { HoneypotInputs } from 'remix-utils/honeypot/react';
import { z } from 'zod';
import { providerNames } from '#app/core/components/providers/connections.tsx';
import { ProviderConnectionForm } from '#app/core/components/providers/index.ts';
import { validateCSRF } from '#app/core/server-utils/csrf/csrf.server.ts';
import { prisma } from '#app/core/server-utils/db/db.server.ts';
import { sendEmail } from '#app/core/server-utils/email/email.server.ts';
import { checkHoneypot } from '#app/core/server-utils/honeypot/honeypot.server.ts';
import { useIsPending } from '#app/shared/lib/hooks/index.ts';
import { EmailSchema } from '#app/shared/schemas/index.ts';
import {
	ErrorList,
	Field,
	GeneralErrorBoundary,
	StatusButton,
} from '#app/shared/ui/index.ts';
import { prepareVerification } from './verify.server.ts';

const SignupSchema = z.object({
	email: EmailSchema,
});

export async function action({ request }: ActionFunctionArgs) {
	const formData = await request.formData();

	await validateCSRF(formData, request.headers);
	checkHoneypot(formData);

	const submission = await parseWithZod(formData, {
		schema: SignupSchema.superRefine(async (data, ctx) => {
			const existingUser = await prisma.user.findUnique({
				where: { email: data.email },
				select: { id: true },
			});

			if (existingUser) {
				ctx.addIssue({
					path: ['email'],
					code: z.ZodIssueCode.custom,
					message: 'A user already exists with this email',
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

	const { email } = submission.value;

	const { verifyUrl, redirectTo, otp } = await prepareVerification({
		period: 10 * 60,
		request,
		type: 'onboarding',
		target: email,
	});

	const response = await sendEmail({
		to: email,
		subject: 'Welcome to GeekConsole!',
		react: <SignupEmail onboardingUrl={verifyUrl.toString()} otp={otp} />,
	});

	if (response.status === 'success') {
		return redirect(redirectTo.toString());
	} else {
		return json(
			{
				result: submission.reply({ formErrors: [response.error.message] }),
			},
			{
				status: 500,
			},
		);
	}
}

export function SignupEmail({
	onboardingUrl,
	otp,
}: {
	onboardingUrl: string;
	otp: string;
}) {
	return (
		<E.Html lang="en" dir="ltr">
			<E.Container>
				<h1>
					<E.Text>Welcome to GeekConsole!</E.Text>
				</h1>
				<p>
					<E.Text>
						Here's your verification code: <strong>{otp}</strong>
					</E.Text>
				</p>
				<p>
					<E.Text>Or click the link to get started:</E.Text>
				</p>
				<E.Link href={onboardingUrl}>{onboardingUrl}</E.Link>
			</E.Container>
		</E.Html>
	);
}

export default function SignupRoute() {
	const actionData = useActionData<typeof action>();
	const isPending = useIsPending();
	const [searchParams] = useSearchParams();
	const redirectTo = searchParams.get('redirectTo');

	const [form, fields] = useForm({
		id: 'signup-form',
		constraint: getZodConstraint(SignupSchema),
		lastResult: actionData?.result,
		onValidate({ formData }) {
			const result = parseWithZod(formData, { schema: SignupSchema });
			return result;
		},
		shouldRevalidate: 'onBlur',
	});

	return (
		<div className="container flex flex-col justify-center pb-32 pt-20">
			<div className="text-center">
				<h1 className="text-h1">Let's start your journey!</h1>
				<p className="mt-3 text-body-md text-muted-foreground">
					Please enter your email.
				</p>
			</div>
			<div className="mx-auto mt-16 min-w-[368px] max-w-sm">
				<Form method="POST" {...getFormProps(form)}>
					<AuthenticityTokenInput />
					<HoneypotInputs />

					<Field
						labelProps={{
							htmlFor: fields.email.id,
							children: 'Email',
						}}
						inputProps={{
							...getInputProps(fields.email, { type: 'email' }),
							autoFocus: true,
							autoComplete: 'email',
						}}
						errors={fields.email.errors}
					/>

					<ErrorList errors={form.errors} id={form.errorId} />

					<StatusButton
						className="w-full"
						status={isPending ? 'pending' : form.status ?? 'idle'}
						type="submit"
						disabled={isPending}
					>
						Submit
					</StatusButton>
				</Form>
				<ul className="mt-5 flex flex-col gap-5 border-y-2 border-border py-3">
					{providerNames.map((providerName) => (
						<li key={providerName}>
							<ProviderConnectionForm
								type="Signup"
								providerName={providerName}
								redirectTo={redirectTo}
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export const meta: MetaFunction = () => {
	return [{ title: 'Sign Up | GeekConsole' }];
};

export function ErrorBoundary() {
	return <GeneralErrorBoundary />;
}
