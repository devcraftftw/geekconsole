import { type SEOHandle } from '@nasa-gcn/remix-seo';
import { type LoaderFunctionArgs, json } from '@remix-run/node';
import { type MetaFunction } from '@remix-run/react';
import { requireUserId } from '~/app/core/server-utils/auth/auth.server';
import { prisma } from '~/app/core/server-utils/db/db.server';
import { type BreadcrumbHandle } from '~/app/shared/schemas';
import CarExpenseEditor from './__car-expense-editor';
export { action } from './__car-expense-editor.server';

export const handle: BreadcrumbHandle & SEOHandle = {
	breadcrumb: 'New Car Expense',
	getSitemapEntries: () => null,
};

export const meta: MetaFunction = () => {
	return [
		{ title: 'New car expense | GeekConsole' },
		{ name: 'description', content: 'Add new car expense to your table' },
	];
};

export async function loader({ request }: LoaderFunctionArgs) {
	await requireUserId(request);

	const spendingTypes = await prisma.carSpendingType.findMany({
		select: { id: true, name: true },
	});

	return json({ spendingTypes });
}

export default CarExpenseEditor;
