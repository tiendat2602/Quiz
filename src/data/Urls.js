import { dataTypes } from './Types';

//const protocol = "http";
//const hostname = "localhost";
//const port = 3500;

export const RestUrls = {
	[dataTypes.CATEGORIES]: `/api/categories`,
	[dataTypes.HTML]: `/api/html`,
	[dataTypes.CSS]: `/api/css`,
	[dataTypes.JAVASCRIPT]: `/api/javascript`,
	[dataTypes.BOOTSTRAP]: `/api/bootstrap`,
	[dataTypes.JQUERY]: `/api/jquery`,
	[dataTypes.XML]: `/api/xml`
}

export const authUrl = `/login`;

