import { getFormProps, getInputProps, useForm } from '@conform-to/react';
import { getZodConstraint, parseWithZod } from '@conform-to/zod';
import {
	json,
	redirect,
	type LoaderFunctionArgs,
	type ActionFunctionArgs,
	type MetaFunction,
} from '@remix-run/node';
import { Form, useActionData, useLoaderData } from '@remix-run/react';
import {
	requireAnonymous,
	resetUserPassword,
} from '#app/core/server-utils/auth/auth.server';
import { verifySessionStorage } from '#app/core/server-utils/verification/verification.server';
import { useIsPending } from '#app/shared/lib/hooks/index.ts';
import { PasswordAndConfirmPasswordSchema } from '#app/shared/schemas/index.ts';
import {
	ErrorList,
	Field,
	GeneralErrorBoundary,
	StatusButton,
} from '#app/shared/ui/index.ts';

export const RESET_PASSWORD_USERNAME_SESSION_KEY = 'resetPasswordUsername';

const ResetPasswordSchema = PasswordAndConfirmPasswordSchema;

async function requireResetPasswordUsername(request: Request) {
	await requireAnonymous(request);

	const verifySession = await verifySessionStorage.getSession(
		request.headers.get('cookie'),
	);

	const resetPasswordUsername = verifySession.get(
		RESET_PASSWORD_USERNAME_SESSION_KEY,
	);

	if (typeof resetPasswordUsername !== 'string' || !resetPasswordUsername) {
		throw redirect('/login');
	}

	return resetPasswordUsername;
}

export async function loader({ request }: LoaderFunctionArgs) {
	const resetPasswordUsername = await requireResetPasswordUsername(request);
	return json({ resetPasswordUsername });
}

export async function action({ request }: ActionFunctionArgs) {
	const resetPasswordUsername = await requireResetPasswordUsername(request);

	const formData = await request.formData();

	const submission = parseWithZod(formData, {
		schema: ResetPasswordSchema,
	});

	if (submission.status !== 'success') {
		return json(
			{ result: submission.reply() },
			{
				status: submission.status === 'error' ? 400 : 200,
			},
		);
	}

	const { password } = submission.value;

	await resetUserPassword({ username: resetPasswordUsername, password });

	const verifySession = await verifySessionStorage.getSession();

	return redirect('/login', {
		headers: {
			'set-cookie': await verifySessionStorage.destroySession(verifySession),
		},
	});
}

export default function ResetPasswordRoute() {
	const data = useLoaderData<typeof loader>();
	const actionData = useActionData<typeof action>();
	const isPending = useIsPending();

	const [form, fields] = useForm({
		id: 'reset-password',
		constraint: getZodConstraint(ResetPasswordSchema),
		lastResult: actionData?.result,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: ResetPasswordSchema });
		},
		shouldRevalidate: 'onBlur',
	});

	return (
		<div className="flex flex-col justify-center pb-32 pt-20">
			<div className="text-center">
				<h1 className="text-h1">Password Reset</h1>
				<p className="mt-3 text-body-md text-muted-foreground">
					Hi, {data.resetPasswordUsername}. No worries. It happens all the time.
				</p>
			</div>
			<div className="mx-auto mt-16 min-w-[368px] max-w-sm">
				<Form method="POST" {...getFormProps(form)}>
					<Field
						labelProps={{
							htmlFor: fields.password.id,
							children: 'New Password',
						}}
						inputProps={{
							...getInputProps(fields.password, { type: 'password' }),
							autoComplete: 'new-password',
							autoFocus: true,
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

					<ErrorList errors={form.errors} id={form.errorId} />

					<StatusButton
						className="w-full"
						status={isPending ? 'pending' : form.status ?? 'idle'}
						type="submit"
						disabled={isPending}
					>
						Reset password
					</StatusButton>
				</Form>
			</div>
		</div>
	);
}

export const meta: MetaFunction = () => {
	return [{ title: 'Reset Password | GeekConsole' }];
};

export function ErrorBoundary() {
	return <GeneralErrorBoundary />;
}
