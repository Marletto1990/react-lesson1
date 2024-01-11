import { Button, ButtonGroup, Toolbar } from '@mui/material';
import { TSorter } from './TSorter';
import { TSortBy } from './TSortBy';
import { FC, useState } from 'react';

export const Sorter: FC<TSorter> = ({ onPressSort }) => {
	const [sortBy, setSortBy] = useState<TSortBy>();

	return (
		<Toolbar sx={{ justifyContent: 'center' }}>
			<ButtonGroup
				fullWidth={true}
				variant='text'
				sx={{ justifyContent: 'stretch', width: '40%' }}>
				<Button
					onClick={() => {
						const sorter: TSortBy = 'price';
						setSortBy(sorter);
						onPressSort(sorter);
					}}
					variant={sortBy === 'price' ? 'contained' : 'text'}>
					По цене
				</Button>
				<Button
					onClick={() => {
						const sorter: TSortBy = 'name';
						setSortBy(sorter);
						onPressSort(sorter);
					}}
					variant={sortBy === 'name' ? 'contained' : 'text'}>
					По имени
				</Button>
				<Button
					onClick={() => {
						const sorter: TSortBy = 'discount';
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
