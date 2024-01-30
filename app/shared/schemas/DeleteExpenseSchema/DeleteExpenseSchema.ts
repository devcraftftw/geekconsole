import { z } from 'zod';

export const DELETE_EXPENSE_INTENT = 'delete-expense' as const;

export const DeleteExpenseFormSchema = z.object({
	intent: z.literal(DELETE_EXPENSE_INTENT),
	expenseId: z.string(),
});
