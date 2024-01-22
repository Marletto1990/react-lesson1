import { fetchBaseQuery } from '@reduxjs/toolkit/query';

export const config = {
	apiUrl: 'https://api.react-learning.ru/v2/group-11',
	apiToken:
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNmYmFiZmFmMjA3YTRlZGJmODYwMTYiLCJncm91cCI6Imdyb3VwLTExIiwiaWF0IjoxNjk4NzU4MjEwLCJleHAiOjE3MzAyOTQyMTB9.coDSXmH4WhV2kgeM4J-GRqFsv1BMEndLP3-uo4eKyRk',
};

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
