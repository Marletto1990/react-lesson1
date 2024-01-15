import { InputBase } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useAppDispatch } from '../../storage/hooks';
import { searchProducts } from '../../storage/reducers/products/products-slice';
import { useDebounce } from '../../hooks/useDebouce';

export const SearchField: FC = () => {
	const [query, setQuery] = useState('');
	const debounceQuerqy = useDebounce(
		{ limit: 2, query: query, page: 1 },
		1500
	);
	const dispatch = useAppDispatch();

	useEffect(() => {
		// TODO: разобраться почему вызов в цикле
		dispatch(searchProducts(debounceQuerqy));
	}, [debounceQuerqy]);

	return (
		<>
			<InputBase
				onChange={(event) => {
					setQuery(event.target.value);
				}}
				sx={{
					background: 'white',
					width: 400,
					p: 1,
					borderRadius: '8px',
				}}
			/>
		</>
	);
};
