import { useState, useEffect, FC } from 'react';

import { Catalogue, Header } from '../components';
import { TSortBy } from '../components/Sorter';

import { useAppDispatch, useAppSelector } from '../storage/hooks';
import { searchProducts } from '../storage/reducers/products/products-slice';
import {
	selectProducts,
	selectProductsLoading,
	selectSearchValue,
} from '../storage/reducers/products/selectors';
import { TProductDto } from '../api/Api';

export const CataloguePage: FC = () => {
	const MAX_CARD_ON_PAGE = 6;
	const dispatch = useAppDispatch();
	const [items, setItems] = useState<TProductDto[]>([]);
	const [pagination, setPagination] = useState<number>(1);
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

	const searchValue = useAppSelector(selectSearchValue);
	const searchedAndSortedProducts = products.filter(
		(p) =>
			!searchValue ||
			p.name.toLowerCase().includes(searchValue.toLowerCase())
	);

	// pagination & sorting
	useEffect(() => {
		const lastIndexOfProduct: number = MAX_CARD_ON_PAGE * pagination;
		const currentPageData: TProductDto[] = searchedAndSortedProducts.filter(
			(p, i) =>
				lastIndexOfProduct - MAX_CARD_ON_PAGE - 1 < i &&
				i < lastIndexOfProduct
		);
		setItems(currentPageData);
	}, [pagination, searchedAndSortedProducts]);

	useEffect(() => {
		setCount(
			Math.ceil(searchedAndSortedProducts.length / MAX_CARD_ON_PAGE)
		);
		setTotal(searchedAndSortedProducts.length);
	}, [searchedAndSortedProducts]);

	return (
		<>
			<Header busy={busy} onSearch={onSearch}></Header>
			<Catalogue
				pagination={pagination}
				busy={busy}
				count={count}
				products={items}
				onPressPagination={setPagination}
				onChangeSort={setSortBy}
				total={total}
			/>
		</>
	);
};
