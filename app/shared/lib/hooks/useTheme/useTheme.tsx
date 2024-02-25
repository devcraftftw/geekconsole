import { useHints } from '#app/core/client-utils/clientHints/clientHints.tsx';
import { useOptimisticThemeMode } from '../useOptimisticThemeMode/useOptimisticThemeMode.tsx';

/**
 * @returns the user's theme preference, or the client hint theme if the user
 * has not set a preference.
 */
export function useTheme() {
	const hints = useHints();
	const optimisticMode = useOptimisticThemeMode();

	if (optimisticMode) {
		return optimisticMode === 'system' ? hints.theme : optimisticMode;
	}

	return hints.theme;
}
