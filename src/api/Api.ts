type TConfigApi = {
	baseUrl: string;
	headers: HeadersInit;
};
import { config } from './config';

class Api {
	private baseUrl;
	private headers;

	constructor({ baseUrl, headers }: TConfigApi) {
		this.baseUrl = baseUrl;
		this.headers = headers;
	}

	private onResponse(res: Response) {
		return res.ok
			? res.json()
			: res.json().then((err) => Promise.reject(err));
	}

	private getApiUrl(path: string) {
		return `${this.baseUrl}${path}`;
	}

	getUserInfo() {
		return fetch(this.getApiUrl('/users/me'), {
			headers: this.headers,
		}).then(this.onResponse);
	}

	getProducts(params?: { page?: number; limit?: number; query?: string }) {
		let path = '/products';
		if (params) {
			const { page, limit, query } = params;
			const uriParams: string[] = [];
			page && uriParams.push(`page=${page}`);
			limit && uriParams.push(`limit=${limit}`);
			query && uriParams.push(`query=${query}`);
			if (uriParams.length) {
				path = `${path}?${uriParams.join('&')}`;
			}
		}
		return fetch(this.getApiUrl(path), {
			headers: this.headers,
		}).then(this.onResponse);
	}
}

export const api = new Api({
	baseUrl: config.apiUrl,
	headers: {
		'content-type': 'application/json',
		authorization: `Bearer ${config.apiToken}`,
	},
});
