import fs from 'fs';
import { invariant } from '@epic-web/invariant';
import { faker } from '@faker-js/faker';
import { type Book, type BookImage } from '@prisma/client';
import { prisma } from '~/app/core/server/index.ts';
import { expect, test } from '../playwright-utils.ts';

test('Users can create a book with an image', async ({ page, login }) => {
	await login();

	await page.goto(`/dashboard/books`);

	const newBook = await createBook();
	const altText = `${newBook.title}/1`;

	await page.getByRole('link', { name: 'add a new book' }).click();

	// fill in form and submit
	await page.getByRole('textbox', { name: 'title' }).fill(newBook.title);
	await page.getByRole('textbox', { name: 'author' }).fill(newBook.author);
	await page
		.getByRole('spinbutton', { name: 'year' })
		.fill(newBook.year.toString());
	await page
		.getByRole('textbox', { name: 'description' })
		.fill(newBook.description);
	await page.getByRole('radio').nth(0).click();
	await page
		.getByRole('textbox', { name: 'your comments' })
		.fill(newBook.comment);
	await page
		.getByLabel('image')
		.nth(0)
		.setInputFiles('tests/fixtures/images/my-books/cute-koala.png');

	await page.getByRole('button', { name: 'submit' }).click();

	await expect(page).toHaveURL(new RegExp(`/dashboard/books/.*`));
	await expect(
		page.getByRole('heading', { name: newBook.title }),
	).toBeVisible();
	await expect(page.getByAltText(altText)).toBeVisible();
});

test('Users can create a book with multiple images', async ({
	page,
	login,
}) => {
	await login();

	await page.goto(`/dashboard/books`);

	const newBook = await createBook();
	const altText1 = `${newBook.title}/1`;
	const altText2 = `${newBook.title}/2`;

	await page.getByRole('link', { name: 'add a new book' }).click();

	// fill in form and submit
	await page.getByRole('textbox', { name: 'title' }).fill(newBook.title);
	await page.getByRole('textbox', { name: 'author' }).fill(newBook.author);
	await page
		.getByRole('spinbutton', { name: 'year' })
		.fill(newBook.year.toString());
	await page
		.getByRole('textbox', { name: 'description' })
		.fill(newBook.description);
	await page.getByRole('radio').nth(0).click();
	await page
		.getByRole('textbox', { name: 'your comments' })
		.fill(newBook.comment);
	await page
		.getByLabel('image')
		.nth(0)
		.setInputFiles('tests/fixtures/images/my-books/cute-koala.png');

	await page.getByRole('button', { name: 'add image' }).click();

	await page
		.getByLabel('image')
		.nth(1)
		.setInputFiles('tests/fixtures/images/my-books/koala-coder.png');

	await page.getByRole('button', { name: 'submit' }).click();

	await expect(page).toHaveURL(new RegExp(`/dashboard/books/.*`));
	await expect(
		page.getByRole('heading', { name: newBook.title }),
	).toBeVisible();
	await expect(page.getByAltText(altText1)).toBeVisible();
	await expect(page.getByAltText(altText2)).toBeVisible();
});

test('Users can edit book image', async ({ page, login }) => {
	const user = await login();

	const newBook = await createBookWithImage();

	const book = await prisma.book.create({
		select: { id: true, title: true },
		data: {
			...newBook,
			ownerId: user.id,
		},
	});
	const altText = `${book.title}/1`;

	await page.goto(`/dashboard/books/${book.id}`);

	// edit the image
	await page.getByRole('link', { name: 'Edit', exact: true }).click();

	const updatedImage = {
		location: 'tests/fixtures/images/my-books/koala-coder.png',
	};

	await page.getByLabel('image').nth(0).setInputFiles(updatedImage.location);
	await page.getByRole('button', { name: 'submit' }).click();

	await expect(page).not.toHaveURL(
		new RegExp(`/dashboard/books/${book.id}/edit`),
	);
	await expect(page.getByAltText(altText)).toBeVisible();
});

test('Users can delete last book image', async ({ page, login }) => {
	const user = await login();

	const newBook = await createBookWithImage();

	const book = await prisma.book.create({
		select: { id: true, title: true },
		data: {
			...newBook,
			ownerId: user.id,
		},
	});

	await page.goto(`/dashboard/books/${book.id}`);

	await expect(page.getByRole('heading', { name: book.title })).toBeVisible();

	await page.getByRole('link', { name: 'Edit', exact: true }).click();
	await page.getByRole('button', { name: 'remove image' }).click();
	await page.getByRole('button', { name: 'submit' }).click();

	await expect(page).toHaveURL(new RegExp(`/dashboard/books/${book.id}`));

	await expect(page.getByAltText('Placeholder')).toBeVisible();
});

test('Users can delete book image', async ({ page, login }) => {
	const user = await login();

	const newBook = await createBookWithMultipleImages();

	const book = await prisma.book.create({
		select: { id: true, title: true },
		data: {
			...newBook,
			ownerId: user.id,
		},
	});

	await page.goto(`/dashboard/books/${book.id}`);

	await expect(page.getByRole('heading', { name: book.title })).toBeVisible();

	// find image tags
	const images = page
		.getByRole('main')
		.getByRole('list')
		.getByRole('listitem')
		.getByRole('img');

	const countBefore = await images.count();

	await page.getByRole('link', { name: 'Edit', exact: true }).click();
	await page.getByRole('button', { name: 'remove image' }).nth(0).click();
	await page.getByRole('button', { name: 'submit' }).click();

	await expect(page).toHaveURL(new RegExp(`/dashboard/books/${book.id}`));

	const countAfter = await images.count();

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

async function createBookWithImage() {
	const newBook = await createBook();

	return {
		...newBook,
		images: {
			create: {
				contentType: 'image/png',
				blob: fs.readFileSync('tests/fixtures/images/my-books/cute-koala.png'),
			},
		},
	} satisfies Omit<Book, 'id' | 'createdAt' | 'updatedAt' | 'ownerId'> & {
		images: { create: Pick<BookImage, 'blob' | 'contentType'> };
	};
}

async function createBookWithMultipleImages() {
	const newBook = await createBook();

	return {
		...newBook,
		images: {
			create: [
				{
					contentType: 'image/png',
					blob: fs.readFileSync(
						'tests/fixtures/images/my-books/cute-koala.png',
					),
				},
				{
					contentType: 'image/png',
					blob: fs.readFileSync(
						'tests/fixtures/images/my-books/koala-coder.png',
					),
				},
				{
					contentType: 'image/png',
					blob: fs.readFileSync(
						'tests/fixtures/images/my-books/koala-eating.png',
					),
				},
			],
		},
	} satisfies Omit<Book, 'id' | 'createdAt' | 'updatedAt' | 'ownerId'> & {
		images: { create: Pick<BookImage, 'blob' | 'contentType'>[] };
	};
}
