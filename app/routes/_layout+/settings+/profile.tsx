import { invariantResponse } from '@epic-web/invariant';
import { type SEOHandle } from '@nasa-gcn/remix-seo';
import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { Link, Outlet, useMatches } from '@remix-run/react';
import { z } from 'zod';
import { requireUserId } from '~/app/core/server-utils/auth/auth.server';
import { prisma } from '~/app/core/server-utils/db/db.server';
import { useUser } from '~/app/shared/lib/hooks/index.ts';
import { cn } from '~/app/shared/lib/utils/index.ts';
import { BreadcrumbHandle } from '~/app/shared/schemas/index.ts';
import { Icon, Spacer } from '~/app/shared/ui/index.ts';

export const handle: BreadcrumbHandle & SEOHandle = {
	breadcrumb: <Icon name="file-text">Edit Profile</Icon>,
	getSitemapEntries: () => null,
};

export async function loader({ request }: LoaderFunctionArgs) {
	const userId = await requireUserId(request);

	const user = await prisma.user.findUnique({
		where: { id: userId },
		select: { username: true },
	});

	invariantResponse(user, 'User not found', { status: 404 });

	return json({});
}

const BreadcrumbHandleMatch = z.object({
	handle: BreadcrumbHandle,
});

export default function EditUserProfile() {
	const user = useUser();

	const matches = useMatches();

	const breadcrumbs = matches
		.map((m) => {
			const result = BreadcrumbHandleMatch.safeParse(m);

			if (!result.success || !result.data.handle.breadcrumb) return null;

			return (
				<Link key={m.id} to={m.pathname} className="flex items-center">
					{result.data.handle.breadcrumb}
				</Link>
			);
		})
		.filter(Boolean);

	return (
		<div>
			<div>
				<ul className="flex gap-3">
					<li>
						<Link
							className="text-muted-foreground"
							to={`/profile/${user.username}`}
						>
							Profile
						</Link>
					</li>
					{breadcrumbs.map((breadcrumb, i, arr) => (
						<li
							key={i}
							className={cn('flex items-center gap-3', {
								'text-muted-foreground': i < arr.length - 1,
							})}
						>
							▶️ {breadcrumb}
						</li>
					))}
				</ul>
			</div>

			<Spacer size="xs" />

			<div className="mx-auto bg-muted px-6 py-8 md:container md:rounded-3xl">
				<Outlet />
			</div>
		</div>
	);
}
