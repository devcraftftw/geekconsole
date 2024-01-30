import { type SEOHandle } from '@nasa-gcn/remix-seo';
import { type Book, type BookImage } from '@prisma/client';
import {
	type SerializeFrom,
	type LoaderFunctionArgs,
	json,
} from '@remix-run/node';
import {
	Form,
	Link,
	useLoaderData,
	useSearchParams,
	useSubmit,
} from '@remix-run/react';
import { useId } from 'react';
import { z } from 'zod';
import { requireUserId, prisma } from '~/app/core/server/index.ts';
import { useDebounce, useIsPending } from '~/app/shared/lib/hooks';
import { useDelayedIsPending } from '~/app/shared/lib/hooks/useDelayedIsPending/useDelayedIsPending';
import { cn, getBookImgSrc } from '~/app/shared/lib/utils';
import { type BreadcrumbHandle } from '~/app/shared/schemas/index.ts';
import {
	GeneralErrorBoundary,
	Alert,
	AlertTitle,
	AlertDescription,
	Button,
	Badge,
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	Icon,
	Input,
	Label,
	StatusButton,
	ErrorList,
} from '~/app/shared/ui/index.ts';

type BookPreviewWithImgs = Pick<Book, 'id' | 'title' | 'readingStatus'> & {
	imageId: Pick<BookImage, 'id'>['id'] | null;
};

const BooksSearchResultSchema = z.object({
	id: z.string(),
	title: z.string(),
	readingStatus: z.string(),
	imageId: z.string().nullable(),
});
const BooksSearchResultsSchema = z.array(BooksSearchResultSchema);

export const handle: BreadcrumbHandle & SEOHandle = {
	breadcrumb: 'Collection',
	getSitemapEntries: () => null,
};

export default function BooksCollectionRoute() {
	const data = useLoaderData<typeof loader>();
	const isPending = useDelayedIsPending();

	if (data.status === 'error') console.error(data.error);

	return (
		<div className="flex w-full flex-col gap-6">
			<SearchBooksBar status={data.status} autoFocus autoSubmit />

			<main className="w-full">
				{data.status === 'idle' ? (
					data.usersBooks.length ? (
						<div
							className={cn('grid w-full grid-cols-4 gap-4 delay-200', {
								'opacity-50': isPending,
							})}
						>
							{data.usersBooks.map((book) => (
								<BookCard key={book.id} book={book} />
							))}
						</div>
					) : (
						<p>No books found</p>
					)
				) : data.status === 'error' ? (
					<ErrorList errors={['There was an error parsing the results']} />
				) : null}
			</main>
		</div>
	);
}

export function SearchBooksBar({
	status,
	autoFocus = false,
	autoSubmit = false,
}: {
	status: 'idle' | 'pending' | 'success' | 'error';
	autoFocus?: boolean;
	autoSubmit?: boolean;
}) {
	const id = useId();
	const [searchParams] = useSearchParams();
	const submit = useSubmit();
	const isSubmitting = useIsPending();

	const searchTerm = searchParams.get('search');

	const handleFormChange = useDebounce((form: HTMLFormElement) => {
		submit(form);
	}, 400);

	return (
		<Form
			className="flex flex-wrap items-center justify-center gap-2"
			onChange={(e) => autoSubmit && handleFormChange(e.currentTarget)}
		>
			<div className="flex-1">
				<Label htmlFor={id} className="sr-only">
					Search
				</Label>
				<Input
					type="search"
					name="search"
					id={id}
					defaultValue={searchTerm ?? ''}
					placeholder="Search by title or author"
					className="w-full"
					autoFocus={autoFocus}
				/>
			</div>
			<div>
				<StatusButton
					type="submit"
					status={isSubmitting ? 'pending' : status}
					className="flex w-full items-center justify-center"
					size="sm"
				>
					<Icon name="magnifying-glass" size="sm" />
					<span className="sr-only">Search</span>
				</StatusButton>
			</div>
		</Form>
	);
}

export const BookCard = ({
	book,
}: SerializeFrom<{ book: BookPreviewWithImgs }>) => {
	const { id, title, readingStatus, imageId } = book;

	return (
		<Card className="flex flex-col items-center">
			<CardHeader className="flex-row items-center gap-4">
				<p>{title}</p>
			</CardHeader>
			<CardContent className="flex flex-col items-center gap-2">
				<img
					className="h-40 w-40 max-w-full rounded-xl align-middle"
					src={imageId ? getBookImgSrc(imageId) : 'images/noCover.gif'}
					alt={book.title}
				/>
				<Badge variant="outline">{readingStatus}</Badge>
			</CardContent>
			<CardFooter className="flex flex-col gap-2">
				<Button asChild variant="link">
					<Link to={`/dashboard/books/${id}`} prefetch="intent">
						See more
					</Link>
				</Button>
			</CardFooter>
		</Card>
	);
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
	const userId = await requireUserId(request);

	const searchParams = new URL(request.url).searchParams;
	const searchTerm = searchParams.get('search');

	if (!searchTerm) {
		const usersBooks = await prisma.book.findMany({
			select: {
				id: true,
				title: true,
				readingStatus: true,
				images: {
					take: 1,
					select: {
						id: true,
					},
				},
			},
			orderBy: {
				updatedAt: 'desc',
			},
			where: { ownerId: userId },
		});

		const mappedUsersBooks = usersBooks.map(({ images, ...book }) => ({
			...book,
			imageId: images.length ? images[0].id : null,
		}));

		return json({ status: 'idle', usersBooks: mappedUsersBooks } as const);
	} else {
		const like = `%${searchTerm}%`;

		const rawBooks = await prisma.$queryRaw`
			SELECT 
				Book.id, 
				Book.title, 
				Book.readingStatus, 
				(
					SELECT BookImage.id 
					FROM BookImage 
					WHERE BookImage.bookId = Book.id 
					LIMIT 1
				) AS imageId
			FROM Book
			WHERE (Book.title LIKE ${like} OR Book.author LIKE ${like})
			AND Book.ownerId = ${userId}
			ORDER BY Book.updatedAt DESC
			LIMIT 10
		`;

		const result = BooksSearchResultsSchema.safeParse(rawBooks);

		if (!result.success) {
			return json({ status: 'error', error: result.error.message } as const, {
				status: 400,
			});
		}

		return json({ status: 'idle', usersBooks: result.data } as const);
	}
};

export const ErrorBoundary = () => {
	return (
		<GeneralErrorBoundary
			statusHandlers={{
				401: () => (
					<Alert variant="destructive" className="w-2/4">
						<AlertTitle>Unauthorized</AlertTitle>
						<AlertDescription>
							You must be logged in to view your books.
							<Button asChild variant="link">
								<Link to="/auth?type=signin">Login</Link>
							</Button>
						</AlertDescription>
					</Alert>
				),
				403: () => <p>You are not allowed to do that</p>,
				500: () => (
					<Alert variant="destructive" className="w-2/4">
						<AlertTitle>Server error</AlertTitle>
						<AlertDescription>
							Looks like something bad happened on our server. Already fixing!
						</AlertDescription>
					</Alert>
				),
			}}
			unexpectedErrorHandler={() => (
				<div>Something unexpected happened. Sorry about that.</div>
			)}
		/>
	);
};
