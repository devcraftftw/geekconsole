import {
	type FieldMetadata,
	useForm,
	getInputProps,
	getFormProps,
	getFieldsetProps,
	FormProvider,
	useInputControl,
} from '@conform-to/react';
import { getZodConstraint, parseWithZod } from '@conform-to/zod';
import { createId as cuid } from '@paralleldrive/cuid2';
import { type Book, type BookImage } from '@prisma/client';
import {
	type SerializeFrom,
	type LoaderFunctionArgs,
	json,
	redirect,
	unstable_parseMultipartFormData as parseMultipartFormData,
	unstable_createMemoryUploadHandler as createMemoryUploadHandler,
} from '@remix-run/node';
import { useActionData, Form } from '@remix-run/react';
import { type ElementRef, useRef, useState } from 'react';
import { AuthenticityTokenInput } from 'remix-utils/csrf/react';
import { useSpinDelay } from 'spin-delay';
import { z } from 'zod';
import {
	prisma,
	requireUserId,
	validateCSRF,
} from '~/app/core/server/index.ts';

import { useSubmitting } from '~/app/shared/lib/hooks/index.ts';
import { cn, getBookImgSrc } from '~/app/shared/lib/utils/index.ts';
import {
	Button,
	Card,
	CardContent,
	ErrorList,
	GeneralErrorBoundary,
	Icon,
	Input,
	Label,
	RadioGroup,
	RadioGroupItem,
} from '~/app/shared/ui/index.ts';

type CleanBook = Omit<Book, 'createdAt' | 'updatedAt' | 'ownerId'>;

const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB
const READING_STATUSES = ['want to read', 'reading', 'have read'];

const ImageFieldsetSchema = z.object({
	id: z.string().optional(),
	file: z
		.instanceof(File)
		.optional()
		.refine((file) => {
			return !file || file.size <= MAX_UPLOAD_SIZE;
		}, 'File size must be less than 3MB'),
});

type ImageFieldset = z.infer<typeof ImageFieldsetSchema>;

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

const BookFormSchema = z.object({
	id: z.string().optional(),
	title: z
		.string()
		.min(1, { message: 'Please, provide a title' })
		.max(100, { message: 'Title is too long' }),
	author: z
		.string()
		.min(1, { message: 'Please, provide an author' })
		.max(100, { message: 'Author name is too long' }),
	year: z.number().positive(),
	images: z.array(ImageFieldsetSchema).max(5).optional(),
	readingStatus: z.string(),
	description: z.string().optional(),
	comment: z.string().optional(),
});

