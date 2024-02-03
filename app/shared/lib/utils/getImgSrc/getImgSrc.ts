export function getUserImgSrc(imageId?: string | null) {
	return imageId ? `/resources/user-images/${imageId}` : '/images/user.png';
}

export function getBookImgSrc(imageId?: string | null) {
	return imageId ? `/resources/book-images/${imageId}` : '/images/noCover.gif';
}
