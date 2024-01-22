import { useState, FC } from 'react';

import { Catalog, Header } from '../components';
import { TSortBy } from '../components/Sorter';

import { useAppDispatch, useAppSelector } from '../storage/hooks';
import { searchProducts } from '../storage/reducers/products/products-slice';
import {
	selectProducts,
	selectProductsLoading,
} from '../storage/reducers/products/selectors';
import { withProtection } from '../HOCs/withProtection';
import { withQuery } from '../HOCs/withQuery';

const CatalogWithQuery = withQuery(Catalog);

export const CatalogPage: FC = withProtection(() => {
	const MAX_CARD_ON_PAGE = 6;
	const dispatch = useAppDispatch();
	const [pagination, setPagination] = useState<number>(1);
	const [sortBy, setSortBy] = useState<TSortBy>('name');
	const [searchBy, setSearchBy] = useState<string>('');
	const productsData = useAppSelector(selectProducts);
	const busy = useAppSelector(selectProductsLoading);

	const onSearch = (value: string) => {
		setSearchBy(value);
		dispatch(
			searchProducts({
				query: value,
				sortBy: sortBy,
				page: 1,
				limit: MAX_CARD_ON_PAGE,
			})
		);
	};

	const onSort = (value: TSortBy) => {
		setSortBy(value);
		dispatch(
			searchProducts({
				query: searchBy,
				sortBy: value,
				page: pagination,
				limit: MAX_CARD_ON_PAGE,
			})
		);
	};

	const onPageChange = (value: number) => {
		setPagination(value);
		dispatch(
			searchProducts({
				query: searchBy,
				sortBy: sortBy,
				page: value,
				limit: MAX_CARD_ON_PAGE,
			})
		);
	};

	return (
		<>
			<Header busy={busy} onSearch={onSearch}></Header>
			<CatalogWithQuery
				isLoading={false}
				isError={false}
				pagination={pagination}
				busy={busy}
				count={Math.ceil(productsData.total / MAX_CARD_ON_PAGE)}
				products={productsData.products}
				onPressPagination={onPageChange}
				onChangeSort={onSort}
				total={productsData.total}
			/>
		</>
	);
});
