import { combineReducers } from 'redux';
import { counterSlice } from './counter/counter-slice';
import { userSlice } from './user/user-slice';

export const rootReducer = combineReducers({
	counter: counterSlice.reducer,
	user: userSlice.reducer,
});
