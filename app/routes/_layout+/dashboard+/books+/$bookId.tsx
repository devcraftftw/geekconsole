import { getFormProps, useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { invariantResponse } from '@epic-web/invariant';
import { type SEOHandle } from '@nasa-gcn/remix-seo';
import { createId } from '@paralleldrive/cuid2';
import {
	type ActionFunctionArgs,
	json,
	type LoaderFunctionArgs,
} from '@remix-run/node';
import {
	type MetaFunction,
	useLoaderData,
	Link,
	Form,
	useActionData,
} from '@remix-run/react';
import { formatDistanceToNow } from 'date-fns';
import { AuthenticityTokenInput } from 'remix-utils/csrf/react';
import { requireUserId } from '#app/core/server-utils/auth/auth.server';
import { validateCSRF } from '#app/core/server-utils/csrf/csrf.server';
import { prisma } from '#app/core/server-utils/db/db.server';
import { requireUserWithPermission } from '#app/core/server-utils/permissions/permissions.server';
import { redirectWithToast } from '#app/core/server-utils/toast/toast.server';
import { useIsPending } from '#app/shared/lib/hooks';
import { getBookImgSrc } from '#app/shared/lib/utils';
import {
	DeleteBookFormSchema,
	type BreadcrumbHandle,
	DELETE_BOOK_INTENT,
} from '#app/shared/schemas/index.ts';
import {
	Badge,
	Button,
	ErrorList,
	GeneralErrorBoundary,
	Icon,
	StatusButton,
} from '#app/shared/ui/index.ts';

export const handle: BreadcrumbHandle & SEOHandle = {
	breadcrumb: 'Overview',
	getSitemapEntries: () => null,
};

export default function BookOverview() {
	const { book, timeAgo } = useLoaderData<typeof loader>();

	return (
		<div>
			<article className="mx-auto flex items-center justify-start space-x-10 rounded-lg border bg-muted p-8 shadow-md">
				<div className="overflow-y-auto pb-24">
					<div>
						<span className="text-sm text-foreground/90 max-[524px]:hidden">
							<Icon name="clock" className="scale-125">
								{timeAgo} ago
							</Icon>
						</span>
					</div>
					<ul className="flex flex-wrap gap-5 py-5">
						{book.images.length > 0 ? (
							book.images.map((image, index) => (
								<li key={image.id}>
									<a href={getBookImgSrc(image.id)}>
										<img
											src={getBookImgSrc(image.id)}
											alt={image.altText ?? `${book.title}/${index + 1}`}
											className="size-32 rounded-lg object-cover"
										/>
									</a>
								</li>
							))
						) : (
							<li>
								<img
									src={getBookImgSrc(null)}
									alt="Placeholder"
									className="w-32 rounded-lg"
								/>
							</li>
						)}
					</ul>
				</div>
				<div className="w-3/4">
					<h2 className="mb-4 text-left text-xl font-bold tracking-tight text-foreground lg:text-2xl">
						{book.title}
					</h2>
					<div>
						<h4 className="font-bold">Author</h4>
						<p className="mb-3 font-light text-muted-foreground">
							{book.author}
						</p>
					</div>
					<div>
						<h4 className="font-bold ">Year</h4>
						<p className="mb-3 font-light text-muted-foreground">{book.year}</p>
					</div>
					<div>
						<h4 className="font-bold">Description</h4>
						<p className="mb-3 font-light text-muted-foreground">
							{book.description
								? book.description
								: 'Description is not provided.'}
						</p>
					</div>
					<div>
						<h4 className="font-bold">Your comments</h4>
						<p className="mb-3 font-light text-muted-foreground">
							{book.comment ? book.comment : 'No comments yet. Add one!'}
						</p>
					</div>

					<Badge className="mb-3">{book.status.name}</Badge>

					<div className="flex gap-4">
						<DeleteBook id={book.id} />

						<Button
							asChild
							className="min-[525px]:max-md:aspect-square min-[525px]:max-md:px-0"
						>
							<Link to="edit">
								<Icon name="pencil-1" className="scale-125 max-md:scale-150">
									<span className="max-md:hidden">Edit</span>
								</Icon>
							</Link>
						</Button>
					</div>
				</div>
			</article>
		</div>
	);
}

export function DeleteBook({ id }: { id: string }) {
	const actionData = useActionData<typeof action>();
	const isPending = useIsPending();
	const [form] = useForm({
		id: 'deleteBook',
		lastResult: actionData?.result,
	});

	return (
		<Form method="POST" {...getFormProps(form)}>
			<AuthenticityTokenInput />
			<input type="hidden" name="bookId" value={id} />
			<StatusButton
				type="submit"
				name="intent"
				value={DELETE_BOOK_INTENT}
				variant="destructive"
				status={isPending ? 'pending' : form.status ?? 'idle'}
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

export const loader = async ({ params }: LoaderFunctionArgs) => {
	const book = await prisma.book.findUnique({
		where: { id: params.bookId },
		select: {
			id: true,
			title: true,
			author: true,
			year: true,
			status: {
				select: {
					name: true,
				},
			},
			description: true,
			comment: true,
			ownerId: true,
			updatedAt: true,
			images: {
				select: {
					id: true,
					altText: true,
				},
			},
		},
	});

	invariantResponse(book, 'Not found', { status: 404 });

	const date = new Date(book.updatedAt);
	const timeAgo = formatDistanceToNow(date);

	return json({
		book,
		timeAgo,
	});
};

export const action = async ({ request }: ActionFunctionArgs) => {
	const userId = await requireUserId(request);

	const formData = await request.formData();

	await validateCSRF(formData, request.headers);

	const submission = parseWithZod(formData, {
		schema: DeleteBookFormSchema,
	});

	if (submission.status !== 'success') {
		return json(
			{ result: submission.reply() },
			{
				status: submission.status === 'error' ? 400 : 200,
			},
		);
	}

	const { bookId } = submission.value;

	const book = await prisma.book.findFirst({
		select: { id: true, ownerId: true },
		where: { id: bookId },
	});

	invariantResponse(book, 'Not found', { status: 404 });

	const isOwner = userId === book.ownerId;
	await requireUserWithPermission(
		request,
		isOwner ? 'delete:book:own' : 'delete:book:any',
	);

	await prisma.book.delete({ where: { id: book.id } });

	return redirectWithToast('/dashboard/books/collection', {
		id: createId(),
		type: 'success',
		title: 'Book deleted',
		description: 'Your book has been deleted',
	});
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	const bookName = data?.book.title ?? 'Book';
	const bookSummary =
		data && data.book.description && data.book.description.length > 100
			? data.book.description.slice(0, 97) + '...'
			: 'No description';

	return [
		{ title: `${bookName} | GeekConsole` },
		{ name: 'description', content: bookSummary },
	];
};

export function ErrorBoundary() {
	return (
		<GeneralErrorBoundary
			statusHandlers={{
				403: () => <p>You are not allowed to do that</p>,
				404: ({ params }) => (
					<p>No book with the id "{params.bookId}" exists</p>
				),
			}}
		/>
	);
}
