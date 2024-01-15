import { SerializedError, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createAppAsyncThunk } from '../../hooks';
import { TProductsDto } from '../../../api/Api';

type TProductsState = {
	data: TProductsDto;
	loading: boolean;
	error: SerializedError | null | unknown;
	searchValue: string;
};

const initialState: TProductsState = {
	data: { products: [], total: 0 },
	loading: false,
	error: null,
	searchValue: '',
};

export const sliceName = 'products';

export const fetchProducts = createAppAsyncThunk<TProductsDto>(
	`${sliceName}/products`,
	async function (_, { fulfillWithValue, rejectWithValue, extra: api }) {
		const data = await api.getProducts();
		try {
			if (data && data.products) {
				return fulfillWithValue(data);
			} else {
				return rejectWithValue(data);
			}
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const searchProducts = createAppAsyncThunk<
	TProductsDto,
	{ page: number; limit: number; query: string }
>(
	`${sliceName}/products`,
	async function (query, { fulfillWithValue, rejectWithValue, extra: api }) {
		const data = await api.getProducts(query);
		try {
			if (data && data.products) {
				return fulfillWithValue(data);
			} else {
				return rejectWithValue(data);
			}
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const productsSlice = createSlice({
	name: sliceName,
	initialState,
	reducers: {
		setSearchValue: (state, action: PayloadAction<string>) => {
			state.searchValue = action.payload;
		},
	},
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
