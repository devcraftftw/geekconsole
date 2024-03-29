import { redirect, type ActionFunctionArgs } from '@remix-run/node';
import { ProviderNameSchema } from '#app/core/components/providers/index.ts';
import { authenticator } from '#app/core/server-utils/auth/auth.server';
import { handleMockAction } from '#app/core/server-utils/connections/connections.server';
import { getRedirectCookieHeader } from '#app/core/server-utils/redirect/redirectCookie.server';
import { getReferrerRoute } from '#app/shared/lib/utils/index.ts';

export async function loader() {
	return redirect('/login');
}

export async function action({ request, params }: ActionFunctionArgs) {
	const providerName = ProviderNameSchema.parse(params.provider);

	try {
		await handleMockAction(providerName, request);
		return await authenticator.authenticate(providerName, request);
	} catch (error: unknown) {
		if (error instanceof Response) {
			const formData = await request.formData();
			const rawRedirectTo = formData.get('redirectTo');
			const redirectTo =
				typeof rawRedirectTo === 'string'
					? rawRedirectTo
					: getReferrerRoute(request);

			const redirectToCookie = getRedirectCookieHeader(redirectTo);

			if (redirectToCookie) {
				error.headers.append('set-cookie', redirectToCookie);
			}
		}

		throw error;
	}
}
