import {
	type FieldMetadata,
	useForm,
	useInputControl,
	getFormProps,
	getInputProps,
} from '@conform-to/react';
import { getZodConstraint, parseWithZod } from '@conform-to/zod';
import { createId } from '@paralleldrive/cuid2';
import { type CarSpending } from '@prisma/client';
import {
	type ActionFunctionArgs,
	type SerializeFrom,
	json,
} from '@remix-run/node';
import {
	Form,
	useActionData,
	useLoaderData,
	useNavigate,
} from '@remix-run/react';
import { format } from 'date-fns';
import { useEffect, useRef, useState } from 'react';
import { AuthenticityTokenInput } from 'remix-utils/csrf/react';
import { HoneypotInputs } from 'remix-utils/honeypot/react';
import { useSpinDelay } from 'spin-delay';
import { z } from 'zod';
import {
	checkHoneypot,
	prisma,
	redirectWithToast,
	requireUserId,
	validateCSRF,
} from '~/app/core/server';
import { useSubmitting } from '~/app/shared/lib/hooks';
import { cn, isIsoDate } from '~/app/shared/lib/utils';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	Label,
	DialogFooter,
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectGroup,
	SelectLabel,
	SelectItem,
	Popover,
	PopoverTrigger,
	Icon,
	PopoverContent,
	Calendar,
	Button,
	ErrorList,
	Field,
} from '~/app/shared/ui';
import { type loader as editRouteLoader } from './$expenseId_.edit';
import { type loader as newRouteLoader } from './new';

const NewExpenseFormSchema = z.object({
	id: z.string().optional(),
	date: z
		.string({ required_error: 'A date is required' })
		.superRefine((value, ctx) => {
			if (!isIsoDate(value)) {
				ctx.addIssue({
					path: ['date'],
					code: 'custom',
					message: 'Date format is invalid',
				});
			}
		}),
	value: z
		.number({ required_error: 'A value is required' })
		.positive({ message: 'Value must be a positive number' }),
	typeId: z.string({ required_error: 'An expense type is required' }),
	comment: z.string().optional(),
});

type CleanSpending = Omit<CarSpending, 'createdAt' | 'updatedAt' | 'ownerId'>;

export default function CarExpenseEditor({
	spending,
}: {
	spending?: SerializeFrom<CleanSpending>;
}) {
	const [opened, setOpened] = useState(false);
	const actionData = useActionData<typeof action>();
	const navigate = useNavigate();
	const isSubmitting = useSubmitting();
	const showSpinner = useSpinDelay(isSubmitting);
	const [form, fields] = useForm({
		id: 'carExpenseEditor',
		constraint: getZodConstraint(NewExpenseFormSchema),
		lastResult: actionData?.result,
		shouldValidate: 'onBlur',
		shouldRevalidate: 'onBlur',
		onValidate({ formData }) {
			return parseWithZod(formData, {
				schema: NewExpenseFormSchema,
			});
		},
		defaultValue: {
			date: spending?.date,
			value: spending?.value,
			typeId: spending?.typeId,
			comment: spending?.comment,
		},
	});

	useEffect(() => {
		setOpened(true);
	}, []);

	return (
		<Dialog
			open={opened}
			onOpenChange={() => {
				setOpened(false);
				navigate('/dashboard/car');
			}}
		>
			<DialogContent className="sm:max-w-[400px]">
				<Form method="post" {...getFormProps(form)}>
					<AuthenticityTokenInput />
					<HoneypotInputs />

					{spending ? (
						<input type="hidden" name="id" value={spending.id} />
					) : null}

					<DialogHeader>
						<DialogTitle>Add new expense</DialogTitle>
						<DialogDescription>
							Add new expense here. Click save when you're done.
						</DialogDescription>
					</DialogHeader>

					<div className="flex flex-col py-4">
						<div className="flex flex-col">
							<Label htmlFor={fields.date.id} className="mb-2">
								Date
							</Label>
							<ExpenseDatePicker meta={fields.date} />

							<div className="min-h-[32px] px-4 pb-3 pt-1">
								<ErrorList
									id={fields.date.errorId}
									errors={fields.date.errors}
								/>
							</div>
						</div>

						<div className="flex flex-col">
							<Label htmlFor={fields.typeId.id} className="mb-2">
								Expense type
							</Label>
							<SpendingTypesSelect meta={fields.typeId} />

							<div className="min-h-[32px] px-4 pb-3 pt-1">
								<ErrorList
									id={fields.typeId.errorId}
									errors={fields.typeId.errors}
								/>
							</div>
						</div>

						<Field
							labelProps={{
								children: 'Value',
								htmlFor: fields.value.id,
								className: 'mb-3',
							}}
							inputProps={{
								...getInputProps(fields.value, { type: 'number' }),
							}}
							errors={fields.value.errors}
						/>

						<Field
							labelProps={{
								children: 'Comment',
								htmlFor: fields.comment.id,
								className: 'mb-3',
							}}
							inputProps={{
								...getInputProps(fields.comment, { type: 'text' }),
							}}
							errors={fields.comment.errors}
						/>
					</div>
					<DialogFooter>
						<Button type="submit" disabled={showSpinner}>
							Save changes
						</Button>
					</DialogFooter>
				</Form>
			</DialogContent>
		</Dialog>
	);
}

