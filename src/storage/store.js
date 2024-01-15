import { rootReducer } from './reducers/rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import { api } from '../api';

const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: api,
			},
		}),
});
export { store };
