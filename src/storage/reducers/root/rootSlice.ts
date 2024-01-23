import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TUserDto } from '../../../model/model';

type TRootState = {
	user: TUserDto | null;
	accessToken: string;
	shopCartOpen: boolean;
};

const initialState: TRootState = {
	user: null,
	accessToken: '',
	shopCartOpen: false,
};

export const sliceName = 'rootSlice';

export const rootSlice = createSlice({
	name: sliceName,
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<TUserDto>) {
			state.user = action.payload;
			return state;
		},
		clearUser(state) {
			state.accessToken = '';
			return state;
		},
		setToken(state, action: PayloadAction<TRootState['accessToken']>) {
			state.accessToken = action.payload;
		},
		setShopCartOpen(state, action: PayloadAction<boolean>) {
			state.shopCartOpen = action.payload;
		},
	},
});

export const { setUser, setToken, clearUser, setShopCartOpen } =
	rootSlice.actions;
