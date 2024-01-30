import { type SVGProps } from 'react';
import { type IconName } from '@/icon-name';
import { cn } from '~/app/shared/lib/utils/index.ts';
import href from './sprite.svg';

export { href };
export { IconName };

const sizeClassName = {
	font: 'h-[1em] w-[1em]',
	xs: 'h-3 w-3',
	sm: 'h-4 w-4',
	md: 'h-5 w-5',
	lg: 'h-6 w-6',
	xl: 'h-7 w-7',
} as const;

type Size = keyof typeof sizeClassName;

const childrenSizeClassName = {
	font: 'gap-1.5',
	xs: 'gap-1.5',
	sm: 'gap-1.5',
	md: 'gap-2',
	lg: 'gap-2',
	xl: 'gap-3',
} satisfies Record<Size, string>;

/**
 * Renders an SVG icon. The icon defaults to the size of the font. To make it
 * align vertically with neighboring text, you can pass the text as a child of
 * the icon and it will be automatically aligned.
 * Alternatively, if you're not ok with the icon being to the left of the text,
 * you need to wrap the icon and text in a common parent and set the parent to
 * display "flex" (or "inline-flex") with "items-center" and a reasonable gap.
 */
export function Icon({
	name,
	size = 'font',
	className,
	children,
	...props
}: SVGProps<SVGSVGElement> & {
	name: IconName;
	size?: Size;
}) {
	if (children) {
		return (
			<span
				className={`inline-flex items-center ${childrenSizeClassName[size]}`}
			>
				<Icon name={name} size={size} className={className} {...props} />
				{children}
			</span>
		);
	}
	return (
		<svg
			{...props}
			className={cn(sizeClassName[size], 'inline self-center', className)}
		>
			<use href={`${href}#${name}`} />
		</svg>
	);
}
