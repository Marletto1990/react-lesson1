import { FC, useEffect, useState } from 'react';
import { TBodyType } from './TBodyType';
import { Box, Container, CircularProgress } from '@mui/material';
import { Masonry } from '@mui/lab';
import { ProductCard } from '../ProductCard/ProductCard';
import { TProductCardType } from '../ProductCard/TProductCardType';

export const Body: FC<TBodyType> = ({ busy, products }) => {
	// TODO пагинация

	return (
		<>
			{busy ? (
				<Box position={'absolute'} sx={{ left: '50%', top: '50%' }}>
					<CircularProgress />
				</Box>
			) : (
				<Box sx={{ paddingTop: '7rem', paddingBottom: '10rem' }}>
					<Container maxWidth={'lg'}>
						<Masonry columns={4} spacing={2}>
							{
								products.map((item, i) => (
									<ProductCard
										key={i}
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
								))}
						</Masonry>
{/* компонент с пагинацией */}
					</Container>
				</Box>
			)}
		</>
	);
};
