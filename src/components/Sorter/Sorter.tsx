import { Button, ButtonGroup, Toolbar } from '@mui/material';
import { TSorterType } from './TSorterType';
import { TSortByType } from './TSortByType';
import { FC, useState } from 'react';

export const Sorter: FC<TSorterType> = ({ onPressSort }) => {
	const [sortBy, setSortBy] = useState<TSortByType>();
	return (
		<Toolbar sx={{ justifyContent: 'center' }}>
			<ButtonGroup
				fullWidth={true}
				variant='text'
				sx={{ justifyContent: 'stretch', width: '40%' }}>
				<Button
					onClick={() => {
						const sorter: TSortByType = 'price';
						setSortBy(sorter);
						onPressSort(sorter);
					}}
					variant={sortBy === 'price' ? 'contained' : 'text'}>
					По цене
				</Button>
				<Button
					onClick={() => {
						const sorter: TSortByType = 'name';
						setSortBy(sorter);
						onPressSort(sorter);
					}}
					variant={sortBy === 'name' ? 'contained' : 'text'}>
					По имени
				</Button>
				<Button
					onClick={() => {
						const sorter: TSortByType = 'discount';
						setSortBy(sorter);
						onPressSort(sorter);
					}}
					variant={sortBy === 'discount' ? 'contained' : 'text'}>
					По размеру скидки
				</Button>
			</ButtonGroup>
		</Toolbar>
	);
};
