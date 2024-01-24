export type TUserDto = {
	_id: string;
	name: string;
	email: string;
	group: string;
	avatar: string;
	about: string;
	accessToken: string;
};

export type TUserUpdateDto = Pick<TUserDto, 'name'>;

export type TUserDeleteDto = Pick<TUserDto, '_id'>;

export type TFavoritesDto = Pick<TProductDto, '_id'>;

export type TProductDto = {
	_id: string;
	name: string;
	price: number;
	discount: number;
	wight: string;
	description: string;
	isFavorite: boolean;
	isCart: boolean;
	available: boolean;
	stock: number;
	pictures: string;
};

export type TProductBEDto = {
	name: string;
	price: number;
	discount: number;
	stock: number;
	available: boolean;
	wight: string;
	description: string;
	pictures: string;
	tags: string[];
	isPublished: boolean;
	author: {
		name: string;
		about: string;
		avatar: string;
		email: string;
		password: string;
		isAdmin: true;
		group: string;
		token: string;
		_id: string;
	};
	likes: [
		{
			name: string;
			about: string;
			avatar: string;
			email: string;
			password: string;
			isAdmin: true;
			group: string;
			token: string;
			_id: string;
		}
	];
	reviews: [
		{
			name: string;
			city: string;
			text: string;
			rating: number;
			author: {
				name: string;
				about: string;
				avatar: string;
				email: string;
				password: string;
				isAdmin: true;
				group: string;
				token: string;
				_id: string;
			};
			product: string;
			_id: string;
			updated_at: string;
			created_at: string;
		}
	];
	_id: string;
	updated_at: string;
	created_at: string;
};

export type TProductDeleteDto = Pick<TProductDto, '_id'>;

export type TProductsDto = {
	products: TProductDto[];
	total: number;
};
