import { FC } from 'react';
import { TProductBEDto } from '../../model/model';
import { Box, Typography } from '@mui/material';

type TProduct = {
	data: TProductBEDto | undefined;
};
export const Product: FC<TProduct> = ({ data }) => {
	return (
		<>
			{data && (
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}>
					<Typography variant='h4' component='h2'>
						имя : {data.name}
					</Typography>
					<Typography variant='h4' component='h2'>
						описание : {data.description}
					</Typography>
					<Typography variant='h4' component='h2'>
						скидка : {data.discount}
					</Typography>
					<Typography variant='h4' component='h2'>
						количество : {data.stock}
					</Typography>
					<Typography variant='h4' component='h2'>
						вес : {data.wight}
					</Typography>
					<Typography variant='h4' component='h2'>
						лайки :
					</Typography>
					{data.likes.map((like, i) => {
						return (
							<Typography
								variant='h4'
								key={i}>{`${like}`}</Typography>
						);
					})}
				</Box>
			)}
		</>
	);
};
