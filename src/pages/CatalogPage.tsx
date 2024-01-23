import { useState, FC } from 'react';

import { Catalog, Header } from '../components';
import { withQuery } from '../HOCs/withQuery';
import { useGetProductListQuery } from '../storage/api/ProductsApi';

const CatalogWithQuery = withQuery(Catalog);

export const CatalogPage: FC = () => {
	const [limit, setLimit] = useState<number>(10);
	const [pagination, setPagination] = useState<number>(1);
	const [searchBy, setSearchBy] = useState<string>('');
	const { data, isLoading, isError } = useGetProductListQuery({
		page: pagination,
		limit: limit,
		query: searchBy,
	});

	const onSearch = (value: string) => {
		setSearchBy(value);
	};

	const onPageChange = (value: number) => {
		setPagination(value);
	};

	const onLimitChange = (value: number) => {
		setLimit(value);
	};

	return (
		<>
			<Header busy={isLoading} onSearch={onSearch}></Header>
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
