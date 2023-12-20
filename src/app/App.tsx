import { useEffect, useState } from 'react';
import { Header } from '../components/Header/Header';
import { Body } from '../components/Body/Body';
import { Footer } from '../components/Footer/Footer';
import { TData, dataPromise } from '../data';
import { TSortByType } from '../components/Sorter/TSortByType';

const App = () => {
	const MAX_CARD_ON_PAGE = 6;
	const [busy, setBusy] = useState<boolean>(true);
	const [items, setItems] = useState<TData[]>([]);
	const [count, setCount] = useState<number>(0);
	const [pagination, setPagination] = useState<number>(1);
	const [sortBy, setSortBy] = useState<TSortByType>();

	useEffect(() => {
		dataPromise.then((data) => {
			setCount(Math.ceil(data.length / MAX_CARD_ON_PAGE));

			let sortedData;
			switch (sortBy) {
				case 'name':
					sortedData = data.sort((a, b) => {
						return a[sortBy].toLowerCase().localeCompare(b[sortBy].toLowerCase());
					});
					break;
				case 'discount':
					sortedData = data.sort((a, b) => {
						return b[sortBy] - a[sortBy];
					});
					break;
				case 'price':
					sortedData = data.sort((a, b) => {
						return a[sortBy] - b[sortBy];
					});
					break;

				default:
					sortedData = data;
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
	}, [pagination, sortBy]);

	return (
		<>
			<Header />
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

