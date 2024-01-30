import { z } from 'zod';

export const DELETE_BOOK_INTENT = 'delete-book' as const;

export const DeleteBookFormSchema = z.object({
	intent: z.literal(DELETE_BOOK_INTENT),
	bookId: z.string(),
});
