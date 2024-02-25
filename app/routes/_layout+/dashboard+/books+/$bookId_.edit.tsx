import { invariantResponse } from '@epic-web/invariant';
import { type SEOHandle } from '@nasa-gcn/remix-seo';
import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { type MetaFunction, useLoaderData } from '@remix-run/react';
import { requireUserId } from '~/app/core/server-utils/auth/auth.server';
import { prisma } from '~/app/core/server-utils/db/db.server';
import { type BreadcrumbHandle } from '~/app/shared/schemas';
import { GeneralErrorBoundary } from '~/app/shared/ui';
import BookEditor from './__book-editor';

export { action } from './__book-editor.server';

export const handle: BreadcrumbHandle & SEOHandle = {
	breadcrumb: 'Edit Book',
	getSitemapEntries: () => null,
};

export const meta: MetaFunction = () => {
	return [
		{ title: 'Edit book | GeekConsole' },
		{ name: 'description', content: 'Edit your favourite book here' },
	];
};

export async function loader({ params, request }: LoaderFunctionArgs) {
	const userId = await requireUserId(request);

	const readingStatuses = await prisma.bookReadingStatus.findMany({
		select: { id: true, name: true },
	});

	const book = await prisma.book.findFirst({
		select: {
			id: true,
			title: true,
			author: true,
			year: true,
			status: {
				select: {
					name: true,
				},
			},
			description: true,
			comment: true,
			images: {
				select: {
					id: true,
					altText: true,
				},
			},
		},
		where: {
			id: params.bookId,
			ownerId: userId,
		},
	});

	invariantResponse(book, 'Not found', { status: 404 });

	return json({ book, readingStatuses });
}

export default function BookEditRoute() {
	const data = useLoaderData<typeof loader>();
	return <BookEditor book={data.book} readingStatuses={data.readingStatuses} />;
}

export function ErrorBoundary() {
	return (
		<GeneralErrorBoundary
			statusHandlers={{
				404: ({ params }) => (
					<p>No book with the id "{params.bookId}" exists</p>
				),
			}}
		/>
	);
}
