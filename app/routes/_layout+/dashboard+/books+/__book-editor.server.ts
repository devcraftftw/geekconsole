import { parseWithZod } from '@conform-to/zod';
import { invariant } from '@epic-web/invariant';
import { createId as cuid } from '@paralleldrive/cuid2';
import {
	unstable_createMemoryUploadHandler as createMemoryUploadHandler,
	json,
	unstable_parseMultipartFormData as parseMultipartFormData,
	redirect,
	type ActionFunctionArgs,
} from '@remix-run/node';
import { z } from 'zod';
import { requireUserId } from '#app/core/server-utils/auth/auth.server';
import { validateCSRF } from '#app/core/server-utils/csrf/csrf.server';
import { prisma } from '#app/core/server-utils/db/db.server';
import {
	BookFormSchema,
	MAX_UPLOAD_SIZE,
	type ImageFieldset,
} from './__book-editor';

function imageHasId(
	image: ImageFieldset,
): image is ImageFieldset & { id: NonNullable<ImageFieldset['id']> } {
	return image.id != null;
}

function imageHasFile(
	image: ImageFieldset,
): image is ImageFieldset & { file: NonNullable<ImageFieldset['file']> } {
	return Boolean(image.file?.size && image.file?.size > 0);
}

export const action = async ({ request }: ActionFunctionArgs) => {
	const userId = await requireUserId(request);

	const uploadHandler = createMemoryUploadHandler({
		maxPartSize: MAX_UPLOAD_SIZE,
	});

	const formData = await parseMultipartFormData(request, uploadHandler);

	await validateCSRF(formData, request.headers);

	const submission = await parseWithZod(formData, {
		schema: BookFormSchema.superRefine(async (data, ctx) => {
			if (!data.id) return;

			const book = await prisma.book.findUnique({
				select: { id: true },
				where: { id: data.id, ownerId: userId },
			});

			if (!book) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: 'Book not found',
				});
			}
		}).transform(async ({ images = [], statusName, ...data }) => {
			const readingStatuses = await prisma.bookReadingStatus.findMany({
				select: { id: true, name: true },
			});

			const status = readingStatuses.find(
				(status) => status.name === statusName,
			);
			invariant(status, 'Reading status must not be null or undefined');

			return {
				...data,
				statusId: status.id,
				imageUpdates: await Promise.all(
					images.filter(imageHasId).map(async (i) => {
						if (imageHasFile(i)) {
							return {
								id: i.id,
								contentType: i.file.type,
								blob: Buffer.from(await i.file.arrayBuffer()),
							};
						} else {
							return {
								id: i.id,
							};
						}
					}),
				),
				newImages: await Promise.all(
					images
						.filter(imageHasFile)
						.filter((i) => !i.id)
						.map(async (image) => {
							return {
								contentType: image.file.type,
								blob: Buffer.from(await image.file.arrayBuffer()),
							};
						}),
				),
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

	const {
		id: bookId,
		title,
		author,
		year,
		statusId,
		description,
		url,
		comment,
		newImages = [],
		imageUpdates = [],
	} = submission.value;

	const { id } = await prisma.book.upsert({
		select: { id: true },
		where: { id: bookId ?? '__new_book__' },
		create: {
			ownerId: userId,
			title,
			author,
			year,
			statusId,
			description,
			url,
			comment,
			images: { create: newImages },
		},
		update: {
			title,
			author,
			year,
			statusId,
			description,
			url,
			comment,
			images: {
				deleteMany: { id: { notIn: imageUpdates.map((i) => i.id) } },
				updateMany: imageUpdates.map((updates) => ({
					where: { id: updates.id },
					data: { ...updates, id: updates.blob ? cuid() : updates.id },
				})),
				create: newImages,
			},
		},
	});

	return redirect(`/dashboard/books/${id}`);
};
