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

const App: FC = () => {
	const [userData, setUserData] = useState<TUser | null>(null);
	const [busy, setBusy] = useState<boolean>(true);
	const [products, setProducts] = useState<TData['products']>([]);

	useEffect(() => {
		api.getUserInfo().then((p) => {
			setUserData(p);
		});

		api.getProducts().then((p) => {
			setProducts(p);
			setBusy(false);
		});
	}, []);

	const router = createBrowserRouter([
		{
			path: '/',
			element: <CataloguePage />,
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
		<UserContext.Provider value={{ userData }}>
			<ProductsContext.Provider value={(products, busy)}>
				<RouterProvider router={router} />
			</ProductsContext.Provider>
		</UserContext.Provider>
	);
};

export default App;
