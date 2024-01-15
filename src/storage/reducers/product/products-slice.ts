import { SerializedError, createSlice } from '@reduxjs/toolkit';
import { createAppAsyncThunk } from '../../hooks';
import { TProductsDto } from '../../../api/Api';

type TProductsState = {
	data: TProductsDto | null;
	loading: boolean;
	error: SerializedError | null | unknown;
};

const initialState: TProductsState = {
	data: null,
	loading: false,
	error: null,
};

export const sliceName = 'products';

export const fetchProducts = createAppAsyncThunk<TProductsDto>(
	`${sliceName}/products`,
	async function (_, { fulfillWithValue, rejectWithValue, extra: api }) {
		try {
			const data = await api.getProducts();
			return fulfillWithValue(data);
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const productsSlice = createSlice({
	name: sliceName,
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			});

		// .addMatcher(isActionPending('user/'), (state) => {
		// 	state.loading = true;
		// 	state.error = null;
		// })
		// .addMatcher(isActionRejected('user/'), (state, action) => {
		// 	state.loading = true;
		// 	state.error = action.payload;
		// });
	},
});
