import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
	name: 'counterReducer',
	initialState: { value: 0 },
	reducers: {
		incrementAction: (state, action) => {
			state.value = state.value + action.payload;
		},
		decrementAction: (state, action) => {
			state.value = state.value - action.payload;
		},
	},
});

export const { incrementAction, decrementAction } = counterSlice.actions;
