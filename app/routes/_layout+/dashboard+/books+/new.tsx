import { type SEOHandle } from '@nasa-gcn/remix-seo';
import { type LoaderFunctionArgs, json } from '@remix-run/node';
import { type MetaFunction } from '@remix-run/react';
import { requireUserId } from '~/app/core/server';
import { type BreadcrumbHandle } from '~/app/shared/schemas';
import BookEditor, { action } from './__book-editor';

export const handle: BreadcrumbHandle & SEOHandle = {
	breadcrumb: 'New Book',
	getSitemapEntries: () => null,
};

export const meta: MetaFunction = () => {
	return [
		{ title: 'New book | Geek Console' },
		{ name: 'description', content: 'Add new book to your collection' },
	];
};

export async function loader({ request }: LoaderFunctionArgs) {
	await requireUserId(request);
	return json({});
}

export { action };
export default BookEditor;
