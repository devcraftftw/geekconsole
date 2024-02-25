import { invariantResponse } from '@epic-web/invariant';
import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { lruCache } from '~/app/core/server-utils/cache/cache.server';
import {
	ensureInstance,
	getAllInstances,
	getInstanceInfo,
} from '~/app/core/server-utils/litefs/litefs.server';
import { requireUserWithRole } from '~/app/core/server-utils/permissions/permissions.server';

export async function loader({ request, params }: LoaderFunctionArgs) {
	await requireUserWithRole(request, 'admin');

	const searchParams = new URL(request.url).searchParams;
	const currentInstanceInfo = await getInstanceInfo();
	const allInstances = await getAllInstances();
	const instance =
		searchParams.get('instance') ?? currentInstanceInfo.currentInstance;

	await ensureInstance(instance);

	const { cacheKey } = params;

	invariantResponse(cacheKey, 'cacheKey is required');

	return json({
		instance: {
			hostname: instance,
			region: allInstances[instance],
			isPrimary: currentInstanceInfo.primaryInstance === instance,
		},
		cacheKey,
		value: lruCache.get(cacheKey),
	});
}
