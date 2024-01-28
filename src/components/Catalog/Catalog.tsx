import { FC } from 'react';
import { TCatalog } from './TCatalog';
import { Box, Container, Grid } from '@mui/material';
import { ProductCard } from '..';

export const Catalog: FC<TCatalog> = ({ products }) => {
	return (
		<>
			<Box sx={{ paddingTop: '7rem', paddingBottom: '10rem' }}>
				<Container maxWidth={'lg'}>
					<Grid
						container
						columns={{ xs: 4, sm: 8, md: 12 }}
						spacing={3}>
						{products.map((item, i) => (
							<Grid item key={i}>
								<ProductCard
									_id={item._id}
									pictures={item.pictures}
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
			</Box>
		</>
	);
};
