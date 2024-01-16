import { RootState } from '../../types';
import { sliceName } from './products-slice';

export const selectProducts = (state: RootState) => state[sliceName].data;
export const selectProductsLoading = (state: RootState) =>
	state[sliceName].loading;
export const selectSearchValue = (state: RootState) =>
	state[sliceName].searchValue;
