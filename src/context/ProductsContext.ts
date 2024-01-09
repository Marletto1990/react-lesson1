import { createContext } from 'react';
import { TProductCard } from '../components/ProductCard';

export type TProductsContext = {
	products: TProductCard[];
	busy: boolean;
};

const ProductsContext = createContext<TProductsContext>({
	products: [],
	busy: true,
});

ProductsContext.displayName = 'ProductsContext';

export default ProductsContext;
