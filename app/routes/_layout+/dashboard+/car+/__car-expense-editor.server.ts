import { parseWithZod } from '@conform-to/zod';
import { createId } from '@paralleldrive/cuid2';
import { type ActionFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/react';
import { z } from 'zod';
import { requireUserId } from '#app/core/server-utils/auth/auth.server';
import { validateCSRF } from '#app/core/server-utils/csrf/csrf.server';
import { prisma } from '#app/core/server-utils/db/db.server';
import { checkHoneypot } from '#app/core/server-utils/honeypot/honeypot.server';
import { redirectWithToast } from '#app/core/server-utils/toast/toast.server';
import { NewExpenseFormSchema } from './__car-expense-editor';

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
