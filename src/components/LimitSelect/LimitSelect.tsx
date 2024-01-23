import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Toolbar,
	Typography,
} from '@mui/material';
import { FC, useState } from 'react';
import { TLimitSelect } from './TLimitSelect';

export const LimitSelect: FC<TLimitSelect> = ({ total }) => {
	const [limit, setLimit] = useState<number>(10);
	return (
		<Toolbar>
			<Typography variant='h5' component='h2'>
				Найдено товаров: {total}
			</Typography>
			<FormControl sx={{ ml: 'auto', width: 180 }}>
				<InputLabel id='helper-label'>Показывать по:</InputLabel>
				<Select
					labelId='helper-label'
					id='Select-helper'
					value={limit}
					defaultValue={limit}
					onChange={(event) => {
						setLimit(event.target.value as number);
					}}>
					<MenuItem value={limit}>10</MenuItem>
					<MenuItem value={20}>20</MenuItem>
					<MenuItem value={30}>30</MenuItem>
				</Select>
			</FormControl>
		</Toolbar>
	);
};
