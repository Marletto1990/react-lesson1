import { useEffect, useState } from 'react';
import { Header } from '../components/Header/Header';
import { Body } from '../components/Body/Body';
import { Footer } from '../components/Footer/Footer';
import { TData, dataPromise } from '../data';
import { TSortBy } from '../components/Sorter/TSortBy';

const App = () => {
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
			// TODO сортировка
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
			<Header busy={busy} onSearch={setSearchBy} />
			<Body
				busy={busy}
				count={count}
				products={items}
				pagination={pagination}
				onPressPagination={setPagination}
				onChangeSort={setSortBy}
			/>
			<Footer />
		</>
	);
};

export default App;
