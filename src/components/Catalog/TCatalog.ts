import { TProductDto } from '../../model/model';
// import { TSortBy } from '../Sorter/TSortBy';
export type TCatalog = {
	products: TProductDto[];
	pagination: number | undefined;
	count: number;
	total: number;
	onPressPagination: (value: number) => void;
	// onChangeSort: (value: TSortBy) => void;
};
