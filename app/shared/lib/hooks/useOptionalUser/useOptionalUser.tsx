import { useRouteLoaderData } from '@remix-run/react';
import { type loader as rootLoader } from '~/app/root.tsx';

export function useOptionalUser() {
	const data = useRouteLoaderData<typeof rootLoader>('root');
	return data?.user ?? null;
}
