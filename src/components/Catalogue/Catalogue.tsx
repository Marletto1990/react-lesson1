import { FC } from 'react';
import { TCatalogue } from './TCatalogue';
import {
	Box,
	Container,
	CircularProgress,
	Pagination,
	Grid,
} from '@mui/material';
import { Sorter, ProductCard } from '..';

export const Catalogue: FC<TCatalogue> = ({
	busy,
	products,
	count,
	onPressPagination,
	onChangeSort,
}) => {
	return (
		<>
			{busy ? (
				<Box position={'absolute'} sx={{ left: '50%', top: '50%' }}>
					<CircularProgress />
				</Box>
			) : (
				<Box sx={{ paddingTop: '7rem', paddingBottom: '10rem' }}>
					<Sorter onPressSort={onChangeSort} />
					<Container maxWidth={'lg'}>
						<Grid
							container
							columns={{ xs: 4, sm: 8, md: 12 }}
							spacing={3}>
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
					<Box
						alignItems={'center'}
						sx={{
							display: 'flex',
							justifyContent: 'center',
							marginTop: '2rem',
						}}>
						<Pagination
							onChange={(event, value) =>
								onPressPagination(value)
							}
							count={count}
							color='primary'
							size='large'
							siblingCount={2}
						/>
					</Box>
				</Box>
			)}
		</>
	);
};
