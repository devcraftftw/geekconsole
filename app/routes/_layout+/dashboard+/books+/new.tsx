import { type SEOHandle } from '@nasa-gcn/remix-seo';
import { type LoaderFunctionArgs, json } from '@remix-run/node';
import { useLoaderData, type MetaFunction } from '@remix-run/react';
import { prisma, requireUserId } from '~/app/core/server';
import { type BreadcrumbHandle } from '~/app/shared/schemas';
import BookEditor, { action } from './__book-editor';

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

export { action };

export default function NewBookRoute() {
	const data = useLoaderData<typeof loader>();
	return <BookEditor readingStatuses={data.readingStatuses} />;
}
