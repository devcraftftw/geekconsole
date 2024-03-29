import { getFormProps, getInputProps, useForm } from '@conform-to/react';
import { getZodConstraint, parseWithZod } from '@conform-to/zod';
import { invariantResponse } from '@epic-web/invariant';
import { type SEOHandle } from '@nasa-gcn/remix-seo';
import {
	type ActionFunctionArgs,
	type LoaderFunctionArgs,
	json,
} from '@remix-run/node';
import { Link, useFetcher, useLoaderData } from '@remix-run/react';
import { AuthenticityTokenInput } from 'remix-utils/csrf/react';
import { z } from 'zod';
import {
	requireUserId,
	SESSION_KEY,
} from '#app/core/server-utils/auth/auth.server.ts';
import { validateCSRF } from '#app/core/server-utils/csrf/csrf.server.ts';
import { prisma } from '#app/core/server-utils/db/db.server.ts';
import { authSessionStorage } from '#app/core/server-utils/session/session.server.ts';
import { redirectWithToast } from '#app/core/server-utils/toast/toast.server.ts';
import { useDoubleCheck } from '#app/shared/lib/hooks/index.ts';
import { getUserImgSrc } from '#app/shared/lib/utils/index.ts';
import { NameSchema, UsernameSchema } from '#app/shared/schemas/index.ts';
import {
	Button,
	ErrorList,
	Field,
	Icon,
	StatusButton,
} from '#app/shared/ui/index.ts';
import { twoFAVerificationType } from './profile.two-factor.tsx';

export const handle: SEOHandle = {
	getSitemapEntries: () => null,
};

type ProfileActionArgs = {
	request: Request;
	userId: string;
	formData: FormData;
};

const PROFILE_UPDATE_ACTION_INTENT = 'update-profile';
const DELETE_DATA_ACTION_INTENT = 'delete-data';
const SIGN_OUT_OF_SESSIONS_ACTION_INTENT = 'sign-out-of-sessions';

const ProfileFormSchema = z.object({
	name: NameSchema.optional(),
	username: UsernameSchema,
});

export async function loader({ request }: LoaderFunctionArgs) {
	const userId = await requireUserId(request);

	const user = await prisma.user.findUniqueOrThrow({
		where: { id: userId },
		select: {
			id: true,
			name: true,
			username: true,
			email: true,
			image: {
				select: { id: true },
			},
			_count: {
				select: {
					sessions: {
						where: {
							expirationDate: { gt: new Date() },
						},
					},
				},
			},
		},
	});

	const twoFactorVerification = await prisma.verification.findUnique({
		select: { id: true },
		where: { target_type: { type: twoFAVerificationType, target: userId } },
	});

	const password = await prisma.password.findUnique({
		select: { userId: true },
		where: { userId },
	});

	return json({
		user,
		hasPassword: Boolean(password),
		isTwoFactorEnabled: Boolean(twoFactorVerification),
	});
}

export async function action({ request }: ActionFunctionArgs) {
	const userId = await requireUserId(request);

	const formData = await request.formData();

	await validateCSRF(formData, request.headers);

	const intent = formData.get('intent');

	switch (intent) {
		case PROFILE_UPDATE_ACTION_INTENT: {
			return profileUpdateAction({ request, userId, formData });
		}

		case SIGN_OUT_OF_SESSIONS_ACTION_INTENT: {
			return signOutOfSessionsAction({ request, userId, formData });
		}

		case DELETE_DATA_ACTION_INTENT: {
			return deleteDataAction({ request, userId, formData });
		}

		default: {
			throw new Response(`Invalid intent "${intent}"`, { status: 400 });
		}
	}
}

export default function EditUserProfile() {
	const data = useLoaderData<typeof loader>();

	return (
		<div className="flex flex-col gap-12">
			<div className="flex justify-center">
				<div className="relative size-52">
					<img
						src={getUserImgSrc(data.user.image?.id)}
						alt={data.user.username}
						className="size-full rounded-full object-cover"
					/>
					<Button
						asChild
						variant="outline"
						className="absolute -right-3 top-3 flex size-10 items-center justify-center rounded-full p-0"
					>
						<Link
							preventScrollReset
							to="photo"
							title="Change profile photo"
							aria-label="Change profile photo"
						>
							<Icon name="camera" className="size-4" />
						</Link>
					</Button>
				</div>
			</div>

			<UpdateProfile />

			<div className="col-span-6 my-6 h-1 border-b-[1.5px] border-foreground" />

			<div className="col-span-full flex flex-col gap-6">
				<div>
					<Link to="change-email">
						<Icon name="envelope-closed">
							Change email from {data.user.email}
						</Icon>
					</Link>
				</div>

				<div>
					<Link to="two-factor">
						{data.isTwoFactorEnabled ? (
							<Icon name="lock-closed">2FA is enabled</Icon>
						) : (
							<Icon name="lock-open-1">Enable 2FA</Icon>
						)}
					</Link>
				</div>

				<div>
					<Link to={data.hasPassword ? 'password' : 'password/create'}>
						<Icon name="dots-horizontal">
							{data.hasPassword ? 'Change Password' : 'Create a Password'}
						</Icon>
					</Link>
				</div>

				<div>
					<Link to="connections">
						<Icon name="link-2">Manage connections</Icon>
					</Link>
				</div>

				<div>
					<Link
						reloadDocument
						download="my-geek-console-data.json"
						to="/resources/download-user-data"
					>
						<Icon name="download">Download your data</Icon>
					</Link>
				</div>

				<SignOutOfSessions />
				<DeleteData />
			</div>
		</div>
	);
}

