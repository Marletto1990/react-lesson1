import { TProductCard } from '../ProductCard/TProductCard';
import { TSortBy } from '../Sorter/TSortBy';
export type TCatalogue = {
	busy: boolean;
	products: TProductCard[];
	pagination: number;
	count: number;
	total: number;
	onPressPagination: (value: number) => void;
	onChangeSort: (value: TSortBy) => void;
};
