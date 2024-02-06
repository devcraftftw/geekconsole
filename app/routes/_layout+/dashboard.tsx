import { type SEOHandle } from '@nasa-gcn/remix-seo';
import {
	Outlet,
	type MetaFunction,
	NavLink,
	Link,
	useMatches,
} from '@remix-run/react';
import { Fragment } from 'react';
import { z } from 'zod';
import { useTheme } from '~/app/shared/lib/hooks';
import { cn } from '~/app/shared/lib/utils/index.ts';
import { BreadcrumbHandle } from '~/app/shared/schemas/index.ts';
import { Icon, SmallLogo } from '~/app/shared/ui/index.ts';

export const meta: MetaFunction = () => {
	return [
		{ title: 'Dashboard | GeekConsole' },
		{ name: 'description', content: 'This is your dashboard' },
	];
};

const DASHBOARD_ROUTES = [
	{
		path: 'books',
		text: 'Books to Read',
	},
	{
		path: 'car',
		text: 'Car to Maintain',
	},
	// NOTE coming soon
	// {
	// 	path: 'games',
	// 	text: 'Games to Play',
	// },
];

const NAV_LINK_DEFAULT_CN =
	'flex items-center gap-3 rounded-lg px-3 py-2 transition-all text-muted-foreground hover:text-foreground cursor-pointer';
const NAV_LINK_ACTIVE_CN =
	'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50';

export const handle: BreadcrumbHandle & SEOHandle = {
	breadcrumb: 'Dashboard',
	getSitemapEntries: () => null,
};

const BreadcrumbHandleMatch = z.object({
	handle: BreadcrumbHandle,
});

export default function DashboardRoute() {
	const theme = useTheme();
	const isDark = theme === 'dark';

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
		<div className="grid min-h-[650px] w-full lg:grid-cols-[280px_1fr]">
			<div className="hidden rounded-md border-r bg-muted lg:block">
				<div className="flex h-full max-h-screen flex-col gap-2">
					<div className="flex h-[60px] items-center border-b px-6">
						<Link
							className="flex items-center gap-2 font-semibold"
							to="/dashboard"
						>
							<SmallLogo isDark={isDark} />
							<span>Dashboard</span>
						</Link>
					</div>
					<div className="flex-1 overflow-auto py-2">
						<nav className="grid items-start px-4 text-sm font-medium">
							{DASHBOARD_ROUTES.map((route) => (
								<NavLink
									key={route.path}
									to={route.path}
									className={({ isActive }) =>
										cn(NAV_LINK_DEFAULT_CN, isActive && NAV_LINK_ACTIVE_CN)
									}
								>
									{route.text}
								</NavLink>
							))}
						</nav>
					</div>
				</div>
			</div>

			<div className="flex flex-col px-6">
				<header className="flex h-14 items-center gap-4 rounded-md border-b bg-muted px-6">
					<ul className="flex gap-3">
						{breadcrumbs.map((breadcrumb, i, arr) => (
							<Fragment key={i}>
								<li
									className={cn(
										'flex items-center gap-3 hover:text-foreground',
										{
											'text-muted-foreground': i < arr.length - 1,
										},
									)}
								>
									{breadcrumb}
									{i !== arr.length - 1 && <Icon name="arrow-right" />}
								</li>
							</Fragment>
						))}
					</ul>
				</header>
				<main className="flex flex-1 flex-wrap gap-4 p-4 md:gap-8 md:p-6">
					<Outlet />
				</main>
			</div>
		</div>
	);
}
