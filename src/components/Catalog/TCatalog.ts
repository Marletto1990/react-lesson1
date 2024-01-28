import { TProductDto } from '../../model/model';
export type TCatalog = {
	isLoading: boolean;
	isError: boolean;
	products: TProductDto[];
	total: number;
};
