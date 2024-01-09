import { useEffect, useState, useCallback, useContext } from 'react';

import { Catalogue, Header } from '../../components';
import { TData } from '../../data';
import { TSortBy } from '../../components/Sorter';
import { api } from '../../api';
import { useDebounce } from '../../hooks/useDebouce';
import {
	// TUserContext,
	// TUser,
	TProductsContext,
	ProductsContext,
} from '../../context';

export function CataloguePage() {
	const MAX_CARD_ON_PAGE = 6;
	const [count, setCount] = useState<number>(0);
	const [pagination, setPagination] = useState<number>(1);
	const [sortBy, setSortBy] = useState<TSortBy>();
	const [searchBy, setSearchBy] = useState<string>('');
	const [total, setTotal] = useState<number>(0);
	const debounceSearchQuery = useDebounce(searchBy, 300);
	const { busy, products } = useContext<TProductsContext>(ProductsContext);
	const [items, setItems] = useState<TData['products']>(products);

	const handleRequest = useCallback(
		function handleRequest() {
			api.getProducts({
				query: debounceSearchQuery || undefined,
				page: pagination,
				limit: MAX_CARD_ON_PAGE,
			}).then((data: TData) => {
				setCount(Math.ceil(data.total / MAX_CARD_ON_PAGE));
				setTotal(data.total);

				let sortedData;
				switch (sortBy) {
					case 'name':
						sortedData = data.products.sort((a, b) => {
							return a[sortBy]
								.toLowerCase()
								.localeCompare(b[sortBy].toLowerCase());
						});
						break;
					case 'discount':
						sortedData = data.products.sort((a, b) => {
							return b[sortBy] - a[sortBy];
						});
						break;
					case 'price':
						sortedData = data.products.sort((a, b) => {
							return a[sortBy] - b[sortBy];
						});
						break;

					default:
						sortedData = data.products;
				}

				setItems(sortedData);
			});
		},
		[pagination, sortBy, debounceSearchQuery]
	);

	useEffect(() => {
		handleRequest();
	}, [debounceSearchQuery, handleRequest]);

	return (
		<>
			<Header busy={busy} onSearch={setSearchBy}></Header>
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
