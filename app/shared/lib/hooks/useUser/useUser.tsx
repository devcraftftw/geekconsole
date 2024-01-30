import { useOptionalUser } from '../useOptionalUser/useOptionalUser.tsx';

export function useUser() {
	const maybeUser = useOptionalUser();

	if (!maybeUser) {
		throw new Error(
			'User not found. If the user is optional use useOptionalUser instead',
		);
	}

	return maybeUser;
}
