export const exhaustiveCheck = (param: never): never => {
	throw new Error('Should not reach here');
};
