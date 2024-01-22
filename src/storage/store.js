import { rootReducer } from './reducers/rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import { api } from '../api';
import { AuthApi } from '../api/AuthApi';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage,
	version: 1,
	// сетевые данные не сохраняем, добавить в исключения productsApi.reducerPath
	blacklist: [AuthApi.reducerPath],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: api,
			},
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}).concat(AuthApi.middleware),
});

export const persistor = persistStore(store);
export { store };
