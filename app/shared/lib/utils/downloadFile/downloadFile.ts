export async function downloadFile(url: string, retries: number = 0) {
	const MAX_RETRIES = 3;

	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`Failed to fetch image with status ${response.status}`);
		}

		const contentType = response.headers.get('content-type') ?? 'image/jpg';
		const blob = Buffer.from(await response.arrayBuffer());

		return { contentType, blob };
	} catch (e) {
		if (retries > MAX_RETRIES) throw e;
		return downloadFile(url, retries + 1);
	}
}
