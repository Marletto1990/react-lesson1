import { SerializedError, createSlice } from '@reduxjs/toolkit';
import { createAppAsyncThunk } from '../../hooks';
import { TUserUpdateDto, TUserDto } from '../../../api/Api';

// import {
// 	isActionPending,
// 	isActionFulfilled,
// 	isActionRejected,
// } from '../../../api';

type TUserState = {
	data: TUserDto | null;
	loading: boolean;
	error: SerializedError | null | unknown;
};

const initialState: TUserState = {
	data: null,
	loading: false,
	error: null,
};

export const sliceName = 'user';

export const fetchEditedUser = createAppAsyncThunk<TUserDto, TUserUpdateDto>(
	`${sliceName}/fetchEditedUser`,
	async function (
		dataUser,
		{ fulfillWithValue, rejectWithValue, extra: api }
	) {
		try {
			const data = await api.setUserInfo(dataUser);
			if (data.name) {
				return fulfillWithValue(data);
			}
			return rejectWithValue(data);
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const fetchUser = createAppAsyncThunk<TUserDto>(
	`${sliceName}/fetchUser`,
	async function (_, { fulfillWithValue, rejectWithValue, extra: api }) {
		try {
			const data = await api.getUserInfo();
			return fulfillWithValue(data);
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const userSlice = createSlice({
	name: sliceName,
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUser.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchUser.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(fetchUser.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(fetchEditedUser.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchEditedUser.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(fetchEditedUser.fulfilled, (state, action) => {
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
