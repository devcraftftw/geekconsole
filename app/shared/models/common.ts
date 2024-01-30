import { type Theme } from '~/app/core/server/index.ts';

export type OutletContextValues = {
	theme: Theme;
	toast: any;
};
