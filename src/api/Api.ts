export type TUserDto = {
	_id: string;
	name: string;
};

export type TUserUpdateDto = Pick<TUserDto, 'name'>;

type TConfigApi = {
	baseUrl: string;
	headers: HeadersInit;
};
import { config } from './config';
import { TData } from '../data';

export class Api {
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

	public getUserInfo() {
		return fetch(this.getApiUrl('/users/me'), {
			headers: this.headers,
		}).then(this.onResponse);
	}

	public setUserInfo(userData: TUserUpdateDto) {
		return fetch(this.getApiUrl('/users/me'), {
			method: 'PATCH',
			headers: this.headers,
			body: JSON.stringify(userData),
		}).then(this.onResponse);
	}

	public getProducts(params?: {
		page?: number;
		limit?: number;
		query?: string;
	}): Promise<TData> {
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
