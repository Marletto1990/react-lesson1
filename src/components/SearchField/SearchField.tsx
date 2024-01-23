import { InputBase } from '@mui/material';
import { FC } from 'react';

type TSearchField = {
	onSearch: (value: string) => void;
};
export const SearchField: FC<TSearchField> = ({ onSearch }) => {
	return (
		<>
			<InputBase
				onChange={(event) => onSearch(event.target.value)}
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
