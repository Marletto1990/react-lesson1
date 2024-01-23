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

export type TProductDeleteDto = Pick<TProductDto, '_id'>;

export type TProductsDto = {
	products: TProductDto[];
	total: number;
};