export const action = async ({ request }: LoaderFunctionArgs) => {
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
		}).transform(async ({ images = [], ...data }) => {
			return {
				...data,
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
		readingStatus,
		description,
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
			readingStatus,
			description,
			comment,
			images: { create: newImages },
		},
		update: {
			title,
			author,
			year,
			readingStatus,
			description,
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

export const loader = async (_: LoaderFunctionArgs) => {
	return json({});
};

export default function BookEditor({
	book,
}: {
	book?: SerializeFrom<
		CleanBook & {
			images: Array<Pick<BookImage, 'id' | 'altText'>>;
		}
	>;
}) {
	const actionData = useActionData<typeof action>();

	const isSubmitting = useSubmitting();
	const showSpinner = useSpinDelay(isSubmitting);

	const [form, fields] = useForm({
		id: 'bookEditor',
		constraint: getZodConstraint(BookFormSchema),
		lastResult: actionData?.result,
		shouldValidate: 'onBlur',
		shouldRevalidate: 'onBlur',
		onValidate({ formData }) {
			return parseWithZod(formData, {
				schema: BookFormSchema,
			});
		},
		defaultValue: {
			...book,
			images: book?.images ?? [{}],
		},
	});

	const imageList = fields.images.getFieldList();

	return (
		<div>
			<Card className="pt-6">
				<CardContent>
					<FormProvider context={form.context}>
						<Form
							method="post"
							encType="multipart/form-data"
							className="grid w-full grid-cols-2 gap-4"
							{...getFormProps(form)}
						>
							<AuthenticityTokenInput />
							{/*
                            This hidden submit button is here to ensure that when the user hits
                            "enter" on an input field, the primary form function is submitted
                            rather than the first button in the form (which is delete/add image).
				        */}
							<button type="submit" className="hidden" />

							{book ? <input type="hidden" name="id" value={book.id} /> : null}

							{/* TITLE */}
							<div>
								<Label htmlFor={fields.title.id}>Title</Label>
								<Input
									autoFocus
									placeholder="Romeo & Juliet"
									{...getInputProps(fields.title, { type: 'text' })}
								/>
								<div className="min-h-[32px] px-4 pb-3 pt-1">
									<ErrorList
										id={fields.title.errorId}
										errors={fields.title.errors}
									/>
								</div>
							</div>

							{/* AUTHOR */}
							<div>
								<Label htmlFor={fields.author.id}>Author</Label>
								<Input
									placeholder="William Shakespear"
									{...getInputProps(fields.author, { type: 'text' })}
								/>
								<div className="min-h-[32px] px-4 pb-3 pt-1">
									<ErrorList
										id={fields.author.errorId}
										errors={fields.author.errors}
									/>
								</div>
							</div>

							{/* YEAR */}
							<div>
								<Label htmlFor={fields.year.id}>Year</Label>
								<Input
									placeholder="1597"
									{...getInputProps(fields.year, { type: 'number' })}
								/>
								<div className="min-h-[32px] px-4 pb-3 pt-1">
									<ErrorList
										id={fields.year.errorId}
										errors={fields.year.errors}
									/>
								</div>
							</div>

							{/* DESCRIPTION */}
							<div>
								<Label htmlFor={fields.description.id}>Description</Label>
								<Input
									placeholder="Book description"
									{...getInputProps(fields.description, { type: 'text' })}
								/>
								<div className="min-h-[32px] px-4 pb-3 pt-1">
									<ErrorList
										id={fields.description.errorId}
										errors={fields.description.errors}
									/>
								</div>
							</div>

							{/* READING STATUS */}
							<ReadingStatusRadioGroup meta={fields.readingStatus} />

							{/* Comments */}
							<div>
								<Label htmlFor={fields.comment.id}>Your comments</Label>
								<Input
									placeholder="Share your thoughts about this book or leave some comments for your future reference"
									{...getInputProps(fields.comment, { type: 'text' })}
								/>
								<div className="min-h-[32px] px-4 pb-3 pt-1">
									<ErrorList
										id={fields.comment.errorId}
										errors={fields.comment.errors}
									/>
								</div>
							</div>

							{/* IMAGES */}
							<div>
								<div>
									<Label>Images</Label>
									<ul className="flex flex-wrap gap-2">
										{imageList.map((image, index) => (
											<li key={image.key} className="relative">
												<button
													className="absolute bottom-36 left-24 text-foreground-destructive"
													{...form.remove.getButtonProps({
														name: fields.images.name,
														index,
													})}
												>
													<span aria-hidden>
														<Icon name="cross-1" />
													</span>
													<span className="sr-only">
														Remove image {index + 1}
													</span>
												</button>
												<ImageChooser meta={image} />
											</li>
										))}
									</ul>
								</div>

								{/* ADD IMAGE */}
								<Button
									className="mt-3"
									{...form.insert.getButtonProps({ name: fields.images.name })}
								>
									<span aria-hidden>
										<Icon name="plus">Image</Icon>
									</span>{' '}
									<span className="sr-only">Add image</span>
								</Button>
							</div>

							<ErrorList id={form.errorId} errors={form.errors} />

							<Button type="submit" disabled={showSpinner} className="mt-auto">
								Submit
							</Button>
						</Form>
					</FormProvider>
				</CardContent>
			</Card>
		</div>
	);
}

const ReadingStatusRadioGroup = ({ meta }: { meta: FieldMetadata<string> }) => {
	const radioGroupRef = useRef<ElementRef<typeof RadioGroup>>(null);
	const control = useInputControl(meta);

	return (
		<div>
			<Label htmlFor={meta.id}>Reading status</Label>
			<input
				name={meta.name}
				defaultValue={meta.initialValue}
				tabIndex={-1}
				className="sr-only"
				onFocus={() => {
					radioGroupRef.current?.focus();
				}}
			/>
			<RadioGroup
				value={control.value}
				onBlur={() => control.blur()}
				ref={radioGroupRef}
				defaultValue={meta.initialValue}
				onValueChange={(value) => {
					control.change(value);
				}}
				className="flex space-y-1"
			>
				{READING_STATUSES.map((status) => (
					<div key={status} className="flex items-center space-x-3 space-y-0">
						<RadioGroupItem value={status} type="button" />
						<Label>{status}</Label>
					</div>
				))}
			</RadioGroup>
			<div className="min-h-[32px] px-4 pb-3 pt-1">
				<ErrorList id={meta.errorId} errors={meta.errors} />
			</div>
		</div>
	);
};

function ImageChooser({ meta }: { meta: FieldMetadata<ImageFieldset> }) {
	const fields = meta.getFieldset();
	const existingImage = Boolean(fields.id.initialValue);
	const [previewImage, setPreviewImage] = useState<string | null>(
		fields.id.initialValue ? getBookImgSrc(fields.id.initialValue) : null,
	);

	return (
		<fieldset {...getFieldsetProps(meta)}>
			<div className="flex gap-3">
				<div className="w-28">
					<div className="relative size-28">
						<label
							htmlFor={fields.file.id}
							className={cn('group absolute size-28 rounded-lg', {
								'bg-accent opacity-40 focus-within:opacity-100 hover:opacity-100':
									!previewImage,
								'cursor-pointer focus-within:ring-4': !existingImage,
							})}
						>
							{previewImage ? (
								<div className="relative">
									<img
										src={previewImage}
										alt="Preview"
										className="size-28 rounded-lg object-cover"
									/>
									{existingImage ? null : (
										<div className="pointer-events-none absolute -right-0.5 -top-0.5 rotate-12 rounded-sm bg-secondary px-2 py-1 text-xs text-secondary-foreground shadow-md">
											new
										</div>
									)}
								</div>
							) : (
								<div className="flex size-28 items-center justify-center rounded-lg border border-muted-foreground text-4xl text-muted-foreground">
									<Icon name="plus" />
								</div>
							)}

							{existingImage ? (
								<input
									{...getInputProps(fields.id, {
										type: 'hidden',
									})}
								/>
							) : null}

							<input
								aria-label="Image"
								className="absolute left-0 top-0 z-0 size-28 cursor-pointer opacity-0"
								onChange={(event) => {
									const file = event.target.files?.[0];

									if (file) {
										const reader = new FileReader();
										reader.onloadend = () => {
											setPreviewImage(reader.result as string);
										};
										reader.readAsDataURL(file);
									} else {
										setPreviewImage(null);
									}
								}}
								accept="image/*"
								{...getInputProps(fields.file, {
									type: 'file',
								})}
							/>
						</label>
					</div>
					<div className="min-h-[32px] px-4 pb-3 pt-1">
						<ErrorList id={fields.file.errorId} errors={fields.file.errors} />
					</div>
				</div>
			</div>
		</fieldset>
	);
}

export function ErrorBoundary() {
	return (
		<GeneralErrorBoundary
			statusHandlers={{
				404: ({ params }) => (
					<p>No book with the id "{params.bookId}" exists</p>
				),
			}}
		/>
	);
}
