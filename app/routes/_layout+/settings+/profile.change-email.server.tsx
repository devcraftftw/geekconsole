import { invariant } from '@epic-web/invariant';
import * as E from '@react-email/components';
import { json } from '@remix-run/node';
import { prisma } from '~/app/core/server-utils/db/db.server';
import { sendEmail } from '~/app/core/server-utils/email/email.server';
import { redirectWithToast } from '~/app/core/server-utils/toast/toast.server';
import { verifySessionStorage } from '~/app/core/server-utils/verification/verification.server';
import {
	type VerifyFunctionArgs,
	requireRecentVerification,
} from '../_auth+/verify.server';

const newEmailAddressSessionKey = 'new-email-address';

export async function handleVerification({
	request,
	submission,
}: VerifyFunctionArgs) {
	await requireRecentVerification(request);

	invariant(
		submission.status === 'success',
		'Submission should be successful by now',
	);

	const verifySession = await verifySessionStorage.getSession(
		request.headers.get('cookie'),
	);

	const newEmail = verifySession.get(newEmailAddressSessionKey);

	if (!newEmail) {
		return json(
			{
				result: submission.reply({
					formErrors: [
						'You must submit the code on the same device that requested the email change.',
					],
				}),
			},
			{ status: 400 },
		);
	}

	const preUpdateUser = await prisma.user.findFirstOrThrow({
		select: { email: true },
		where: { id: submission.value.target },
	});

	const user = await prisma.user.update({
		where: { id: submission.value.target },
		select: { id: true, email: true, username: true },
		data: { email: newEmail },
	});

	void sendEmail({
		to: preUpdateUser.email,
		subject: 'GeekConsole email changed',
		react: <EmailChangeNoticeEmail userId={user.id} />,
	});

	return redirectWithToast(
		'/settings/profile',
		{
			title: 'Email Changed',
			type: 'success',
			description: `Your email has been changed to ${user.email}`,
		},
		{
			headers: {
				'set-cookie': await verifySessionStorage.destroySession(verifySession),
			},
		},
	);
}

export function EmailChangeEmail({
	verifyUrl,
	otp,
}: {
	verifyUrl: string;
	otp: string;
}) {
	return (
		<E.Html lang="en" dir="ltr">
			<E.Container>
				<h1>
					<E.Text>GeekConsole Email Change</E.Text>
				</h1>
				<p>
					<E.Text>
						Here's your verification code: <strong>{otp}</strong>
					</E.Text>
				</p>
				<p>
					<E.Text>Or click the link:</E.Text>
				</p>
				<E.Link href={verifyUrl}>{verifyUrl}</E.Link>
			</E.Container>
		</E.Html>
	);
}

export function EmailChangeNoticeEmail({ userId }: { userId: string }) {
	return (
		<E.Html lang="en" dir="ltr">
			<E.Container>
				<h1>
					<E.Text>Your GeekConsole email has been changed</E.Text>
				</h1>
				<p>
					<E.Text>
						We're writing to let you know that your GeekConsole email has been
						changed.
					</E.Text>
				</p>
				<p>
					<E.Text>
						If you changed your email address, then you can safely ignore this.
						But if you did not change your email address, then please contact
						support immediately.
					</E.Text>
				</p>
				<p>
					<E.Text>Your Account ID: {userId}</E.Text>
				</p>
			</E.Container>
		</E.Html>
	);
}
