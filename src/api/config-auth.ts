import { fetchBaseQuery } from '@reduxjs/toolkit/query';
// import { RootState } from '../storage/types';
import { config } from './config';

export const customBaseQuery = fetchBaseQuery({
	baseUrl: 'https://api.react-learning.ru/v2/group-11', //process.env.API_URL
	prepareHeaders: (headers /*, { getState }*/) => {
		// const { accessToken } = (getState() as RootState).auth.accessaccessToken;
		const accessToken = config.apiToken;
		if (!!accessToken) {
			headers.set('authorization', `Bearer ${accessToken}`);
		}
		return headers;
	},
});
