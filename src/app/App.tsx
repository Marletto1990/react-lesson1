import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { FC, useEffect } from 'react';
import {
	CatalogPage,
	ProductPage,
	ProfilePage,
	NotFoundPage,
	FavoritesPage,
} from '../pages';
// import { fetchUser } from '../storage/reducers/user/user-slice';
import { useAppDispatch } from '../storage/hooks';
import { searchProducts } from '../storage/reducers/products/products-slice';
import { SignUpPage } from '../pages/SignUpPage';
import { SignInPage } from '../pages/SignInPage';

const App: FC = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		// dispatch(fetchUser());
		dispatch(
			searchProducts({ page: 1, limit: 6, query: '', sortBy: 'name' })
		);
	}, [dispatch]);

	const router = createBrowserRouter([
		{
			path: '/',
			element: <CatalogPage />,
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
		{
			path: '/signup',
			element: <SignUpPage />,
		},
		{
			path: '/signin',
			element: <SignInPage />,
		},
	]);
	return <RouterProvider router={router} />;
};

export default App;
