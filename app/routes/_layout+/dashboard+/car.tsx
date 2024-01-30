import { useForm } from '@conform-to/react';
import { parse } from '@conform-to/zod';
import { invariant, invariantResponse } from '@epic-web/invariant';
import { type SEOHandle } from '@nasa-gcn/remix-seo';
import { createId } from '@paralleldrive/cuid2';
import { type CarSpending } from '@prisma/client';
import {
	type ActionFunctionArgs,
	type LoaderFunctionArgs,
	json,
} from '@remix-run/node';
import {
	type MetaFunction,
	useLoaderData,
	Outlet,
	Link,
	useActionData,
	Form,
} from '@remix-run/react';

import {
	type ColumnFiltersState,
	type SortingState,
	type VisibilityState,
	type Table as TanStackTable,
	type ColumnDef,
	flexRender,
	getCoreRowModel,
	getFacetedRowModel,
	getFacetedUniqueValues,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { format } from 'date-fns';
import { type FormEvent, useState } from 'react';
import { AuthenticityTokenInput } from 'remix-utils/csrf/react';
import {
	type ToastInput,
	createToastHeaders,
	prisma,
	requireUserId,
	requireUserWithPermission,
	validateCSRF,
} from '~/app/core/server';
import { useIsPending } from '~/app/shared/lib/hooks';
import {
	DELETE_EXPENSE_INTENT,
	type BreadcrumbHandle,
	DeleteExpenseFormSchema,
} from '~/app/shared/schemas';
import {
	Button,
	DataTableColumnHeader,
	DataTableFacetedFilter,
	DataTablePagination,
	DataTableViewOptions,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	ErrorList,
	GeneralErrorBoundary,
	Icon,
	StatusButton,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '~/app/shared/ui';

type CleanSpending = {
	type: string;
	date: string;
} & Omit<
	CarSpending,
	'createdAt' | 'updatedAt' | 'ownerId' | 'typeId' | 'date'
>;

type DataTableToolbarProps<TData> = {
	table: TanStackTable<TData>;
};

type DataTableProps<TData, TValue> = {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
};

export const meta: MetaFunction = () => {
	return [
		{ title: 'Car expenses | GeekConsole' },
		{ name: 'description', content: 'Track your car expenses with ease' },
	];
};

export const handle: BreadcrumbHandle & SEOHandle = {
	breadcrumb: 'Car Expenses',
	getSitemapEntries: () => null,
};

export default function CarRoute() {
	return (
		<>
			<div className="flex w-full flex-col gap-6">
				<Button asChild className="w-3/12">
					<Link to="new">Add new expense</Link>
				</Button>

				<CarSpendingsTable />
			</div>

			<Outlet />
		</>
	);
}

export function DeleteExpense({ id }: { id: string }) {
	const actionData = useActionData<typeof action>();
	const isPending = useIsPending();
	const [form] = useForm({
		id: 'deleteExpense',
		lastSubmission: actionData?.submission,
	});

	const submit = (event: FormEvent<HTMLFormElement>) => {
		form.props.onSubmit(event);

		// dirty hack to programatically close dropdown after item removal
		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
	};

	return (
		<Form method="POST" {...form.props} onSubmit={submit}>
			<AuthenticityTokenInput />
			<input type="hidden" name="expenseId" value={id} />

			<StatusButton
				type="submit"
				name="intent"
				value={DELETE_EXPENSE_INTENT}
				variant="destructive"
				status={isPending ? 'pending' : actionData?.status ?? 'idle'}
				disabled={isPending}
				className="w-full max-md:aspect-square max-md:px-0"
			>
				<Icon name="trash" className="scale-125 max-md:scale-150">
					<span className="max-md:hidden">Delete</span>
				</Icon>
			</StatusButton>
			<ErrorList errors={form.errors} id={form.errorId} />
		</Form>
	);
}

const ExpenseDropdownMenu = ({ spending }: { spending: CleanSpending }) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="size-8 p-0">
					<span className="sr-only">Open menu</span>
					<Icon name="more-horizontal" size="md" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-[150px]">
				<DropdownMenuLabel>Actions</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem asChild>
					<Link to={`${spending.id}/edit`} prefetch="intent">
						Edit expense
					</Link>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem asChild>
					<DeleteExpense id={spending.id} />
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export const columns: ColumnDef<CleanSpending>[] = [
	{
		accessorKey: 'type',
		header: 'Expense Type',
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
	{
		accessorKey: 'date',
		header: ({ column }) => {
			return <DataTableColumnHeader column={column} title="Date" />;
		},
	},
	{
		accessorKey: 'value',
		header: ({ column }) => {
			return <DataTableColumnHeader column={column} title="Value" />;
		},
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue('value'));

			const formatted = new Intl.NumberFormat('ru-RU', {
				style: 'currency',
				currency: 'RUB',
			}).format(amount);

			return <div className="text-left font-medium">{formatted}</div>;
		},
	},
	{
		accessorKey: 'comment',
		header: 'Comment',
	},
	{
		id: 'actions',
		cell: ({ row }) => {
			return <ExpenseDropdownMenu spending={row.original} />;
		},
	},
];

function CarSpendingsTable() {
	const data = useLoaderData<typeof loader>();

	const mappedSpendings = data.spendings.map((spending) => {
		const type = data.spendingTypes.find(
			(spendingType) => spendingType.id === spending.typeId,
		);
		invariant(type, 'Could not find a spending type');

		const dateStr = format(spending.date, 'dd/MM/yyyy');

		return {
			id: spending.id,
			date: dateStr,
			value: spending.value,
			comment: spending.comment,
			type: type.name,
		};
	});

	return <CarExpensesDataTable columns={columns} data={mappedSpendings} />;
}

function CarExpensesDataTable<TData, TValue>({
	columns,
	data,
}: DataTableProps<TData, TValue>) {
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
	const [sorting, setSorting] = useState<SortingState>([]);

	const table = useReactTable({
		data,
		columns,
		state: {
			sorting,
			columnVisibility,
			columnFilters,
		},
		enableRowSelection: true,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		onColumnVisibilityChange: setColumnVisibility,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFacetedRowModel: getFacetedRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
	});

	return (
		<div className="space-y-4">
			<DataTableToolbar table={table} />

			<div className="rounded-md border">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id} colSpan={header.colSpan}>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef.header,
														header.getContext(),
													)}
										</TableHead>
									);
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && 'selected'}
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext(),
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center"
								>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>

			<DataTablePagination table={table} />
		</div>
	);
}

