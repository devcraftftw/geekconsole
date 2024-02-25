import { type SEOHandle } from '@nasa-gcn/remix-seo';
import { type LoaderFunctionArgs, json } from '@remix-run/node';
import { useLoaderData, type MetaFunction } from '@remix-run/react';
import { requireUserId } from '~/app/core/server-utils/auth/auth.server.ts';
import { prisma } from '~/app/core/server-utils/db/db.server.ts';
import { type BreadcrumbHandle } from '~/app/shared/schemas';
import BookEditor from './__book-editor';

export { action } from './__book-editor.server';

export const handle: BreadcrumbHandle & SEOHandle = {
	breadcrumb: 'New Book',
	getSitemapEntries: () => null,
};

export const meta: MetaFunction = () => {
	return [
		{ title: 'New book | GeekConsole' },
		{ name: 'description', content: 'Add new book to your collection' },
	];
};

export async function loader({ request }: LoaderFunctionArgs) {
	await requireUserId(request);

	const readingStatuses = await prisma.bookReadingStatus.findMany({
		select: { id: true, name: true },
	});

	return json({ readingStatuses });
}

export default function NewBookRoute() {
	const data = useLoaderData<typeof loader>();
	return <BookEditor readingStatuses={data.readingStatuses} />;
}
