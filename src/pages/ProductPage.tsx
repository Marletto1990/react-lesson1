import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { NavBackButton } from '../components';
import { Typography, Button, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
	incrementAction,
	decrementAction,
} from '../storage/reducers/counterReducers';

export const ProductPage: FC = () => {
	const { state } = useLocation();
	const dispatch = useDispatch();
	const increment = () => {
		dispatch(incrementAction(1));
	};
	const decrement = () => {
		dispatch(decrementAction(1));
	};
	const counter = useSelector((state: any) => state.counter);
	debugger;
	return (
		<>
			<NavBackButton location={state && state.location} />
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
					minHeight: '90vh',
				}}>
				<Typography>{`Счетчик: ${counter.value}`}</Typography>
				<Box>
					<Button onClick={increment}>+1</Button>
					<Button onClick={decrement}>-1</Button>
				</Box>
			</Box>
		</>
	);
};
