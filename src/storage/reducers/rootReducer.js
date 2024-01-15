import { combineReducers } from 'redux';
import { counterSlice } from './counter/counter-slice';
import { userSlice } from './user/user-slice';
import { productsSlice } from './product/products-slice';

export const rootReducer = combineReducers({
	counter: counterSlice.reducer,
	user: userSlice.reducer,
	products: productsSlice.reducer,
});
