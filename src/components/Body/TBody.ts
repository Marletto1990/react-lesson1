import { TProductCard } from '../ProductCard/TProductCard';
import { TSortBy } from '../Sorter/TSortBy';
export type TBody = {
	busy: boolean;
	products: TProductCard[];
	pagination: number;
	count: number;
	onPressPagination: (value: number) => void;
	onChangeSort: (value: TSortBy) => void;
};
