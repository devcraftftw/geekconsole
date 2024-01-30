import * as cookie from 'cookie';

const COOKIE_NAME = 'theme';
export type Theme = 'light' | 'dark' | 'system';

export function getTheme(request: Request): Theme | null {
	const cookieHeader = request.headers.get('cookie');
	const parsed = cookieHeader
		? cookie.parse(cookieHeader)[COOKIE_NAME]
		: 'dark';

	if (parsed === 'light' || parsed === 'dark') return parsed;

	return null;
}

export function setTheme(theme: Theme | 'system') {
	if (theme === 'system') {
		return cookie.serialize(COOKIE_NAME, '', {
			path: '/',
			maxAge: -1,
			sameSite: 'lax',
		});
	} else {
		return cookie.serialize(COOKIE_NAME, theme, {
			path: '/',
			maxAge: 31536000,
			sameSite: 'lax',
		});
	}
}
