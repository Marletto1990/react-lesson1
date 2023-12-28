import { FC } from 'react';
import { TProductCard } from './TProductCard';
import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	CardHeader,
	Button,
	Typography,
	IconButton,
	Badge,
	Stack,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const ProductCard: FC<TProductCard> = ({
	discount,
	name,
	price,
	pictures,
	wight,
	description,
}) => {
	const discountText = `-${discount}%`;
	const fullPrice: string = (price + (price * discount) / 100).toFixed(0);

	return (
		<>
			<Card sx={{ maxWidth: 345 }}>
				<CardHeader
					action={
						<IconButton aria-label='settings'>
							<MoreVertIcon />
						</IconButton>
					}
					title={name}
					subheader={wight}
				/>
				<CardMedia sx={{ height: 120 }} image={pictures} title={name} />
				<CardContent>
					<Stack direction='row'>
						<Typography
							variant='h5'
							color='text.error'
							sx={{ m: 1 }}>
							{price} р
						</Typography>
						{discount && (
							<Typography
								variant='h5'
								color='text.error'
								sx={{
									m: 1,
									textDecoration: 'line-through',
									color: '#747475',
								}}>
								{fullPrice} р
							</Typography>
						)}
						{discount && (
							<Badge
								badgeContent={discountText}
								color='error'
								sx={{ top: 28, left: 13 }}
							/>
						)}
					</Stack>
					<Typography variant='body2' color='text.secondary'>
						{description}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size='small'>Добавить</Button>
					<Button size='small'>Подробнее</Button>
				</CardActions>
			</Card>
		</>
	);
};
