import { useSpinDelay } from 'spin-delay';
import { useIsPending } from '../useIsPending/useIsPending.tsx';

/**
 * This combines useSpinDelay (from https://npm.im/spin-delay) and useIsPending
 * from our own utilities to give you a nice way to show a loading spinner for
 * a minimum amount of time, even if the request finishes right after the delay.
 *
 * This avoids a flash of loading state regardless of how fast or slow the
 * request is.
 */
export function useDelayedIsPending({
	formAction,
	formMethod,
	delay = 400,
	minDuration = 300,
}: Parameters<typeof useIsPending>[0] &
	Parameters<typeof useSpinDelay>[1] = {}) {
	const isPending = useIsPending({ formAction, formMethod });

	const delayedIsPending = useSpinDelay(isPending, {
		delay,
		minDuration,
	});

	return delayedIsPending;
}
