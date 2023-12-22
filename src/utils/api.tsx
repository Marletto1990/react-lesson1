import { TConfigApi } from './TConfigApi';

export class Api {
	private baseUrl;
	private headers;

	constructor({ baseUrl, headers }: TConfigApi) {
		this.baseUrl = baseUrl;
		this.headers = headers;
	}

	private onResponse(res: Response) {
		return res.ok
			? res.json
			: res.json().then((err) => Promise.reject(err));
	}

	private getApiUrl(path: string) {
		return `${this.baseUrl}${path}`;
	}

	// private getUserInfo() {
	// 	return fetch(this.getApiUrl('/users/me'), {
	// 		headers: this.headers,
	// 	}).then(this.onResponse);
	// }
}

// export const api = new Api({
// 	baseUrl: config.apiUrl,
// 	headers: {
// 		'content-type': 'application/json',
// 		autorization: 'Bearer',
// 	},
// });
