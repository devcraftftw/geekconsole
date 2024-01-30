/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	css: { postcss: { plugins: [] } },
	test: {
		include: [
			'./tests/unit/**/*.test.{ts,tsx}',
			'./tests/integration/**/*.test.{ts,tsx}',
		],
		setupFiles: ['./tests/setup/setup-test-env.ts'],
		globalSetup: ['./tests/setup/global-setup.ts'],
		restoreMocks: true,
		coverage: {
			include: [
				'tests/unit/**/*.{ts,tsx}',
				'tests/integration/**/*.test.{ts,tsx}',
			],
			all: true,
		},
	},
});
