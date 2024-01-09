import { FC } from 'react';
import { TProductCardType } from '../ProductCard/TProductCardType';
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

export const ProductCard: FC<TProductCardType> = (props) => {
	const discount = props.discount ? `-${props.discount}%` : 0;
	const fullPrice = props.discount
		? (props.price + (props.price * props.discount) / 100).toFixed(0)
		: null;
	return (
		<>
			<Card sx={{ maxWidth: 345 }}>
				<CardHeader
					action={
						<IconButton aria-label='settings'>
							<MoreVertIcon />
						</IconButton>
					}
					title={props.name}
					subheader={props.wight}
				/>
				<CardMedia
					sx={{ height: 120 }}
					image={props.picture}
					title={props.name}
				/>
				<CardContent>
					<Stack direction='row'>
						<Typography
							variant='h5'
							color='text.error'
							sx={{ m: 1 }}>
							{props.price} р
						</Typography>
						{fullPrice && (
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
						<Badge
							badgeContent={discount}
							color='error'
							sx={{ top: 28, left: 13 }}
						/>
					</Stack>
					<Typography variant='body2' color='text.secondary'>
						{props.description}
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
