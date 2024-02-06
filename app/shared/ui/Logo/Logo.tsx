import { cn } from '../../lib/utils';
import logoBigDark from './logo-big-black.svg';
import logoBigLight from './logo-big-white.svg';
import logoSmallDark from './logo-black.svg';
import logoSmallLight from './logo-white.svg';

export const BigLogo = ({
	className,
	isDark,
}: {
	className?: string;
	isDark: boolean;
}) => {
	return (
		<img
			src={isDark ? logoBigLight : logoBigDark}
			className={cn('w-96', className)}
			alt="GeekConsole Big Logo"
		/>
	);
};

export const SmallLogo = ({
	className,
	isDark,
}: {
	className?: string;
	isDark: boolean;
}) => {
	return (
		<img
			src={isDark ? logoSmallLight : logoSmallDark}
			className={cn('w-6', className)}
			alt="GeekConsole Small Logo"
		/>
	);
};
