import { rootReducer } from './reducers/rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import { api } from '../api';
import { AuthApi } from '../api/AuthApi';

const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: api,
			},
		}).concat(AuthApi.middleware),
});
export { store };
