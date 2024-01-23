import { combineReducers } from 'redux';
import { AuthApi } from '../api/AuthApi';
import { ProductsApi } from '../api/ProductsApi';
import { counterSlice } from './counter/counter-slice';
import { rootSlice } from './root/rootSlice';

export const rootReducer = combineReducers({
	[rootSlice.name]: rootSlice.reducer,
	[AuthApi.reducerPath]: AuthApi.reducer,
	[ProductsApi.reducerPath]: ProductsApi.reducer,
	counter: counterSlice.reducer, // redux example
});
