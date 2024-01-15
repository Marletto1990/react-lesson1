import { useEffect, useState, FC } from 'react';

import { Catalogue, Header } from '../components';
import { TSortBy } from '../components/Sorter';

import { useAppSelector } from '../storage/hooks';
import {
	selectProducts,
	selectProductsLoading,
	selectSearchValue,
} from '../storage/reducers/products/selectors';

type TCataloguePageProps = {
	callback: (options: {
		sortBy: TSortBy;
		pagination: number | undefined;
	}) => void;
};

export const CataloguePage: FC<TCataloguePageProps> = ({ callback }) => {
	const [sortBy, setSortBy] = useState<TSortBy>('name');
	const [pagination, setPagination] = useState<number | undefined>(undefined);
	const productsData = useAppSelector(selectProducts);
	const products =
		productsData && productsData.products ? productsData.products : [];
	const busy = useAppSelector(selectProductsLoading);
	const searchValue = useAppSelector(selectSearchValue);
	const searchedProducts = products.filter(
		(p) =>
			!searchValue ||
			p.name.toLowerCase().includes(searchValue.toLowerCase())
	);

	// TODO: remove code from previos lesson
	useEffect(
		() =>
			callback({
				sortBy,
				pagination,
			}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[sortBy, pagination]
	);

	return (
		<>
			<Header busy={busy}></Header>
			<Catalogue
				pagination={pagination}
				busy={busy}
				count={5}
				products={searchedProducts}
				onPressPagination={setPagination}
				onChangeSort={setSortBy}
				total={12}
			/>
		</>
	);
};
