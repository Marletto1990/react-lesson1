import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { FC, useEffect } from 'react';
import {
	CataloguePage,
	ProductPage,
	ProfilePage,
	NotFoundPage,
	FavoritesPage,
} from '../pages';
import { fetchUser } from '../storage/reducers/user/user-slice';
import { useAppDispatch } from '../storage/hooks';
import { searchProducts } from '../storage/reducers/products/products-slice';

const App: FC = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchUser());
		dispatch(
			searchProducts({ page: 1, limit: 6, query: '', sortBy: 'name' })
		);
	}, [dispatch]);

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
	return <RouterProvider router={router} />;
};

export default App;
