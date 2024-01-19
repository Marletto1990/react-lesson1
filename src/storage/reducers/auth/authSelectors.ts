import { RootState } from '../../types';
import { authSlice } from './authSlice';

export const selectToken = (state: RootState): string =>
	state[authSlice.name].token;
