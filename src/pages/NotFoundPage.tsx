import { FC } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { purple } from '@mui/material/colors';
import { Link } from 'react-router-dom';

const primary = purple[500]; // #f44336

export const NotFoundPage: FC = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				minHeight: '98vh',
				backgroundColor: primary,
			}}>
			<Typography variant='h1'>404</Typography>
			<Typography variant='h6'>Страница не найдена</Typography>
			<Link to='/'>
				<Button variant='contained'>Перейти на главную</Button>
			</Link>
		</Box>
	);
};
