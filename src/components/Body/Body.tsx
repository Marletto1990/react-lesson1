import { ChangeEvent, FC, useEffect, useState } from 'react';
import { TBodyType } from './TBodyType';
import {
	Box,
	Container,
	CircularProgress,
	Stack,
	Pagination,
	Grid,
	Toolbar,
} from '@mui/material';
import { Sorter } from '../Sorter/Sorter';
import { ProductCard } from '../ProductCard/ProductCard';

export const Body: FC<TBodyType> = ({
	busy,
	products,
	count,
	pagination,
	onPressPagination,
}) => {
	// TODO пагинация
	useEffect(() => {}, []);
	return (
		<>
			{busy ? (
				<Box position={'absolute'} sx={{ left: '50%', top: '50%' }}>
					<CircularProgress />
				</Box>
			) : (
				<Box sx={{ paddingTop: '7rem', paddingBottom: '10rem' }}>
					<Sorter />
					<Container maxWidth={'lg'}>
						<Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={3}>
							{products.map((item, i) => (
								<Grid item key={i}>
									<ProductCard
										picture={item.picture}
										price={item.price}
										name={item.name}
										discount={item.discount}
										wight={item.wight}
										available={item.available}
										description={item.description}
										isCart={item.isCart}
										isFavorite={item.isFavorite}
										stock={item.stock}></ProductCard>
								</Grid>
							))}
						</Grid>
					</Container>
					<Stack alignItems={'center'} sx={{ left: '40%', marginTop: '2rem' }}>
						<Pagination
							onChange={(event: any, value: number) => onPressPagination(value)}
							count={count}
							color='primary'
							size='large'
							siblingCount={2}
						/>
					</Stack>
				</Box>
			)}
		</>
	);
};
