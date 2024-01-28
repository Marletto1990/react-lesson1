import { createApi } from '@reduxjs/toolkit/query/react';
import { customBaseQuery } from './config';
import { TProductBEDto } from '../../model/model';

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
			serializeQueryArgs: ({ endpointName, queryArgs: { query } }) => {
				return endpointName + query;
			},
			merge: (currentCache, newValue, { arg: { page } }) => {
				if (page === 1) return;
				currentCache.products.push(...newValue.products);
			},
			forceRefetch({ currentArg, previousArg }) {
				return currentArg !== previousArg;
			},
		}),
		getProduct: builder.query<TProductBEDto, string | undefined>({
			query: (productId) => ({
				url: `/products/${productId}`,
			}),
		}),
	}),
});

export const { useGetProductListQuery, useGetProductQuery } = ProductsApi;
