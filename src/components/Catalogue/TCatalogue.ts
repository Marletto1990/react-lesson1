import { TProductDto } from '../../api/Api';
import { TSortBy } from '../Sorter/TSortBy';
export type TCatalogue = {
	busy: boolean;
	products: TProductDto[];
	pagination: number | undefined;
	count: number;
	total: number;
	onPressPagination: (value: number) => void;
	onChangeSort: (value: TSortBy) => void;
};
