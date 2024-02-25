import { invariant } from '@epic-web/invariant';
import { redirect } from '@remix-run/node';
import { verifySessionStorage } from '#app/core/server-utils/verification/verification.server.ts';
import { ONBOARDING_EMAIL_SESSION_KEY } from './onboarding.tsx';
import { type VerifyFunctionArgs } from './verify.server.ts';

export async function handleVerification({ submission }: VerifyFunctionArgs) {
	invariant(
		submission.status === 'success',
		'Submission should be successful by now',
	);
	const verifySession = await verifySessionStorage.getSession();
	verifySession.set(ONBOARDING_EMAIL_SESSION_KEY, submission.value.target);
	return redirect('/onboarding', {
		headers: {
			'set-cookie': await verifySessionStorage.commitSession(verifySession),
		},
	});
}
