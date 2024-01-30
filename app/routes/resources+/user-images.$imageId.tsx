import { invariantResponse } from '@epic-web/invariant';
import { type LoaderFunctionArgs } from '@remix-run/node';
import { prisma } from '~/app/core/server/index.ts';

export async function loader({ params }: LoaderFunctionArgs) {
	invariantResponse(params.imageId, 'Image ID is required', { status: 400 });

	const image = await prisma.userImage.findUnique({
		where: { id: params.imageId },
		select: { contentType: true, blob: true },
	});

	invariantResponse(image, 'Not found', { status: 404 });

	return new Response(image.blob, {
		headers: {
			'content-type': image.contentType,
			'content-length': Buffer.byteLength(image.blob).toString(),
			'content-disposition': `inline; filename="${params.imageId}"`,
			'cache-control': 'public, max-age=31536000, immutable',
		},
	});
}
