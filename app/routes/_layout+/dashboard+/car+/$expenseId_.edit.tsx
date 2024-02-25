import { invariantResponse } from '@epic-web/invariant';
import { type SEOHandle } from '@nasa-gcn/remix-seo';
import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { type MetaFunction, useLoaderData } from '@remix-run/react';
import { requireUserId } from '#app/core/server-utils/auth/auth.server';
import { prisma } from '#app/core/server-utils/db/db.server';
import { type BreadcrumbHandle } from '#app/shared/schemas';
import { GeneralErrorBoundary } from '#app/shared/ui';
import CarExpenseEditor from './__car-expense-editor';

export { action } from './__car-expense-editor.server';

export const handle: BreadcrumbHandle & SEOHandle = {
	breadcrumb: 'Edit Car Expense',
	getSitemapEntries: () => null,
};

export const meta: MetaFunction = () => {
	return [
		{ title: 'Edit expense | GeekConsole' },
		{ name: 'description', content: 'Edit your car expense here' },
	];
};

export async function loader({ params, request }: LoaderFunctionArgs) {
	const userId = await requireUserId(request);

	const spending = await prisma.carSpending.findFirst({
		select: {
			id: true,
			value: true,
			date: true,
			typeId: true,
			comment: true,
		},
		where: {
			id: params.expenseId,
			ownerId: userId,
		},
	});

	const spendingTypes = await prisma.carSpendingType.findMany({
		select: { id: true, name: true },
	});

	invariantResponse(spending, 'Not found', { status: 404 });

	return json({ spending, spendingTypes });
}

export default function BookEdit() {
	const data = useLoaderData<typeof loader>();
	return <CarExpenseEditor spending={data.spending} />;
}

export function ErrorBoundary() {
	return (
		<GeneralErrorBoundary
			statusHandlers={{
				404: ({ params }) => (
					<p>No expense with the id "{params.expenseId}" exists</p>
				),
			}}
		/>
	);
}
