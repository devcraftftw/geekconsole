import { getFormProps, getInputProps, useForm } from '@conform-to/react';
import { getZodConstraint, parseWithZod } from '@conform-to/zod';
import { type SEOHandle } from '@nasa-gcn/remix-seo';
import {
	json,
	redirect,
	type ActionFunctionArgs,
	type LoaderFunctionArgs,
} from '@remix-run/node';
import { Form, useActionData, useLoaderData } from '@remix-run/react';
import { AuthenticityTokenInput } from 'remix-utils/csrf/react';
import { z } from 'zod';
import { requireUserId } from '~/app/core/server-utils/auth/auth.server';
import { validateCSRF } from '~/app/core/server-utils/csrf/csrf.server';
import { prisma } from '~/app/core/server-utils/db/db.server';
import { sendEmail } from '~/app/core/server-utils/email/email.server';
import { verifySessionStorage } from '~/app/core/server-utils/verification/verification.server';
import { useIsPending } from '~/app/shared/lib/hooks/index.ts';
import {
	type BreadcrumbHandle,
	EmailSchema,
} from '~/app/shared/schemas/index.ts';
import { ErrorList, Field, Icon, StatusButton } from '~/app/shared/ui/index.ts';
import {
	prepareVerification,
	requireRecentVerification,
} from '../_auth+/verify.server';
import { EmailChangeEmail } from './profile.change-email.server';

export const handle: BreadcrumbHandle & SEOHandle = {
	breadcrumb: <Icon name="envelope-closed">Change Email</Icon>,
	getSitemapEntries: () => null,
};

export const newEmailAddressSessionKey = 'new-email-address';

const ChangeEmailSchema = z.object({
	email: EmailSchema,
});

export async function loader({ request }: LoaderFunctionArgs) {
	await requireRecentVerification(request);
	const userId = await requireUserId(request);

	const user = await prisma.user.findUnique({
		where: { id: userId },
		select: { email: true },
	});

	if (!user) {
		const params = new URLSearchParams({ redirectTo: request.url });
		throw redirect(`/login?${params}`);
	}

	return json({ user });
}

export async function action({ request }: ActionFunctionArgs) {
	const userId = await requireUserId(request);

	const formData = await request.formData();

	await validateCSRF(formData, request.headers);

	const submission = await parseWithZod(formData, {
		schema: ChangeEmailSchema.superRefine(async (data, ctx) => {
			const existingUser = await prisma.user.findUnique({
				where: { email: data.email },
			});

			if (existingUser) {
				ctx.addIssue({
					path: ['email'],
					code: z.ZodIssueCode.custom,
					message: 'This email is already in use.',
				});
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

	const { otp, redirectTo, verifyUrl } = await prepareVerification({
		period: 10 * 60,
		request,
		target: userId,
		type: 'change-email',
	});

	const response = await sendEmail({
		to: submission.value.email,
		subject: 'GeekConsole Email Change Verification',
		react: <EmailChangeEmail verifyUrl={verifyUrl.toString()} otp={otp} />,
	});

	if (response.status === 'success') {
		const verifySession = await verifySessionStorage.getSession();
		verifySession.set(newEmailAddressSessionKey, submission.value.email);

		return redirect(redirectTo.toString(), {
			headers: {
				'set-cookie': await verifySessionStorage.commitSession(verifySession),
			},
		});
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

export default function ChangeEmailRoute() {
	const data = useLoaderData<typeof loader>();
	const actionData = useActionData<typeof action>();
	const isPending = useIsPending();

	const [form, fields] = useForm({
		id: 'change-email-form',
		constraint: getZodConstraint(ChangeEmailSchema),
		lastResult: actionData?.result,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: ChangeEmailSchema });
		},
	});

	return (
		<div>
			<h1 className="text-h1">Change Email</h1>
			<p>You will receive an email at the new email address to confirm.</p>
			<p>
				An email notice will also be sent to your old address {data.user.email}.
			</p>
			<div className="mx-auto mt-5 max-w-sm">
				<Form method="POST" {...getFormProps(form)}>
					<AuthenticityTokenInput />

					<Field
						labelProps={{ children: 'New Email' }}
						inputProps={{
							...getInputProps(fields.email, { type: 'email' }),
							autoComplete: 'email',
						}}
						errors={fields.email.errors}
					/>

					<ErrorList id={form.errorId} errors={form.errors} />

					<div>
						<StatusButton
							status={isPending ? 'pending' : form.status ?? 'idle'}
						>
							Send Confirmation
						</StatusButton>
					</div>
				</Form>
			</div>
		</div>
	);
}
