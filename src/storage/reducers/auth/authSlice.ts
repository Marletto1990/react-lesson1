import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TAuthState = {
	token: string;
};

const initialState: TAuthState = {
	token: '',
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setToken(state, action: PayloadAction<string>) {
			state.token = action.payload;
		},
		clearToken(state) {
			state.token = '';
		},
	},
});

export { authSlice };
export const { setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;
