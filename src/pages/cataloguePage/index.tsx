import { useEffect, useState, useCallback } from 'react';

import { Catalogue, Header } from '../../components';
import { TData } from '../../data';
import { TSortBy } from '../../components/Sorter';
import { api } from '../../api';
import { useDebounce } from '../../hooks/useDebouce';

export function CataloguePage() {
	const MAX_CARD_ON_PAGE = 6;
	const [busy, setBusy] = useState<boolean>(true);
	const [items, setItems] = useState<TData['products']>([]);
	const [count, setCount] = useState<number>(0);
	const [pagination, setPagination] = useState<number>(1);
	const [sortBy, setSortBy] = useState<TSortBy>();
	const [searchBy, setSearchBy] = useState<string>('');
	const [total, setTotal] = useState<number>(0);
	const debounceSearchQuery = useDebounce(searchBy, 300);

	const handleRequest = useCallback(
		function handleRequest() {
			api.getProducts({ query: debounceSearchQuery || undefined }).then(
				(data: TData) => {
					setCount(
						Math.ceil(data.products.length / MAX_CARD_ON_PAGE)
					);
					setTotal(data.total);

					let sortedData;
					switch (sortBy) {
						case 'name':
							sortedData = data.products.sort(
								(a: any, b: any) => {
									return a[sortBy]
										.toLowerCase()
										.localeCompare(b[sortBy].toLowerCase());
								}
							);
							break;
						case 'discount':
							sortedData = data.products.sort(
								(a: any, b: any) => {
									return b[sortBy] - a[sortBy];
								}
							);
							break;
						case 'price':
							sortedData = data.products.sort(
								(a: any, b: any) => {
									return a[sortBy] - b[sortBy];
								}
							);
							break;

						default:
							sortedData = data.products;
					}
					const lastIndexOfProduct: number =
						MAX_CARD_ON_PAGE * pagination;
					const currentPageData: TData['products'] =
						sortedData.filter(
							(p: any, i: any) =>
								lastIndexOfProduct - MAX_CARD_ON_PAGE - 1 < i &&
								i < lastIndexOfProduct
						);

					setItems(currentPageData);
					setBusy(false);
				}
			);
		},
		[pagination, sortBy, debounceSearchQuery]
	);

	useEffect(() => {
		handleRequest();
	}, [debounceSearchQuery, handleRequest]);

	return (
		<>
			<Header busy={false} onSearch={setSearchBy}></Header>
			<Catalogue
				busy={busy}
				count={count}
				products={items}
				pagination={pagination}
				onPressPagination={setPagination}
				onChangeSort={setSortBy}
				total={total}
			/>
		</>
	);
}
