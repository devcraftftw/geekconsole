import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { requireUserId } from '#app/core/server-utils/auth/auth.server';
import { prisma } from '#app/core/server-utils/db/db.server';
import { getDomainUrl } from '#app/shared/lib/utils/index.ts';

export async function loader({ request }: LoaderFunctionArgs) {
	const userId = await requireUserId(request);

	const user = await prisma.user.findUniqueOrThrow({
		where: { id: userId },
		// this is one of the *few* instances where you can use "include" because
		// the goal is to literally get *everything*. Normally you should be
		// explicit with "select". We're using select for images because we don't
		// want to send back the entire blob of the image. We'll send a URL they can
		// use to download it instead.
		include: {
			image: {
				select: {
					id: true,
					createdAt: true,
					updatedAt: true,
					contentType: true,
				},
			},
			books: {
				include: {
					images: {
						select: {
							id: true,
							createdAt: true,
							updatedAt: true,
							contentType: true,
						},
					},
				},
			},
			password: false, // <-- intentionally omit password
			sessions: true,
		},
	});

	const domain = getDomainUrl(request);

	return json({
		user: {
			...user,
			image: user.image
				? {
						...user.image,
						url: `${domain}/resources/user-images/${user.image.id}`,
					}
				: null,
			books: user.books.map((book) => ({
				...book,
				images: book.images.map((image) => ({
					...image,
					url: `${domain}/resources/book-images/${image.id}`,
				})),
			})),
		},
	});
}
