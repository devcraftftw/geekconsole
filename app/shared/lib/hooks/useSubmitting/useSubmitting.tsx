import { useFormAction, useNavigation } from '@remix-run/react';

/**
 * Returns true if the current navigation is submitting the current route's
 * form. Defaults to the current route's form action and method POST.
 */
export function useSubmitting({
	formAction,
	formMethod = 'POST',
}: {
	formAction?: string;
	formMethod?: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';
} = {}) {
	const contextualFormAction = useFormAction();
	const navigation = useNavigation();

	return (
		navigation.state === 'submitting' &&
		navigation.formAction === (formAction ?? contextualFormAction) &&
		navigation.formMethod === formMethod
	);
}
