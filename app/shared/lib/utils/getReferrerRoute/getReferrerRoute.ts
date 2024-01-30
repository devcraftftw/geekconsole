import { getDomainUrl } from '../getDomainUrl/getDomainUrl.ts';

export function getReferrerRoute(request: Request) {
	// spelling errors and whatever makes this annoyingly inconsistent
	// in my own testing, `referer` returned the right value, but 🤷‍♂️
	const referrer =
		request.headers.get('referer') ??
		request.headers.get('referrer') ??
		request.referrer;

	const domain = getDomainUrl(request);

	if (referrer?.startsWith(domain)) return referrer.slice(domain.length);
	else return '/';
}
