import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
import { api } from '../api';
import {
	CataloguePage,
	ProductPage,
	ProfilePage,
	NotFoundPage,
	FavoritesPage,
} from '../pages';
import { ProductsContext, UserContext, TUser } from '../context';
import { TData } from '../data';
import { TSortBy } from '../components/Sorter';
// import { useDebounce } from '../hooks/useDebouce';

const App: FC = () => {
	const MAX_CARD_ON_PAGE = 6;
	//const [searchBy, setSearchBy] = useState<string>('');
	//const debounceSearchQuery = useDebounce(searchBy, 300);
	const [userData, setUserData] = useState<TUser>({});
	const [busy, setBusy] = useState<boolean>(true);
	const [products, setProducts] = useState<TData['products']>([]);
	//const [count, setCount] = useState<number>(0);
	//const [total, setTotal] = useState<number>(0);

	useEffect(() => {
		api.getUserInfo().then((p) => {
			setUserData(p);
		});
	}, []);

	const callback: (options: {
		sortBy: TSortBy;
		pagination: number | undefined;
	}) => void = ({ sortBy, pagination }) => {
		setBusy(true);
		api.getProducts({
			// query: debounceSearchQuery || undefined,
			page: pagination,
			limit: MAX_CARD_ON_PAGE,
		}).then((data: TData) => {
			// setCount(Math.ceil(data.total / MAX_CARD_ON_PAGE));
			// setTotal(data.total);
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
			setProducts(sortedData);
			setBusy(false);
		});
	};

	const router = createBrowserRouter([
		{
			path: '/',
			element: (
				<CataloguePage
					//count={count}
					//total={total}
					callback={callback}
					//setSearchBy={setSearchBy}
				/>
			),
			errorElement: <NotFoundPage />,
		},
		{
			path: '/product/:id',
			element: <ProductPage />,
		},
		{
			path: '/profile',
			element: <ProfilePage />,
		},
		{
			path: '/favorites',
			element: <FavoritesPage />,
		},
	]);
	return (
		<UserContext.Provider value={{ user: userData }}>
			<ProductsContext.Provider value={{ products, busy }}>
				<RouterProvider router={router} />
			</ProductsContext.Provider>
		</UserContext.Provider>
	);
};

export default App;
