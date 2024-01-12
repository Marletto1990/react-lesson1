import { INCREMENT, DECREMENT } from '../types/types';
const InitialState = {
	value: 3,
};

export const counterReducer = (state = InitialState, action) => {
	debugger;
	console.log(`state.value: ${state.value}`);
	console.log(`payload: ${action.payload}`);
	console.log(`type: ${action.type}`);
	switch (action.type) {
		case INCREMENT:
			return { ...state, value: state.value + action.payload };
		case DECREMENT:
			return { ...state, value: state.value - action.payload };
		default:
			return state;
	}
};
