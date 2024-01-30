/**
 * @vitest-environment jsdom
 */

// This pragma above gives us a simulated browser environment

import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { ErrorList } from '~/app/shared/ui/index.ts';

test('shows nothing when given an empty list', async () => {
	render(<ErrorList />);

	expect(screen.queryAllByRole('listitem')).toHaveLength(0);
});

test('shows a single error', async () => {
	const errors = [faker.lorem.words(3)];

	render(<ErrorList errors={errors} />);

	const errorEls = screen.getAllByRole('listitem');

	expect(errorEls.map((e) => e.textContent)).toEqual(errors);
});

test('shows multiple errors', async () => {
	const errors = [faker.lorem.words(3), faker.lorem.words(3)];

	render(<ErrorList errors={errors} />);

	const errorEls = screen.getAllByRole('listitem');

	expect(errorEls.map((e) => e.textContent)).toEqual(errors);
});

test('can cope with falsy values', async () => {
	const errors = [
		faker.lorem.words(3),
		null,
		faker.lorem.words(3),
		undefined,
		'',
	];

	render(<ErrorList errors={errors} />);

	const errorEls = screen.getAllByRole('listitem');
	const actualErrors = errors.filter(Boolean);

	expect(errorEls).toHaveLength(actualErrors.length);
	expect(errorEls.map((e) => e.textContent)).toEqual(actualErrors);
});

test('adds id to the ul', async () => {
	const id = faker.lorem.word();

	render(<ErrorList id={id} errors={[faker.lorem.words(3)]} />);

	const ul = screen.getByRole('list');

	expect(ul).toHaveAttribute('id', id);
});
