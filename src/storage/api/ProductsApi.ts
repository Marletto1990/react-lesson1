import { createApi } from '@reduxjs/toolkit/query/react';
import { customBaseQuery } from './config';
// import { TProductDto } from './Api';

export const ProductsApi = createApi({
	reducerPath: 'ProductsApi',
	baseQuery: customBaseQuery,
	endpoints: (builder) => ({
		getProductList: builder.query({
			query: ({ query, limit, page }) => ({
				url: '/products',
				params: {
					query,
					limit,
					page,
				},
			}),
		}),
	}),
});

export const { useGetProductListQuery } = ProductsApi;
