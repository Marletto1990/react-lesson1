import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
	CataloguePage,
	ProductPage,
	ProfilePage,
	NotFoundPage,
	FavoritesPage,
} from '../pages';

const App = () => {
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
