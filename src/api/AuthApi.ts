import { createApi } from '@reduxjs/toolkit/query/react';
import { customBaseQuery } from './config-auth';

export const AuthApi = createApi({
	reducerPath: 'AuthApi',
	baseQuery: customBaseQuery,
	endpoints: (builder) => ({
		signUp: builder.mutation({
			query: (data) => ({
				url: 'signup',
				method: 'POST',
				body: data,
			}),
		}),
		signIn: builder.mutation({
			query: (data) => ({
				url: 'signin',
				method: 'POST',
				body: data,
			}),
		}),
	}),
});

export const { useSignUpMutation, useSignInMutation } = AuthApi;
