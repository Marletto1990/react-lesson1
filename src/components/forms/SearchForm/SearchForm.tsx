import { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../../../storage/hooks';
import { InputBase } from '@mui/material';
import { setSearchQuery } from '../../../storage/reducers/root/rootSlice';
import { useDebounce } from '../../../hooks/useDebouce';

export const SearchForm: FC = () => {
	const dispatch = useAppDispatch();
	const [searchParams, setSearchParams] = useSearchParams();

	const [query, setQuery] = useState(() => {
		return searchParams.get('query') ?? '';
	});
	const debouncedQuery = useDebounce(query, 500);

	useEffect(() => {
		if (debouncedQuery) {
			searchParams.set('query', debouncedQuery);
			dispatch(setSearchQuery(debouncedQuery));
		} else {
			searchParams.delete('query');
			dispatch(setSearchQuery(''));
		}
		setSearchParams(searchParams);
	}, [debouncedQuery, dispatch, searchParams, setSearchParams]);

	return (
		<InputBase
			value={query}
			onChange={(event) => setQuery(event.target.value)}
			sx={{
				background: 'white',
				width: 400,
				p: 1,
				borderRadius: '8px',
			}}
		/>
	);
};
