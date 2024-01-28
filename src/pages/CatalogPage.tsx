import { useState, FC, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Catalog, Header } from '../components';
import { withQuery } from '../HOCs/withQuery';
import { useGetProductListQuery } from '../storage/api/ProductsApi';
import { getSearchQuery } from '../storage/reducers/root/selectors';
import { useDebounce } from '../hooks/useDebouce';
import { LoadMore } from '../components/shared/LoadMore';

const CatalogWithQuery = withQuery(Catalog);

export const CatalogPage: FC = () => {
	const limit = 12;
	const [page, setPage] = useState<number>(1);
	const searchQuery = useSelector(getSearchQuery);
	const debounceQuery = useDebounce<string>(searchQuery);
	const { data, isLoading, isError, isFetching } = useGetProductListQuery({
		page: page,
		limit: limit,
		query: searchQuery,
	});
	const isEndOfList = data && data.products.length >= data.total;

	const loadMore = useCallback(() => {
		setPage((prev) => prev + 1);
	}, [isEndOfList]);

	useEffect(() => {
		setPage(1);
	}, [debounceQuery]);

	return (
		<>
			<Header />
			<CatalogWithQuery
				isLoading={isLoading}
				isError={isError}
				products={data?.products}
				total={data?.total}
			/>
			<LoadMore
				action={loadMore}
				isEndOfList={isEndOfList}
				isLoading={isFetching}
			/>
		</>
	);
};
