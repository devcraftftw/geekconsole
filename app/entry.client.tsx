import { startTransition } from 'react';
import { RemixBrowser } from '@remix-run/react';
import { hydrateRoot } from 'react-dom/client';

if (ENV.MODE === 'production' && ENV.SENTRY_DSN) {
	import('./core/utils/monitoring/monitoring.client.ts').then(({ init }) =>
		init(),
	);
}

startTransition(() => {
	hydrateRoot(document, <RemixBrowser />);
});
