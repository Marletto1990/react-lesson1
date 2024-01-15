import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { FC, useEffect } from 'react';
// import { api } from '../api';
import {
	CataloguePage,
	ProductPage,
	ProfilePage,
	NotFoundPage,
	FavoritesPage,
} from '../pages';
// import { TData } from '../data';
// import { TSortBy } from '../components/Sorter';
// import { useAppSelector } from '../storage/hooks';
// import { selectUser } from '../storage/reducers/user/selectors';
import { fetchUser } from '../storage/reducers/user/user-slice';
import { useAppDispatch } from '../storage/hooks';
import { fetchProducts } from '../storage/reducers/product/products-slice';

const App: FC = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchUser());
		dispatch(fetchProducts());
	}, [dispatch]);

	//const MAX_CARD_ON_PAGE = 6;
	//const [searchBy, setSearchBy] = useState<string>('');
	//const debounceSearchQuery = useDebounce(searchBy, 300);
	// const [userData, setUserData] = useState<TUser>({});
	// const [busy, setBusy] = useState<boolean>(true);
	// const [products, setProducts] = useState<TData['products']>([]);
	//const [count, setCount] = useState<number>(0);
	//const [total, setTotal] = useState<number>(0);

	// useEffect(() => {
	// 	api.getUserInfo().then((p) => {
	// 		setUserData(p);
	// 	});
	// }, []);

	// const callback: (options: {
	// 	sortBy: TSortBy;
	// 	pagination: number | undefined;
	// }) => void = ({ sortBy, pagination }) => {
	// 	// setBusy(true);
	// 	api.getProducts({
	// 		// query: debounceSearchQuery || undefined,
	// 		page: pagination,
	// 		limit: MAX_CARD_ON_PAGE,
	// 	}).then((data: TData) => {
	// 		// setCount(Math.ceil(data.total / MAX_CARD_ON_PAGE));
	// 		// setTotal(data.total);
	// 		let sortedData;
	// 		switch (sortBy) {
	// 			case 'name':
	// 				sortedData = data.products.sort((a, b) => {
	// 					return a[sortBy]
	// 						.toLowerCase()
	// 						.localeCompare(b[sortBy].toLowerCase());
	// 				});
	// 				break;
	// 			case 'discount':
	// 				sortedData = data.products.sort((a, b) => {
	// 					return b[sortBy] - a[sortBy];
	// 				});
	// 				break;
	// 			case 'price':
	// 				sortedData = data.products.sort((a, b) => {
	// 					return a[sortBy] - b[sortBy];
	// 				});
	// 				break;
	// 			default:
	// 				sortedData = data.products;
	// 		}
	// 		console.log(sortedData);
	// 		// setProducts(sortedData);
	// 		// setBusy(false);
	// 	});
	// };

	const router = createBrowserRouter([
		{
			path: '/',
			element: (
				<CataloguePage
					//count={count}
					//total={total}
					callback={() => {
						console.log('');
					}}
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
	return <RouterProvider router={router} />;
};

export default App;
