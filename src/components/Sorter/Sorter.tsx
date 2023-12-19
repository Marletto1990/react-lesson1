import { Button, ButtonGroup, Toolbar } from '@mui/material';
import { TSorterType } from './TSorterType';
import { TSortByType } from './TSortByType';
import { FC, useState } from 'react';

export const Sorter: FC<TSorterType> = ({ onPressSort }) => {
	const [sortBy, setSortBy] = useState<TSortByType>(undefined);
	return (
		<Toolbar sx={{ justifyContent: 'center' }}>
			<ButtonGroup
				fullWidth={true}
				variant='text'
				sx={{ justifyContent: 'stretch', width: '40%' }}>
				<Button
					onClick={() => {
						const sorter: TSortByType = 'price';
						onPressSort(sorter);
					}}
					variant={sortBy === 'name' ? 'outlined' : 'contained'}>
					Сначала дорогие
				</Button>
				<Button>Сначала дешевые</Button>
				<Button>По размеру скидки</Button>
			</ButtonGroup>
		</Toolbar>
	);
};
