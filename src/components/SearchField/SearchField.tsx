import { InputBase } from '@mui/material';
import { TSearchFieldType } from './TSearchFieldType';
import { FC } from 'react';
export const SearchField: FC<TSearchFieldType> = ({ onSearch }) => {
	return (
		<>
			<InputBase
				onChange={(event) => {
					onSearch(event.target.value);
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
