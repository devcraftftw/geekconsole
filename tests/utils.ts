import * as setCookieParser from 'set-cookie-parser';
import { SESSION_KEY, authSessionStorage } from '~/app/core/server/index.ts';

export const BASE_URL = 'https://www.geekconsole.app';

export function convertSetCookieToCookie(setCookie: string) {
	const parsedCookie = setCookieParser.parseString(setCookie);
	return new URLSearchParams({
		[parsedCookie.name]: parsedCookie.value,
	}).toString();
}

export async function getSessionSetCookieHeader(
	session: { id: string },
	existingCookie?: string,
) {
	const authSession = await authSessionStorage.getSession(existingCookie);
	authSession.set(SESSION_KEY, session.id);
	const setCookieHeader = await authSessionStorage.commitSession(authSession);
	return setCookieHeader;
}

export async function getSessionCookieHeader(
	session: { id: string },
	existingCookie?: string,
) {
	const setCookieHeader = await getSessionSetCookieHeader(
		session,
		existingCookie,
	);
	return convertSetCookieToCookie(setCookieHeader);
}
