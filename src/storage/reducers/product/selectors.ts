import { RootState } from '../../types';
import { sliceName } from './product-slice';

export const getProduct = (state: RootState) => state[sliceName].data;
export const getProductLoading = (state: RootState) => state[sliceName].loading;
