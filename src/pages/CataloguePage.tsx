import { useState, FC } from 'react';

import { Catalogue, Header } from '../components';
import { TSortBy } from '../components/Sorter';

import { useAppDispatch, useAppSelector } from '../storage/hooks';
import { searchProducts } from '../storage/reducers/products/products-slice';
import {
	selectProducts,
	selectProductsLoading,
	selectSearchValue,
} from '../storage/reducers/products/selectors';

// import { TProductsDto } from '../api/Api';

type TCataloguePageProps = {
	// TODO: прокинуть user
	// callback: (options: {
	// 	sortBy: TSortBy;
	// 	pagination: number | undefined;
	// }) => void;
	// onSearch: () => void;
};

export const CataloguePage: FC<TCataloguePageProps> = () => {
	const MAX_CARD_ON_PAGE = 6;
	const dispatch = useAppDispatch();
	const [pagination, setPagination] = useState<number | undefined>(undefined);
	const [count, setCount] = useState<number>(0);
	const [total, setTotal] = useState<number>(0);
	const [sortBy, setSortBy] = useState<TSortBy>('name');
	const productsData = useAppSelector(selectProducts);
	const products =
		productsData && productsData.products ? productsData.products : [];
	const busy = useAppSelector(selectProductsLoading);

	const onSearch = (value: string) => {
		dispatch(
			searchProducts({
				query: value,
				limit: MAX_CARD_ON_PAGE,
				sortBy: sortBy,
			})
		);
	};

	// TODO: pagination & sorting
	// useEffect(() => {

	// }, [sortBy, pagination]);

	const searchValue = useAppSelector(selectSearchValue);
	const searchedAndSortedProducts = products.filter(
		(p) =>
			!searchValue ||
			p.name.toLowerCase().includes(searchValue.toLowerCase())
	);

	setCount(Math.ceil(searchedAndSortedProducts.length / MAX_CARD_ON_PAGE));
	setTotal(searchedAndSortedProducts.length);

	return (
		<>
			<Header busy={busy} onSearch={onSearch}></Header>
			<Catalogue
				pagination={pagination}
				busy={busy}
				count={count}
				products={searchedAndSortedProducts}
				onPressPagination={setPagination}
				onChangeSort={setSortBy}
				total={total}
			/>
		</>
	);
};
