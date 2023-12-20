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
		debugger;
		dataPromise.then((data) => {
			debugger;
			setCount(Math.ceil(data.length / MAX_CARD_ON_PAGE));
			const sortedData = sortBy
				? data.sort((a, b) => {
						const a1 = a[sortBy];
						const b1 = b[sortBy];

						if (typeof a1 === 'number' && typeof b1 === 'number') {
							return b1 - a1;
						}

						return 0;
				  })
				: data;
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
