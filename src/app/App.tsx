import {
	Routes,
	Route,
	// createBrowserRouter,
	// RouterProvider,
	BrowserRouter,
} from 'react-router-dom';

import {
	CataloguePage,
	ProductPage,
	ProfilePage,
	NotFoundPage,
} from '../pages';

const App = () => {
	// const router = createBrowserRouter([
	// 	{
	// 		path: '/',
	// 		element: <MainPage />,
	// 		errorElement: <NotFoundPage />,
	// 	},
	// 	{
	// 		path: '/product/:id',
	// 		element: <DetailPage />,
	// 	},
	// 	{
	// 		path: '/profile',
	// 		element: <ProfilePage />,
	// 	},
	// 	{
	// 		path: '/favorites',
	// 		element: <FavoritesPage />,
	// 	},
	// ]);
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<CataloguePage />} />
				<Route path='/product/:id' element={<ProductPage />} />
				<Route path='/profile' element={<ProfilePage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
