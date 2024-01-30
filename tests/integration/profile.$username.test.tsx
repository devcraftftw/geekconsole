/**
 * @vitest-environment jsdom
 */
import { faker } from '@faker-js/faker';
import { createRemixStub } from '@remix-run/testing';
import { render, screen } from '@testing-library/react';
import setCookieParser from 'set-cookie-parser';
import { test } from 'vitest';
import {
	prisma,
	getSessionExpirationDate,
	authSessionStorage,
	SESSION_KEY,
} from '~/app/core/server';
import { loader as rootLoader } from '~/app/root.tsx';
import {
	default as UsernameRoute,
	loader,
} from '~/app/routes/_layout+/profile.$username';
import { createUser, getUserImages } from '../db-utils';

test('The user profile when not logged in as self', async () => {
	const userImages = await getUserImages();
	const userImage =
		userImages[faker.number.int({ min: 0, max: userImages.length - 1 })];
	const user = await prisma.user.create({
		select: { id: true, username: true, name: true },
		data: { ...createUser(), image: { create: userImage } },
	});
	const App = createRemixStub([
		{
			path: '/profile/:username',
			Component: UsernameRoute,
			loader,
		},
	]);

	const routeUrl = `/profile/${user.username}`;
	render(<App initialEntries={[routeUrl]} />);

	await screen.findByRole('heading', { level: 1, name: user.name! });
	await screen.findByRole('img', { name: user.name! });
});

test('The user profile when logged in as self', async () => {
	const userImages = await getUserImages();
	const userImage =
		userImages[faker.number.int({ min: 0, max: userImages.length - 1 })];
	const user = await prisma.user.create({
		select: { id: true, username: true, name: true },
		data: { ...createUser(), image: { create: userImage } },
	});
	const session = await prisma.session.create({
		select: { id: true },
		data: {
			expirationDate: getSessionExpirationDate(),
			userId: user.id,
		},
	});

	const authSession = await authSessionStorage.getSession();
	authSession.set(SESSION_KEY, session.id);
	const setCookieHeader = await authSessionStorage.commitSession(authSession);
	const parsedCookie = setCookieParser.parseString(setCookieHeader);
	const cookieHeader = new URLSearchParams({
		[parsedCookie.name]: parsedCookie.value,
	}).toString();

	const App = createRemixStub([
		{
			id: 'root',
			path: '/',
			loader: async (args) => {
				// add the cookie header to the request
				args.request.headers.set('cookie', cookieHeader);
				return rootLoader(args);
			},
			children: [
				{
					path: 'profile/:username',
					Component: UsernameRoute,
					loader: async (args) => {
						// add the cookie header to the request
						args.request.headers.set('cookie', cookieHeader);
						return loader(args);
					},
				},
			],
		},
	]);

	const routeUrl = `/profile/${user.username}`;
	await render(<App initialEntries={[routeUrl]} />);

	await screen.findByRole('heading', { level: 1, name: user.name! });
	await screen.findByRole('img', { name: user.name! });
	await screen.findByRole('button', { name: /logout/i });
	await screen.findByRole('link', { name: /my dashboard/i });
	await screen.findByRole('link', { name: /edit profile/i });
});
