type TData = {
	products: {
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
	}[];
	total: number;
};

export type { TData };
