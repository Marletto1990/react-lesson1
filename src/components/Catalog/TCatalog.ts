import { TProductDto } from '../../model/model';
export type TCatalog = {
	products: TProductDto[];
	pagination: number | undefined;
	count: number;
	total: number;
	limit: number;
	onPressPagination: (value: number) => void;
	onLimitChange: (value: number) => void;
};
