import { type SEOHandle } from '@nasa-gcn/remix-seo';
import { type LoaderFunctionArgs, json } from '@remix-run/node';
import { type MetaFunction } from '@remix-run/react';
import { prisma, requireUserId } from '~/app/core/server';
import { type BreadcrumbHandle } from '~/app/shared/schemas';
import CarExpenseEditor, { action } from './__car-expense-editor';

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

export { action };
export default CarExpenseEditor;
