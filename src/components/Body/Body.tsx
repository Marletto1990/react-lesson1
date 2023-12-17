import { FC, useEffect, useState } from 'react';
import { TBodyType } from './TBodyType';
import {
	Box,
	Container,
	CircularProgress,
} from '@mui/material';
import { Masonry } from '@mui/lab';
import { ProductCard } from '../ProductCard/ProductCard';
export const Body: FC<TBodyType> = (busy) => {
	const [busyBody, setbusyBody] = useState<TBodyType['busy']>(true);
	// useEffect(() => {
	// 	setbusyBody(busy);
	// }, []);
	useEffect(() => {
		setTimeout(() => {
			setbusyBody(false);
		}, 1000);
	}, []);
	return (
		<>
			{busyBody ? (
				<Box position={'absolute'} sx={{ left: '50%', top: '50%' }}>
					<CircularProgress />
				</Box>
			) : (
				<Box sx={{ paddingTop: '10rem', paddingBottom: '10rem' }}>
					<Container maxWidth={'lg'}>
						<Masonry columns={4} spacing={2}>
							<ProductCard></ProductCard>
							<ProductCard></ProductCard>
							<ProductCard></ProductCard>
							<ProductCard></ProductCard>
							<ProductCard></ProductCard>
							<ProductCard></ProductCard>
							<ProductCard></ProductCard>
							<ProductCard></ProductCard>
							<ProductCard></ProductCard>
							<ProductCard></ProductCard>
						</Masonry>
					</Container>
				</Box>
			)}
		</>
	);
};
