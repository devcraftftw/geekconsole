import { invariantResponse } from '@epic-web/invariant';
import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { Form, Link, useLoaderData, type MetaFunction } from '@remix-run/react';
import { prisma } from '#app/core/server-utils/db/db.server';
import { useOptionalUser } from '#app/shared/lib/hooks';
import { getUserImgSrc } from '#app/shared/lib/utils';
import { Spacer, Button, Icon, GeneralErrorBoundary } from '#app/shared/ui';

export async function loader({ params }: LoaderFunctionArgs) {
	const user = await prisma.user.findFirst({
		select: {
			id: true,
			name: true,
			username: true,
			createdAt: true,
			image: { select: { id: true } },
		},
		where: {
			username: params.username,
		},
	});

	invariantResponse(user, 'User not found', { status: 404 });

	return json({ user, userJoinedDisplay: user.createdAt.toLocaleDateString() });
}

export default function ProfileRoute() {
	const data = useLoaderData<typeof loader>();
	const user = data.user;
	const userDisplayName = user.name ?? user.username;
	const loggedInUser = useOptionalUser();
	const isLoggedInUser = data.user.id === loggedInUser?.id;

	return (
		<div className="container flex flex-col items-center justify-center">
			<Spacer size="4xs" />

			<div className="container flex flex-col items-center rounded-3xl bg-muted p-12">
				<div className="relative w-52">
					<div className="absolute -top-40">
						<div className="relative">
							<img
								src={getUserImgSrc(data.user.image?.id)}
								alt={userDisplayName}
								className="size-52 rounded-full object-cover"
							/>
						</div>
					</div>
				</div>

				<Spacer size="sm" />

				<div className="flex flex-col items-center">
					<div className="flex flex-wrap items-center justify-center gap-4">
						<h1 className="text-center text-h2">{userDisplayName}</h1>
					</div>
					<p className="mt-2 text-center text-muted-foreground">
						Joined {data.userJoinedDisplay}
					</p>
					{isLoggedInUser ? (
						<Form action="/logout" method="POST" className="mt-3">
							<Button type="submit" variant="link" size="pill">
								<Icon name="exit" className="scale-125 max-md:scale-150">
									Logout
								</Icon>
							</Button>
						</Form>
					) : null}
					{isLoggedInUser && (
						<div className="mt-10 flex gap-4">
							<Button asChild>
								<Link to="/dashboard" prefetch="intent">
									My dashboard
								</Link>
							</Button>
							<Button asChild>
								<Link to="/settings/profile" prefetch="intent">
									Edit profile
								</Link>
							</Button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export const meta: MetaFunction<typeof loader> = ({ data, params }) => {
	const displayName = data?.user.name ?? params.username;
	return [
		{ title: `${displayName} | GeekConsole` },
		{
			name: 'description',
			content: `Profile of ${displayName} on GeekConsole`,
		},
	];
};

export function ErrorBoundary() {
	return (
		<GeneralErrorBoundary
			statusHandlers={{
				404: ({ params }) => (
					<p>No user with the username "{params.username}" exists</p>
				),
			}}
		/>
	);
}
