import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { FC } from 'react';
import {
	CatalogPage,
	ProductPage,
	ProfilePage,
	NotFoundPage,
	FavoritesPage,
} from '../pages';
import { SignUpPage } from '../pages/SignUpPage';
import { SignInPage } from '../pages/SignInPage';

const App: FC = () => {
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
