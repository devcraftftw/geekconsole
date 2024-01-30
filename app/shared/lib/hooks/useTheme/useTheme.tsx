import { parse } from '@conform-to/zod';
import { useFetchers } from '@remix-run/react';
import { useHints } from '~/app/core/utils/index.ts';
import { ThemeFormSchema } from '~/app/shared/schemas/index.ts';
import { useRequestInfo } from '../useRequestInfo/useRequestInfo.tsx';

/**
 * @returns the user's theme preference, or the client hint theme if the user
 * has not set a preference.
 */
export function useTheme() {
	const hints = useHints();
	const requestInfo = useRequestInfo();
	const optimisticMode = useOptimisticThemeMode();

	if (optimisticMode) {
		return optimisticMode === 'system' ? hints.theme : optimisticMode;
	}

	return requestInfo.userPrefs.theme ?? hints.theme;
}

/**
 * If the user's changing their theme mode preference, this will return the
 * value it's being changed to.
 */
export function useOptimisticThemeMode() {
	const fetchers = useFetchers();
	const themeFetcher = fetchers.find((f) => f.formAction === '/');

	if (themeFetcher && themeFetcher.formData) {
		const submission = parse(themeFetcher.formData, {
			schema: ThemeFormSchema,
		});

		return submission.value?.theme;
	}
}
