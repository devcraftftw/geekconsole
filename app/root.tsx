import { parseWithZod } from '@conform-to/zod';
import { invariantResponse } from '@epic-web/invariant';
import {
	type HeadersFunction,
	type LoaderFunctionArgs,
	type ActionFunctionArgs,
	json,
	type LinksFunction,
} from '@remix-run/node';
import {
	type MetaFunction,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from '@remix-run/react';
import { withSentry } from '@sentry/remix';
import { type PropsWithChildren } from 'react';
import { AuthenticityTokenProvider } from 'remix-utils/csrf/react';

import { HoneypotProvider } from 'remix-utils/honeypot/react';
import { href as iconsHref } from '~/app/shared/ui/Icons/Icon.tsx';
import {
	ClientHintCheck,
	getHints,
} from './core/client-utils/clientHints/clientHints.tsx';
import { useNonce } from './core/client-utils/nonce/nonce.ts';
import { getUserId, logout } from './core/server-utils/auth/auth.server.ts';
import { getConfetti } from './core/server-utils/confetti/confetti.server.ts';
import { csrf } from './core/server-utils/csrf/csrf.server.ts';
import { prisma } from './core/server-utils/db/db.server.ts';
import { getEnv } from './core/server-utils/env/env.server.ts';
import { honeypot } from './core/server-utils/honeypot/honeypot.server.ts';
import {
	type Theme,
	setTheme,
	getTheme,
} from './core/server-utils/theme/theme.server.ts';
import { makeTimings, time } from './core/server-utils/timing/timing.server.ts';
import { getToast } from './core/server-utils/toast/toast.server.ts';
import fonts from './core/styles/fonts.css?url';
import twStyles from './core/styles/twStyles.css?url';
import { useTheme } from './shared/lib/hooks/index.ts';
import { combineHeaders, getDomainUrl } from './shared/lib/utils/index.ts';
import { ThemeFormSchema } from './shared/schemas/index.ts';
import { GeneralErrorBoundary } from './shared/ui/index.ts';

export const links: LinksFunction = () =>
	[
		// Preload svg sprite as a resource to avoid render blocking
		{ rel: 'preload', href: iconsHref, as: 'image' },
		// Preload CSS as a resource to avoid render blocking
		{
			rel: 'preload',
			href: twStyles,
			as: 'style',
		},
		{ rel: 'preload', href: fonts, as: 'style' },
		{
			rel: 'icon',
			type: 'image/svg+xml',
			href: 'favicons/favicon_bl.svg',
		},
		{
			rel: 'stylesheet',
			href: twStyles,
		},
		{ rel: 'stylesheet', href: fonts },
	].filter(Boolean);

export default withSentry(AppWithProviders);

function AppWithProviders() {
	const { honeyProps, csrfToken } = useLoaderData<typeof loader>();

	return (
		<AuthenticityTokenProvider token={csrfToken}>
			<HoneypotProvider {...honeyProps}>
				<App />
			</HoneypotProvider>
		</AuthenticityTokenProvider>
	);
}

function App() {
	const { ENV } = useLoaderData<typeof loader>();

	const theme = useTheme();
	const nonce = useNonce();

	return (
		<Document nonce={nonce} theme={theme}>
			<Outlet />

			<script
				nonce={nonce}
				dangerouslySetInnerHTML={{
					__html: `window.ENV = ${JSON.stringify(ENV)}`,
				}}
			/>
		</Document>
	);
}

function Document({
	children,
	nonce,
	theme,
}: PropsWithChildren<{ nonce: string; theme?: Theme }>) {
	return (
		<html className={`${theme}`} lang="en">
			<head>
				<ClientHintCheck nonce={nonce} />
				<Meta />
				<Links />

				<meta charSet="utf-8" />
				<meta name="description" content="Your favourite geek storage" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
			</head>
			<body className="flex min-h-screen flex-col items-center bg-background text-foreground">
				{children}

				<ScrollRestoration nonce={nonce} />
				<Scripts nonce={nonce} />
			</body>
		</html>
	);
}

export async function action({ request }: ActionFunctionArgs) {
	const formData = await request.formData();

	const submission = parseWithZod(formData, {
		schema: ThemeFormSchema,
	});

	invariantResponse(submission.status === 'success', 'Invalid theme received');

	const { theme } = submission.value;

	const responseInit = {
		headers: { 'set-cookie': setTheme(theme) },
	};

	return json({ result: submission.reply() }, responseInit);
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
	const timings = makeTimings('root loader');
	const userId = await time(() => getUserId(request), {
		timings,
		type: 'getUserId',
		desc: 'getUserId in root',
	});

	const user = userId
		? await time(
				() =>
					prisma.user.findUniqueOrThrow({
						select: {
							id: true,
							name: true,
							username: true,
							email: true,
							image: { select: { id: true } },
							roles: {
								select: {
									name: true,
									permissions: {
										select: { entity: true, action: true, access: true },
									},
								},
							},
						},
						where: { id: userId },
					}),
				{ timings, type: 'find user', desc: 'find user in root' },
			)
		: null;

	if (userId && !user) {
		console.info('something weird happened');
		// something weird happened... The user is authenticated but we can't find
		// them in the database. Maybe they were deleted? Let's log them out.
		await logout({ request, redirectTo: '/' });
	}

	const { toast, headers: toastHeaders } = await getToast(request);
	const { confettiId, headers: confettiHeaders } = getConfetti(request);
	const honeyProps = honeypot.getInputProps();
	const [csrfToken, csrfCookieHeader] = await csrf.commitToken(request);

	return json(
		{
			user,
			requestInfo: {
				hints: getHints(request),
				origin: getDomainUrl(request),
				path: new URL(request.url).pathname,
				userPrefs: {
					theme: getTheme(request),
				},
			},
			ENV: getEnv(),
			toast,
			confettiId,
			honeyProps,
			csrfToken,
		},
		{
			headers: combineHeaders(
				{ 'Server-Timing': timings.toString() },
				toastHeaders,
				confettiHeaders,
				csrfCookieHeader ? { 'set-cookie': csrfCookieHeader } : null,
			),
		},
	);
};

export const headers: HeadersFunction = ({ loaderHeaders }) => {
	const headers = {
		'Server-Timing': loaderHeaders.get('Server-Timing') ?? '',
	};

	return headers;
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	return [
		{ title: data ? 'GeekConsole' : 'Error | GeekConsole' },
		{ name: 'description', content: `Your favourite geek storage` },
	];
};

export function ErrorBoundary() {
	// the nonce doesn't rely on the loader so we can access that
	const nonce = useNonce();

	// NOTE: you cannot use useLoaderData in an ErrorBoundary because the loader
	// likely failed to run so we have to do the best we can.
	// We could probably do better than this (it's possible the loader did run).
	// This would require a change in Remix.

	// Just make sure your root route never errors out and you'll always be able
	// to give the user a better UX.

	return (
		<Document nonce={nonce}>
			<GeneralErrorBoundary />
		</Document>
	);
}