function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
	const isFiltered = table.getState().columnFilters.length > 0;
	const data = useLoaderData<typeof loader>();

	const mappedSpendingTypes = data.spendingTypes.map((type) => {
		return { label: type.name, value: type.name };
	});

	return (
		<div className="flex items-center justify-between">
			<div className="flex flex-1 items-center space-x-2">
				{table.getColumn('type') && (
					<DataTableFacetedFilter
						column={table.getColumn('type')}
						title="Expense type"
						options={mappedSpendingTypes}
					/>
				)}
				{isFiltered && (
					<Button
						variant="ghost"
						onClick={() => table.resetColumnFilters()}
						className="h-8 px-2 lg:px-3"
					>
						Reset
						<Icon name="cross-2" size="sm" className="ml-2" />
					</Button>
				)}
			</div>

			<DataTableViewOptions table={table} />
		</div>
	);
}

export const action = async ({ request }: ActionFunctionArgs) => {
	const userId = await requireUserId(request);

	const formData = await request.formData();

	await validateCSRF(formData, request.headers);

	const submission = parse(formData, {
		schema: DeleteExpenseFormSchema,
	});

	if (submission.intent !== 'submit') {
		return json({ status: 'idle', submission } as const);
	}

	if (!submission.value) {
		return json({ status: 'error', submission } as const, { status: 400 });
	}

	const { expenseId } = submission.value;

	const expense = await prisma.carSpending.findFirst({
		select: { id: true, ownerId: true },
		where: { id: expenseId },
	});

	invariantResponse(expense, 'Not found', { status: 404 });

	const isOwner = userId === expense.ownerId;
	await requireUserWithPermission(
		request,
		isOwner ? 'delete:carSpending:own' : 'delete:carSpending:any',
	);

	await prisma.carSpending.delete({ where: { id: expense.id } });

	const successToast: ToastInput = {
		id: createId(),
		type: 'success',
		title: 'Expense deleted',
		description: 'Car expense has been deleted',
	};

	return json({ status: 'idle', submission } as const, {
		headers: await createToastHeaders(successToast),
	});
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
	const userId = await requireUserId(request);

	const spendings = await prisma.carSpending.findMany({
		where: { ownerId: userId },
		select: { id: true, typeId: true, date: true, value: true, comment: true },
	});

	const spendingTypes = await prisma.carSpendingType.findMany({
		select: { id: true, name: true },
	});

	const totalAmountSpent = spendings.reduce((acc, val) => val.value + acc, 0);

	return json({
		spendings,
		spendingTypes,
		totalAmountSpent,
	});
};

export function ErrorBoundary() {
	return (
		<GeneralErrorBoundary
			statusHandlers={{
				403: () => <p>You are not allowed to do that</p>,
				404: () => <p>Not found</p>,
			}}
		/>
	);
}
