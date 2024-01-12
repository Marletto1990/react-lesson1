import { combineReducers } from 'redux';
import { counterReducer } from '../actions/counterActions';

export const rootReducer = combineReducers({
	counter: counterReducer,
});