function SpendingTypesSelect({ meta }: { meta: FieldMetadata<string> }) {
	const data = useLoaderData<typeof newRouteLoader | typeof editRouteLoader>();
	const shadowInputRef = useRef<HTMLInputElement>(null);
	const control = useInputControl(meta);

	return (
		<>
			<input
				ref={shadowInputRef}
				{...getInputProps(meta, {
					type: 'hidden',
				})}
			/>

			<Select
				required
				defaultValue={meta.initialValue}
				onValueChange={control.change}
			>
				<SelectTrigger
					className={cn('w-full', meta.errors ? 'border-input-invalid' : '')}
				>
					<SelectValue placeholder="Select an expense type" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Expense types</SelectLabel>
						{data.spendingTypes.map((type) => (
							<SelectItem key={type.id} value={type.id}>
								{type.name}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</>
	);
}

function ExpenseDatePicker({ meta }: { meta: FieldMetadata<string> }) {
	const defaultDateValue = meta.initialValue
		? new Date(meta.initialValue)
		: undefined;

	const [date, setDate] = useState<Date | undefined>(defaultDateValue);
	const shadowInputRef = useRef<HTMLInputElement>(null);
	const control = useInputControl(meta);

	const onDateSelect = (value: Date | undefined) => {
		setDate(value);
		control.change(value?.toISOString() ?? '');
	};

	return (
		<>
			<input
				ref={shadowInputRef}
				{...getInputProps(meta, {
					type: 'hidden',
				})}
			/>

			<Popover>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						className={cn(
							'w-full justify-start text-left font-normal',
							!date && 'text-muted-foreground',
							meta.errors ? 'border-input-invalid' : '',
						)}
					>
						<Icon name="calendar" size="sm" className="mr-2" />
						{date ? format(date, 'PPP') : <span>Pick a date</span>}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0" align="start">
					<Calendar
						mode="single"
						selected={date}
						onSelect={onDateSelect}
						disabled={(date) =>
							date > new Date() || date < new Date('1900-01-01')
						}
						initialFocus
					/>
				</PopoverContent>
			</Popover>
		</>
	);
}

export const action = async ({ request }: ActionFunctionArgs) => {
	const userId = await requireUserId(request);

	const formData = await request.formData();

	await validateCSRF(formData, request.headers);
	checkHoneypot(formData);

	const submission = await parseWithZod(formData, {
		schema: NewExpenseFormSchema.superRefine(async (data, ctx) => {
			if (!data.id) return;

			const expense = await prisma.carSpending.findUnique({
				select: { id: true },
				where: { id: data.id, ownerId: userId },
			});

			if (!expense) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: 'Expense not found',
				});
			}
		}).transform(async (data) => {
			return {
				...data,
				date: new Date(data.date),
			};
		}),
		async: true,
	});

	if (submission.status !== 'success') {
		return json(
			{ result: submission.reply() },
			{
				status: submission.status === 'error' ? 400 : 200,
			},
		);
	}

	const { id: expenseId, typeId, value, date, comment } = submission.value;

	await prisma.carSpending.upsert({
		select: { id: true },
		where: { id: expenseId ?? '__new_expense__' },
		create: {
			typeId,
			value,
			date,
			comment,
			ownerId: userId,
		},
		update: {
			typeId,
			value,
			date,
			comment,
			ownerId: userId,
		},
	});

	if (expenseId) {
		return redirectWithToast('/dashboard/car', {
			id: createId(),
			type: 'success',
			title: 'Expense updated',
			description: 'Expense has been updated',
		});
	} else {
		return redirectWithToast('/dashboard/car', {
			id: createId(),
			type: 'success',
			title: 'Expense added',
			description: 'New expense has been added',
		});
	}
};
