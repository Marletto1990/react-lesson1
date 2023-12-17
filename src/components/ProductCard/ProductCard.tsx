import { FC } from 'react';
import { TProductCardType } from '../ProductCard/TProductCardType';
import { Card } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const ProductCard: FC<TProductCardType> = (props) => {
	return (
		<>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					sx={{ height: 140 }}
					image={props.picture}
					title={props.name}
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{props.name}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{props.description}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size='small'>Share</Button>
					<Button size='small'>Learn More</Button>
				</CardActions>
			</Card>
		</>
	);
};
