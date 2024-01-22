import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TUserDto } from '../../../model/model';

type TRootState = {
	user: TUserDto | null;
	accessToken: string;
};

const initialState: TRootState = {
	user: null,
	accessToken: '',
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
		setToken(state, action: PayloadAction<TRootState['accessToken']>) {
			state.accessToken = action.payload;
		},
	},
});

export const { setUser, setToken } = rootSlice.actions;
