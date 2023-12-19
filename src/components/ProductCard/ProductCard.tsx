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
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const ProductCard: FC<TProductCardType> = (props) => {
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
					<Typography variant='h5' color='text.error' sx={{ m: 1}}>
						{props.price} р
					</Typography>
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
