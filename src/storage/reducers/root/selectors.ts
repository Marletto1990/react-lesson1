import { RootState } from '../../types';
import { sliceName } from './rootSlice';

export const setUser = (state: RootState) => state[sliceName].user;
export const setToken = (state: RootState) => state[sliceName].accessToken;
export const getShopCartOpen = (state: RootState) =>
	state[sliceName].shopCartOpen;
