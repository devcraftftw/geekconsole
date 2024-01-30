import { createCookieSessionStorage } from '@remix-run/node';
import { type ProviderName } from '~/app/core/components/providers/index.ts';
import { type AuthProvider } from '~/app/core/utils/index.ts';
import { GitHubProvider } from '../github/github.server.ts';
import { type Timings } from '../timing/timing.server.ts';

export const connectionSessionStorage = createCookieSessionStorage({
	cookie: {
		name: 'gk_connection',
		sameSite: 'lax',
		path: '/',
		httpOnly: true,
		maxAge: 60 * 10, // 10 minutes
		secrets: process.env.SESSION_SECRET.split(','),
		secure: process.env.NODE_ENV === 'production',
	},
});

export const providers: Record<ProviderName, AuthProvider> = {
	github: new GitHubProvider(),
};

export function handleMockAction(providerName: ProviderName, request: Request) {
	return providers[providerName].handleMockAction(request);
}

export function resolveConnectionData(
	providerName: ProviderName,
	providerId: string,
	options?: { timings?: Timings },
) {
	return providers[providerName].resolveConnectionData(providerId, options);
}
