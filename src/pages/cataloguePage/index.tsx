import { Catalogue, Header } from '../../components';
import { useEffect, useState } from 'react';
import { TData, dataPromise } from '../../data';
import { TSortBy } from '../../components/Sorter';

export function CataloguePage() {
	const MAX_CARD_ON_PAGE = 6;
	const [busy, setBusy] = useState<boolean>(true);
	const [items, setItems] = useState<TData[]>([]);
	const [count, setCount] = useState<number>(0);
	const [pagination, setPagination] = useState<number>(1);
	const [sortBy, setSortBy] = useState<TSortBy>();
	const [searchBy, setSearchBy] = useState<string>('');

	useEffect(() => {
		dataPromise.then((data) => {
			const searchedData = data.filter((product) =>
				product.name.includes(searchBy.toLowerCase())
			);

			setCount(Math.ceil(searchedData.length / MAX_CARD_ON_PAGE));

			let sortedData;
			switch (sortBy) {
				case 'name':
					sortedData = searchedData.sort((a, b) => {
						return a[sortBy]
							.toLowerCase()
							.localeCompare(b[sortBy].toLowerCase());
					});
					break;
				case 'discount':
					sortedData = searchedData.sort((a, b) => {
						return b[sortBy] - a[sortBy];
					});
					break;
				case 'price':
					sortedData = searchedData.sort((a, b) => {
						return a[sortBy] - b[sortBy];
					});
					break;

				default:
					sortedData = searchedData;
			}
			const lastIndexOfProduct: number = MAX_CARD_ON_PAGE * pagination;
			const currentPageData: TData[] = sortedData.filter(
				(p, i) =>
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
