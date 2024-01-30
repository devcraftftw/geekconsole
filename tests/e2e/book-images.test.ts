import fs from 'fs';
import { faker } from '@faker-js/faker';
import { type Book, type BookImage } from '@prisma/client';
import { prisma } from '~/app/core/server/index.ts';
import { expect, test } from '../playwright-utils.ts';

test('Users can create a book with an image', async ({ page, login }) => {
	await login();

	await page.goto(`/dashboard/books`);

	const newBook = createBook();
	const altText = 'cute koala';

	await page.getByRole('link', { name: 'add a new book' }).click();

	// fill in form and submit
	await page.getByRole('textbox', { name: 'title' }).fill(newBook.title);
	await page.getByRole('textbox', { name: 'author' }).fill(newBook.author);
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
	await page.getByRole('textbox', { name: 'alt text' }).fill(altText);

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

	const newBook = createBook();
	const altText1 = 'cute koala';
	const altText2 = 'koala coder';

	await page.getByRole('link', { name: 'add a new book' }).click();

	// fill in form and submit
	await page.getByRole('textbox', { name: 'title' }).fill(newBook.title);
	await page.getByRole('textbox', { name: 'author' }).fill(newBook.author);
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
	await page.getByLabel('alt text').nth(0).fill(altText1);

	await page.getByRole('button', { name: 'add image' }).click();

	await page
		.getByLabel('image')
		.nth(1)
		.setInputFiles('tests/fixtures/images/my-books/koala-coder.png');
	await page.getByLabel('alt text').nth(1).fill(altText2);

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

	const book = await prisma.book.create({
		select: { id: true },
		data: {
			...createBookWithImage(),
			ownerId: user.id,
		},
	});

	await page.goto(`/dashboard/books/${book.id}`);

	// edit the image
	await page.getByRole('link', { name: 'Edit', exact: true }).click();

	const updatedImage = {
		altText: 'koala coder',
		location: 'tests/fixtures/images/my-books/koala-coder.png',
	};

	await page.getByLabel('image').nth(0).setInputFiles(updatedImage.location);
	await page.getByLabel('alt text').nth(0).fill(updatedImage.altText);
	await page.getByRole('button', { name: 'submit' }).click();

	await expect(page).toHaveURL(new RegExp(`/dashboard/books/${book.id}`));
	await expect(page.getByAltText(updatedImage.altText)).toBeVisible();
});

test('Users can delete book image', async ({ page, login }) => {
	const user = await login();

	const book = await prisma.book.create({
		select: { id: true, title: true },
		data: {
			...createBookWithImage(),
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
	await page.getByRole('button', { name: 'remove image' }).click();
	await page.getByRole('button', { name: 'submit' }).click();

	await expect(page).toHaveURL(new RegExp(`/dashboard/books/${book.id}`));

	const countAfter = await images.count();

	expect(countAfter).toEqual(countBefore - 1);
});

function createBook() {
	return {
		title: faker.lorem.sentence(),
		author: faker.person.fullName(),
		year: 2023,
		readingStatus: 'want to read',
		description: faker.lorem.paragraph(),
		comment: faker.lorem.paragraph(),
	} satisfies Omit<Book, 'id' | 'createdAt' | 'updatedAt' | 'ownerId'>;
}

function createBookWithImage() {
	return {
		...createBook(),
		images: {
			create: {
				altText: 'cute koala',
				contentType: 'image/png',
				blob: fs.readFileSync('tests/fixtures/images/my-books/cute-koala.png'),
			},
		},
	} satisfies Omit<Book, 'id' | 'createdAt' | 'updatedAt' | 'ownerId'> & {
		images: { create: Pick<BookImage, 'altText' | 'blob' | 'contentType'> };
	};
}
