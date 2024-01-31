import { type SEOHandle } from '@nasa-gcn/remix-seo';
import { type LoaderFunctionArgs } from '@remix-run/node';
import {
	type MetaFunction,
	Link,
	Outlet,
	json,
	useLocation,
} from '@remix-run/react';

import { requireUserId } from '~/app/core/server/index.ts';
import { type BreadcrumbHandle } from '~/app/shared/schemas';
import { Button } from '~/app/shared/ui/index.ts';

export const meta: MetaFunction = () => {
	return [
		{ title: 'Books | GeekConsole' },
		{ name: 'description', content: 'Your books collection' },
	];
};

export const handle: BreadcrumbHandle & SEOHandle = {
	breadcrumb: 'Books',
	getSitemapEntries: () => null,
};

export default function Books() {
	const { pathname } = useLocation();

	return (
		<section className="flex w-full flex-col gap-4">
			<div className="flex items-center gap-2">
				<div>
					{pathname !== '/dashboard/books/new' && (
						<Button asChild variant="link">
							<Link to="new" prefetch="intent">
								Add a new book
							</Link>
						</Button>
					)}

					{pathname !== '/dashboard/books/collection' && (
						<Button asChild variant="link">
							<Link to="collection" prefetch="intent">
								Go to Collection
							</Link>
						</Button>
					)}
				</div>
			</div>

			<div className="size-full">
				<Outlet />
			</div>
		</section>
	);
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
	await requireUserId(request);
	return json({});
};
