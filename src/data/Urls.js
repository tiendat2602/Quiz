import { dataTypes } from './Types';

const protocol = "http";
const hostname = "localhost";
const port = 3500;

export const RestUrls = {
	[dataTypes.CATEGORIES]: `${protocol}://${hostname}:${port}/api/categories`,
	[dataTypes.HTML]: `${protocol}://${hostname}:${port}/api/html`,
	[dataTypes.CSS]: `${protocol}://${hostname}:${port}/api/css`,
	[dataTypes.JAVASCRIPT]: `${protocol}://${hostname}:${port}/api/javascript`,
	[dataTypes.BOOTSTRAP]: `${protocol}://${hostname}:${port}/api/bootstrap`,
	[dataTypes.JQUERY]: `${protocol}://${hostname}:${port}/api/jquery`,
	[dataTypes.XML]: `${protocol}://${hostname}:${port}/api/xml`
}

