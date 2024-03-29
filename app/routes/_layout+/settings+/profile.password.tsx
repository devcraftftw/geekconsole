import { getFormProps, getInputProps, useForm } from '@conform-to/react';
import { getZodConstraint, parseWithZod } from '@conform-to/zod';
import { type SEOHandle } from '@nasa-gcn/remix-seo';
import {
	json,
	redirect,
	type LoaderFunctionArgs,
	type ActionFunctionArgs,
} from '@remix-run/node';
import { Form, Link, useActionData } from '@remix-run/react';
import { AuthenticityTokenInput } from 'remix-utils/csrf/react';
import { z } from 'zod';
import {
	requireUserId,
	verifyUserPassword,
	getPasswordHash,
} from '#app/core/server-utils/auth/auth.server';
import { validateCSRF } from '#app/core/server-utils/csrf/csrf.server';
import { prisma } from '#app/core/server-utils/db/db.server';
import { redirectWithToast } from '#app/core/server-utils/toast/toast.server';
import { useIsPending } from '#app/shared/lib/hooks/index.ts';
import {
	type BreadcrumbHandle,
	PasswordSchema,
} from '#app/shared/schemas/index.ts';
import {
	Button,
	ErrorList,
	Field,
	Icon,
	StatusButton,
} from '#app/shared/ui/index.ts';

export const handle: BreadcrumbHandle & SEOHandle = {
	breadcrumb: <Icon name="dots-horizontal">Password</Icon>,
	getSitemapEntries: () => null,
};

const ChangePasswordForm = z
	.object({
		currentPassword: PasswordSchema,
		newPassword: PasswordSchema,
		confirmNewPassword: PasswordSchema,
	})
	.superRefine(({ confirmNewPassword, newPassword }, ctx) => {
		if (confirmNewPassword !== newPassword) {
			ctx.addIssue({
				path: ['confirmNewPassword'],
				code: 'custom',
				message: 'The passwords must match',
			});
		}
	});

async function requirePassword(userId: string) {
	const password = await prisma.password.findUnique({
		select: { userId: true },
		where: { userId },
	});

	if (!password) {
		throw redirect('/settings/profile/password/create');
	}
}

export async function loader({ request }: LoaderFunctionArgs) {
	const userId = await requireUserId(request);
	await requirePassword(userId);

	return json({});
}

export async function action({ request }: ActionFunctionArgs) {
	const userId = await requireUserId(request);

	await requirePassword(userId);

	const formData = await request.formData();

	await validateCSRF(formData, request.headers);

	const submission = await parseWithZod(formData, {
		async: true,
		schema: ChangePasswordForm.superRefine(
			async ({ currentPassword, newPassword }, ctx) => {
				if (currentPassword && newPassword) {
					const user = await verifyUserPassword(
						{ id: userId },
						currentPassword,
					);

					if (!user) {
						ctx.addIssue({
							path: ['currentPassword'],
							code: z.ZodIssueCode.custom,
							message: 'Incorrect password.',
						});
					}
				}
			},
		),
	});

	if (submission.status !== 'success') {
		return json(
			{
				result: submission.reply({
					hideFields: ['currentPassword', 'newPassword', 'confirmNewPassword'],
				}),
			},
			{
				status: submission.status === 'error' ? 400 : 200,
			},
		);
	}

	const { newPassword } = submission.value;

	await prisma.user.update({
		select: { username: true },
		where: { id: userId },
		data: {
			password: {
				update: {
					hash: await getPasswordHash(newPassword),
				},
			},
		},
	});

	return redirectWithToast(
		`/settings/profile`,
		{
			type: 'success',
			title: 'Password Changed',
			description: 'Your password has been changed.',
		},
		{ status: 302 },
	);
}

export default function ChangePasswordRoute() {
	const actionData = useActionData<typeof action>();
	const isPending = useIsPending();

	const [form, fields] = useForm({
		id: 'password-change-form',
		constraint: getZodConstraint(ChangePasswordForm),
		lastResult: actionData?.result,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: ChangePasswordForm });
		},
		shouldRevalidate: 'onBlur',
	});

	return (
		<Form method="POST" {...getFormProps(form)} className="mx-auto max-w-md">
			<AuthenticityTokenInput />

			<Field
				labelProps={{ children: 'Current Password' }}
				inputProps={{
					...getInputProps(fields.currentPassword, { type: 'password' }),
					autoComplete: 'current-password',
				}}
				errors={fields.currentPassword.errors}
			/>
			<Field
				labelProps={{ children: 'New Password' }}
				inputProps={{
					...getInputProps(fields.newPassword, { type: 'password' }),
					autoComplete: 'new-password',
				}}
				errors={fields.newPassword.errors}
			/>
			<Field
				labelProps={{ children: 'Confirm New Password' }}
				inputProps={{
					...getInputProps(fields.confirmNewPassword, {
						type: 'password',
					}),
					autoComplete: 'new-password',
				}}
				errors={fields.confirmNewPassword.errors}
			/>

			<ErrorList id={form.errorId} errors={form.errors} />

			<div className="grid w-full grid-cols-2 gap-6">
				<Button variant="secondary" asChild>
					<Link to="..">Cancel</Link>
				</Button>
				<StatusButton
					type="submit"
					status={isPending ? 'pending' : form.status ?? 'idle'}
				>
					Change Password
				</StatusButton>
			</div>
		</Form>
	);
}
