export function getUserImgSrc(imageId?: string | null) {
	return imageId ? `/resources/user-images/${imageId}` : '/img/user.png';
}

export function getBookImgSrc(imageId: string) {
	return `/resources/book-images/${imageId}`;
}
