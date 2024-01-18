import { SerializedError, createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
import { createAppAsyncThunk } from '../../hooks';
import { TProductDto } from '../../../api/Api';

type TProductsState = {
	data: TProductDto;
	loading: boolean;
	error: SerializedError | null | unknown;
};

const initialState: TProductsState = {
	data: {
		_id: '',
		name: '',
		price: 0,
		discount: 0,
		wight: '',
		description: '',
		isFavorite: false,
		isCart: false,
		available: false,
		stock: 0,
		pictures: '',
	},
	loading: false,
	error: null,
};

export const sliceName = 'product';

// Получение данных о продукте
export const getProduct = createAppAsyncThunk<TProductDto, string>(
	`${sliceName}/getProduct`,
	async function (
		productId,
		{ fulfillWithValue, rejectWithValue, extra: api }
	) {
		const data = await api.getProduct(productId);
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

// Создание отзыва
export const addReview = createAppAsyncThunk<TProductDto, string>(
	`${sliceName}/addReview`,
	async function (
		productId,
		{ fulfillWithValue, rejectWithValue, extra: api }
	) {
		const data = await api.getProduct(productId);
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

export const productSlice = createSlice({
	name: sliceName,
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getProduct.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getProduct.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(getProduct.fulfilled, (state, action) => {
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
