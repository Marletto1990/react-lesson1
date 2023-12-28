import { useEffect, useState } from 'react';

import { Catalogue, Header } from '../../components';
import { TData } from '../../data';
import { TSortBy } from '../../components/Sorter';
import { api } from '../../api';

export function CataloguePage() {
	const MAX_CARD_ON_PAGE = 6;
	const [busy, setBusy] = useState<boolean>(true);
	const [items, setItems] = useState<TData[]>([]);
	const [count, setCount] = useState<number>(0);
	const [pagination, setPagination] = useState<number>(1);
	const [sortBy, setSortBy] = useState<TSortBy>();
	const [searchBy, setSearchBy] = useState<string>('');

	useEffect(() => {
		api.getProducts().then((data) => {
			const searchedData = data.products.filter((product: TData) =>
				product.name.includes(searchBy.toLowerCase())
			);

			setCount(Math.ceil(searchedData.length / MAX_CARD_ON_PAGE));

			let sortedData;
			switch (sortBy) {
				case 'name':
					sortedData = searchedData.sort((a: any, b: any) => {
						return a[sortBy]
							.toLowerCase()
							.localeCompare(b[sortBy].toLowerCase());
					});
					break;
				case 'discount':
					sortedData = searchedData.sort((a: any, b: any) => {
						return b[sortBy] - a[sortBy];
					});
					break;
				case 'price':
					sortedData = searchedData.sort((a: any, b: any) => {
						return a[sortBy] - b[sortBy];
					});
					break;

				default:
					sortedData = searchedData;
			}
			const lastIndexOfProduct: number = MAX_CARD_ON_PAGE * pagination;
			const currentPageData: TData[] = sortedData.filter(
				(p: number, i: number) =>
					lastIndexOfProduct - MAX_CARD_ON_PAGE - 1 < i &&
					i < lastIndexOfProduct
			);

			setItems(currentPageData);
			setBusy(false);
		});
	}, [pagination, sortBy, searchBy]);

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
			/>
		</>
	);
}