async function profileUpdateAction({ userId, formData }: ProfileActionArgs) {
	const submission = await parseWithZod(formData, {
		async: true,
		schema: ProfileFormSchema.superRefine(async ({ username }, ctx) => {
			const existingUsername = await prisma.user.findUnique({
				where: { username },
				select: { id: true },
			});

			if (existingUsername && existingUsername.id !== userId) {
				ctx.addIssue({
					path: ['username'],
					code: z.ZodIssueCode.custom,
					message: 'A user already exists with this username',
				});
			}
		}),
	});

	if (submission.status !== 'success') {
		return json(
			{ result: submission.reply() },
			{
				status: submission.status === 'error' ? 400 : 200,
			},
		);
	}

	const data = submission.value;

	await prisma.user.update({
		select: { username: true },
		where: { id: userId },
		data: {
			name: data.name,
			username: data.username,
		},
	});

	return json({
		result: submission.reply(),
	});
}

function UpdateProfile() {
	const data = useLoaderData<typeof loader>();

	const fetcher = useFetcher<typeof profileUpdateAction>();

	const [form, fields] = useForm({
		id: 'edit-profile',
		constraint: getZodConstraint(ProfileFormSchema),
		lastResult: fetcher.data?.result,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: ProfileFormSchema });
		},
		defaultValue: {
			username: data.user.username,
			name: data.user.name ?? '',
		},
	});

	return (
		<fetcher.Form method="POST" {...getFormProps(form)}>
			<AuthenticityTokenInput />

			<div className="grid grid-cols-6 gap-x-10">
				<Field
					className="col-span-3"
					labelProps={{
						htmlFor: fields.username.id,
						children: 'Username',
					}}
					inputProps={getInputProps(fields.username, { type: 'text' })}
					errors={fields.username.errors}
				/>
				<Field
					className="col-span-3"
					labelProps={{ htmlFor: fields.name.id, children: 'Name' }}
					inputProps={getInputProps(fields.name, { type: 'text' })}
					errors={fields.name.errors}
				/>
			</div>

			<ErrorList errors={form.errors} id={form.errorId} />

			<div className="mt-8 flex justify-center">
				<StatusButton
					type="submit"
					size="wide"
					name="intent"
					value={PROFILE_UPDATE_ACTION_INTENT}
					status={fetcher.state !== 'idle' ? 'pending' : form.status ?? 'idle'}
				>
					Save changes
				</StatusButton>
			</div>
		</fetcher.Form>
	);
}

async function signOutOfSessionsAction({ request, userId }: ProfileActionArgs) {
	const authSession = await authSessionStorage.getSession(
		request.headers.get('cookie'),
	);

	const sessionId = authSession.get(SESSION_KEY);

	invariantResponse(
		sessionId,
		'You must be authenticated to sign out of other sessions',
	);

	await prisma.session.deleteMany({
		where: {
			userId,
			id: { not: sessionId },
		},
	});

	return json({ status: 'success' } as const);
}

function SignOutOfSessions() {
	const data = useLoaderData<typeof loader>();
	const dc = useDoubleCheck();

	const fetcher = useFetcher<typeof signOutOfSessionsAction>();
	const otherSessionsCount = data.user._count.sessions - 1;

	return (
		<div>
			{otherSessionsCount ? (
				<fetcher.Form method="POST">
					<AuthenticityTokenInput />
					<StatusButton
						{...dc.getButtonProps({
							type: 'submit',
							name: 'intent',
							value: SIGN_OUT_OF_SESSIONS_ACTION_INTENT,
						})}
						variant={dc.doubleCheck ? 'destructive' : 'default'}
						status={
							fetcher.state !== 'idle'
								? 'pending'
								: fetcher.data?.status ?? 'idle'
						}
					>
						<Icon name="avatar">
							{dc.doubleCheck
								? `Are you sure?`
								: `Sign out of ${otherSessionsCount} other sessions`}
						</Icon>
					</StatusButton>
				</fetcher.Form>
			) : (
				<Icon name="avatar">This is your only session</Icon>
			)}
		</div>
	);
}

async function deleteDataAction({ userId }: ProfileActionArgs) {
	await prisma.user.delete({ where: { id: userId } });

	return redirectWithToast('/', {
		type: 'success',
		title: 'Data Deleted',
		description: 'All of your data has been deleted',
	});
}

function DeleteData() {
	const dc = useDoubleCheck();
	const fetcher = useFetcher<typeof deleteDataAction>();

	return (
		<div>
			<fetcher.Form method="POST">
				<AuthenticityTokenInput />

				<StatusButton
					{...dc.getButtonProps({
						type: 'submit',
						name: 'intent',
						value: DELETE_DATA_ACTION_INTENT,
					})}
					variant={dc.doubleCheck ? 'destructive' : 'default'}
					status={fetcher.state !== 'idle' ? 'pending' : 'idle'}
				>
					<Icon name="trash">
						{dc.doubleCheck ? 'Are you sure?' : 'Delete all your data'}
					</Icon>
				</StatusButton>
			</fetcher.Form>
		</div>
	);
}
