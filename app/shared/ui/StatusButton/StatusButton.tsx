import * as React from 'react';
import { useSpinDelay } from 'spin-delay';
import { cn } from '#app/shared/lib/utils/index.ts';
import { Button, type ButtonProps } from '../Button/Button.tsx';
import { Icon } from '../Icons/Icon.tsx';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '../Tooltip/Tooltip.tsx';

export const StatusButton = React.forwardRef<
	HTMLButtonElement,
	ButtonProps & {
		status: 'pending' | 'success' | 'error' | 'idle';
		message?: string | null;
		spinDelay?: Parameters<typeof useSpinDelay>[1];
	}
>(({ message, status, className, children, spinDelay, ...props }, ref) => {
	const delayedPending = useSpinDelay(status === 'pending', {
		delay: 400,
		minDuration: 300,
		...spinDelay,
	});

	const companion = {
		pending: delayedPending ? (
			<div className="inline-flex size-6 items-center justify-center">
				<Icon name="update" className="animate-spin" />
			</div>
		) : null,
		success: (
			<div className="inline-flex size-6 items-center justify-center">
				<Icon name="check" />
			</div>
		),
		error: (
			<div className="inline-flex size-6 items-center justify-center rounded-full bg-destructive">
				<Icon name="cross-1" className="text-foreground" />
			</div>
		),
		idle: null,
	}[status];

	return (
		<Button
			ref={ref}
			className={cn('flex justify-center gap-4', className)}
			{...props}
		>
			<div>{children}</div>

			{message ? (
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>{companion}</TooltipTrigger>
						<TooltipContent>{message}</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			) : (
				companion
			)}
		</Button>
	);
});

StatusButton.displayName = 'Button';
