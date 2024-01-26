import { useState, FC } from 'react';

import { Catalog, Header } from '../components';
import { withQuery } from '../HOCs/withQuery';
import { useGetProductListQuery } from '../storage/api/ProductsApi';
import { useSelector } from 'react-redux';
import { getSearchQuery } from '../storage/reducers/root/selectors';

const CatalogWithQuery = withQuery(Catalog);

export const CatalogPage: FC = () => {
	const [limit, setLimit] = useState<number>(10);
	const [pagination, setPagination] = useState<number>(1);
	const searchQuery = useSelector(getSearchQuery);
	const { data, isLoading, isError } = useGetProductListQuery({
		page: pagination,
		limit: limit,
		query: searchQuery,
	});

	const onPageChange = (value: number) => {
		setPagination(value);
	};

	const onLimitChange = (value: number) => {
		setLimit(value);
	};

	return (
		<>
			<Header />
			<CatalogWithQuery
				isLoading={isLoading}
				isError={isError}
				pagination={pagination}
				count={Math.ceil(data?.total / limit)}
				products={data?.products}
				onPressPagination={onPageChange}
				total={data?.total}
				limit={limit}
				onLimitChange={onLimitChange}
			/>
		</>
	);
};
