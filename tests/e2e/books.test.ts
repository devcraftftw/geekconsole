import { invariant } from '@epic-web/invariant';
import { faker } from '@faker-js/faker';
import { type Book } from '@prisma/client';
import { prisma } from '#app/core/server-utils/db/db.server.ts';
import { expect, test } from '../playwright-utils.ts';

test('Users can create books', async ({ page, login }) => {
	await login();
	await page.goto(`/dashboard/books`);

	const newBook = await createBook();

	await page.getByRole('link', { name: /add a new book/i }).click();

	// fill in form and submit
	await page.getByRole('textbox', { name: 'title' }).fill(newBook.title);
	await page.getByRole('textbox', { name: 'author' }).fill(newBook.author);
	await page
		.getByRole('spinbutton', { name: 'year' })
		.fill(newBook.year.toString());
	await page
		.getByRole('textbox', { name: 'description' })
		.fill(newBook.description);
	await page.getByRole('radio').nth(1).setChecked(true);
	await page
		.getByRole('textbox', { name: 'your comments' })
		.fill(newBook.comment);

	await page.getByRole('button', { name: /submit/i }).click();

	await expect(page).not.toHaveURL(new RegExp(`/dashboard/books/new`));
	await expect(
		page.getByRole('heading', { name: newBook.title }),
	).toBeVisible();
});

test('Users can edit books', async ({ page, login }) => {
	const user = await login();

	const newBook = await createBook();

	const book = await prisma.book.create({
		select: { id: true },
		data: { ...newBook, ownerId: user.id },
	});

	await page.goto(`/dashboard/books/${book.id}`);

	// edit the book
	await page.getByRole('link', { name: 'Edit', exact: true }).click();

	const updatedBook = await createBook();

	await page.getByRole('textbox', { name: 'title' }).fill(updatedBook.title);
	await page.getByRole('textbox', { name: 'author' }).fill(updatedBook.author);
	await page
		.getByRole('spinbutton', { name: 'year' })
		.fill(updatedBook.year.toString());
	await page
		.getByRole('textbox', { name: 'description' })
		.fill(updatedBook.description);
	await page.getByRole('radio').nth(2).click();
	await page
		.getByRole('textbox', { name: 'your comments' })
		.fill(updatedBook.comment);

	await page.getByRole('button', { name: /submit/i }).click();

	await expect(page).toHaveURL(new RegExp(`/dashboard/books/.*`));
	await expect(
		page.getByRole('heading', { name: updatedBook.title }),
	).toBeVisible();
});

test('Users can delete books', async ({ page, login }) => {
	const user = await login();

	const newBook = await createBook();

	const book = await prisma.book.create({
		select: { id: true },
		data: { ...newBook, ownerId: user.id },
	});

	await page.goto(`/dashboard/books/collection`);

	const bookLinks = page
		.getByRole('main')
		.getByRole('link', { name: /see more/i });
	const countBefore = await bookLinks.count();

	await page.goto(`/dashboard/books/${book.id}`);

	await page.getByRole('button', { name: /delete/i }).click();

	await expect(
		page.getByText('Your book has been deleted', { exact: true }),
	).toBeVisible();
	await expect(page).toHaveURL(`/dashboard/books/collection`);

	const countAfter = await bookLinks.count();
	expect(countAfter).toEqual(countBefore - 1);
});

async function createBook() {
	const readingStatus = await prisma.bookReadingStatus.findFirst({
		select: { id: true },
	});
	invariant(readingStatus, 'Reading status must be defined');

	return {
		title: faker.lorem.sentence(),
		author: faker.person.fullName(),
		year: 2023,
		statusId: readingStatus.id,
		description: faker.lorem.paragraph(),
		comment: faker.lorem.paragraph(),
	} satisfies Omit<Book, 'id' | 'createdAt' | 'updatedAt' | 'ownerId'>;
}
