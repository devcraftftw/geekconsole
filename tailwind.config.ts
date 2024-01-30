/** @type {import('tailwindcss').Config} */

import typographyPlugin from '@tailwindcss/typography';
import { type Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme.js';
import animatePlugin from 'tailwindcss-animate';
import radixPlugin from 'tailwindcss-radix';

// it's imported like this by purpose, DO NOT CHANGE
import { extendedTheme } from './app/core/utils/extendedTheme/extendedTheme.ts';
import { marketingPreset } from './app/routes/_layout+/_marketing+/marketing-preset.ts';

export default {
	darkMode: 'class',
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			fontFamily: {
				sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
			},
			...extendedTheme,
		},
	},
	presets: [marketingPreset],
	plugins: [animatePlugin, radixPlugin, typographyPlugin],
} satisfies Config;
