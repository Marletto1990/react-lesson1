import { FC, useState } from 'react';
import { useLocation } from 'react-router';
import { NavBackButton } from '../components';
import { useAppSelector } from '../storage/hooks';
import { setUser } from '../storage/reducers/root/selectors';
import {
	Box,
	Button,
	Container,
	Stack,
	TextField,
	Typography,
} from '@mui/material';

export const ProfilePage: FC = () => {
	const { state } = useLocation();
	const user = useAppSelector(setUser);
	// const busy = useAppSelector(selectUserLoading);
	const [isEditMode, setIsEditMode] = useState<boolean>(false);
	return (
		<>
			<NavBackButton location={state && state.location} />
			{/* {busy ? (
				<p>123</p>
			) : (
				<p>{`ID пользователя: ${
					user && user.name ? user.name : 'Данные загружаются...'
				}`}</p>
			)} */}
			{user ? (
				<Box position={'absolute'} sx={{ left: '40%', top: '30%' }}>
					<Container maxWidth='lg'>
						{isEditMode ? (
							<Stack
								sx={{ mb: 2 }}
								direction='column'
								spacing={2}>
								<TextField
									value={user.name}
									onChange={() => {
										console.log();
									}}
									sx={{ width: '20rem' }}
									label='Имя'
									variant='outlined'
								/>
								<TextField
									value={user.email}
									onChange={() => {
										console.log();
									}}
									sx={{ width: '20rem' }}
									label='Почта'
									variant='outlined'
								/>
							</Stack>
						) : (
							<>
								{/* <img
								height='200px'
								src={user.avatar}
								alt={user.name}
							/> */}
								<Typography variant='h3' sx={{ mb: 2 }}>
									{`${user.name}`}
								</Typography>
								<Typography variant='h3' sx={{ mb: 2 }}>
									{`${
										user.email
											? user.email
											: 'почта не указана'
									}`}
								</Typography>
							</>
						)}

						<Button
							variant='contained'
							sx={{ mb: 2 }}
							onClick={() => {
								setIsEditMode(!isEditMode);
							}}>
							{`${isEditMode ? 'Сохранить' : 'Редактировать'}`}
						</Button>
					</Container>
				</Box>
			) : (
				<Box position={'absolute'} sx={{ left: '40%', top: '30%' }}>
					<Typography>Требуется авторизация</Typography>
				</Box>
			)}
		</>
	);
};
