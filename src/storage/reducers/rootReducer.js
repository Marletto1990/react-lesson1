import { combineReducers } from 'redux';
import { counterSlice } from './counter/counter-slice';
import { userSlice } from './user/user-slice';
import { productsSlice } from './products/products-slice';
import { productSlice } from './product/product-slice';
import { AuthApi } from '../../api/AuthApi';
import { authSlice } from './auth/authSlice';

export const rootReducer = combineReducers({
	[AuthApi.reducerPath]: AuthApi.reducer,
	counter: counterSlice.reducer,
	auth: authSlice.reducer,
	user: userSlice.reducer,
	products: productsSlice.reducer,
	product: productSlice.reducer,
});
