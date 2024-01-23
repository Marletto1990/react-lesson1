import { createApi } from '@reduxjs/toolkit/query/react';
import { customBaseQuery } from './config';
import { TUserDto } from '../../model/model';
import { ISignUpFormValues } from '../../components/forms/SignUpForm/helpers/ISignUpFormValues';
import { ISignInFormValues } from '../../components/forms/SignInForm/helpers/ISignInFormValues';

interface ISingUpResponse {
	_id: string;
}

interface ISignInResponse {
	data: TUserDto;
	token: string;
}

export const AuthApi = createApi({
	reducerPath: 'AuthApi',
	baseQuery: customBaseQuery,
	endpoints: (builder) => ({
		signUp: builder.mutation<ISingUpResponse, ISignUpFormValues>({
			query: (data) => ({
				url: 'signup',
				method: 'POST',
				body: data,
			}),
		}),
		signIn: builder.mutation<ISignInResponse, ISignInFormValues>({
			query: (data) => ({
				url: 'signin',
				method: 'POST',
				body: data,
			}),
			// transformResponse: (response: ISignInResponse) => {
			// функция для мутирования ответа сервера под удобную нам структуру
			// },
		}),
	}),
});

export const { useSignUpMutation, useSignInMutation } = AuthApi;
