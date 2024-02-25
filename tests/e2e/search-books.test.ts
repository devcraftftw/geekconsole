import { invariant } from '@epic-web/invariant';
import { faker } from '@faker-js/faker';
import { type Book } from '@prisma/client';
import { prisma } from '#app/core/server-utils/db/db.server.ts';
import { expect, test } from '../playwright-utils.ts';

test('Search from books collection', async ({ page, login }) => {
	const user = await login();

	const books = await createBooks();

	const firstBookTitle = books[0].title;
	const secondBookTitle = books[1].title;
	const secondBookAuthor = books[1].author;

	for (const book of books) {
		await prisma.book.create({
			data: { ...book, ownerId: user.id },
		});
	}

	await page.goto('/dashboard/books/collection');

	await expect(
		page.getByRole('link', { name: /go to collection/i }),
	).not.toBeVisible();

	// search by title
	await page.getByRole('searchbox', { name: /search/i }).fill(firstBookTitle);
	await page.getByRole('button', { name: /search/i }).click();
	await page.waitForURL(
		`/dashboard/books/collection?${new URLSearchParams({
			search: firstBookTitle,
		})}`,
	);
	const bookLinks = page
		.getByRole('main')
		.getByRole('link', { name: /see more/i });
	await expect(bookLinks).toHaveCount(1);
	await expect(page.getByText(firstBookTitle)).toBeVisible();

	// search by author
	await page.getByRole('searchbox', { name: /search/i }).fill(secondBookAuthor);
	await page.getByRole('button', { name: /search/i }).click();
	await page.waitForURL(
		`/dashboard/books/collection?${new URLSearchParams({
			search: secondBookAuthor,
		})}`,
	);
	const bookLinks2 = page
		.getByRole('main')
		.getByRole('link', { name: /see more/i });
	await expect(bookLinks2).toHaveCount(1);
	await expect(page.getByText(secondBookTitle)).toBeVisible();

	// search non existent book
	await page
		.getByRole('searchbox', { name: /search/i })
		.fill('__nonexistent__');
	await page.getByRole('button', { name: /search/i }).click();
	await page.waitForURL(`/dashboard/books/collection?search=__nonexistent__`);
	await expect(bookLinks).toHaveCount(0);
	await expect(page.getByText(/no books found/i)).toBeVisible();
});

async function createBooks() {
	const readingStatuses = await prisma.bookReadingStatus.findMany({
		select: { id: true },
	});
	invariant(readingStatuses, 'Reading status must be defined');

	return [
		{
			title: 'testTitle1',
			author: 'testAuthor1',
			year: 2023,
			statusId: readingStatuses[0].id,
			description: faker.lorem.paragraph(),
			comment: faker.lorem.paragraph(),
		},
		{
			title: 'testTitle2',
			author: 'testAuthor2',
			year: 2023,
			statusId: readingStatuses[1].id,
			description: faker.lorem.paragraph(),
			comment: faker.lorem.paragraph(),
		},
	] satisfies Omit<Book, 'id' | 'createdAt' | 'updatedAt' | 'ownerId'>[];
}
