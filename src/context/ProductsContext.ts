import { createContext } from 'react';

export type TProduct = {
	id: string;
	name: string;
	price: number;
	picture: string;
	isFavorite: boolean;
};

export type TProductsContext = {
	products: TProduct[];
	busy: boolean;
};

const ProductsContext = createContext<TProductsContext>({
	products: [],
	busy: true,
});

ProductsContext.displayName = 'ProductsContext';

export default ProductsContext;
