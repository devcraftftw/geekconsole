import { useNavigation } from '@remix-run/react';

import { cn } from '#app/shared/lib/utils/index.ts';

export function GlobalLoading() {
	const navigation = useNavigation();
	const active = navigation.state === 'loading';

	return (
		<div
			role="progressbar"
			aria-valuetext={active ? 'Loading' : undefined}
			aria-hidden={!active}
			className={cn(
				'pointer-events-none fixed bottom-0 left-0 z-50 p-4 transition-all duration-500 ease-out',
				active ? 'translate-y-0' : 'translate-y-full',
			)}
		>
			<svg
				className="size-7 animate-spin"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				width="1em"
				height="1em"
			>
				<circle
					className="stroke-blue-600/25"
					cx={12}
					cy={12}
					r={10}
					strokeWidth={4}
				/>
				<path
					className="fill-blue-600"
					d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				/>
			</svg>
		</div>
	);
}
