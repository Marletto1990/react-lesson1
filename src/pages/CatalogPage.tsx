import { useState, FC } from 'react';

import { Catalog, Header } from '../components';
import { TSortBy } from '../components/Sorter';
import { withProtection } from '../HOCs/withProtection';
import { withQuery } from '../HOCs/withQuery';
import { useGetProductListQuery } from '../api/ProductsApi';

const CatalogWithQuery = withQuery(Catalog);

export const CatalogPage: FC = withProtection(() => {
	const MAX_CARD_ON_PAGE = 6;
	const [pagination, setPagination] = useState<number>(1);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [sortBy, setSortBy] = useState<TSortBy>('name');
	const [searchBy, setSearchBy] = useState<string>('');
	const { data, isLoading, isError } = useGetProductListQuery({
		page: pagination,
		limit: MAX_CARD_ON_PAGE,
		query: searchBy,
	});

	const onSearch = (value: string) => {
		setSearchBy(value);
	};

	const onSort = (value: TSortBy) => {
		setSortBy(value);
	};

	const onPageChange = (value: number) => {
		setPagination(value);
	};

	return (
		<>
			<Header busy={isLoading} onSearch={onSearch}></Header>
			<CatalogWithQuery
				isLoading={isLoading}
				isError={isError}
				pagination={pagination}
				count={Math.ceil(data?.total / MAX_CARD_ON_PAGE)}
				products={data?.products}
				onPressPagination={onPageChange}
				onChangeSort={onSort}
				total={data?.total}
			/>
		</>
	);
});
