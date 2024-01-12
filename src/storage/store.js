import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware()
		// other store enhancers if any
	)
);
export { store };
