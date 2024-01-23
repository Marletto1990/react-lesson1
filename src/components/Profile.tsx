import { FC, useState } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import {
	Box,
	Button,
	Container,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import { withProtection } from '../HOCs/withProtection';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../storage/hooks';
import { setUser } from '../storage/reducers/root/selectors';
import { clearUser } from '../storage/reducers/root/rootSlice';

export const Profile: FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const user = useAppSelector(setUser);
	const [isEditMode, setIsEditMode] = useState<boolean>(false);
	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
		dispatch(clearUser());
		navigate('/signin');
	};
	return (
		<>
			<Box
				position={'absolute'}
				sx={{ left: '40%', top: '30%', justifyContent: 'center' }}>
				<Container maxWidth='lg'>
					{isEditMode ? (
						<Stack sx={{ mb: 2 }} direction='column' spacing={2}>
							<TextField
								value={user?.name}
								onChange={() => {
									console.log();
								}}
								sx={{ width: '20rem' }}
								label='Имя'
								variant='outlined'
							/>
							<TextField
								value={user?.email}
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
							<Typography variant='h3' sx={{ mb: 2 }}>
								{`${user?.name}`}
							</Typography>
							<Typography variant='h3' sx={{ mb: 2 }}>
								{`${
									user?.email
										? user?.email
										: 'почта не указана'
								}`}
							</Typography>
						</>
					)}
				</Container>
				<Box
					display={'flex'}
					flexDirection={'column'}
					justifyItems={'center'}>
					<Button
						variant='contained'
						sx={{ m: 'auto', mt: 3 }}
						onClick={() => {
							setIsEditMode(!isEditMode);
						}}>
						{`${isEditMode ? 'Сохранить' : 'Редактировать'}`}
					</Button>
					<Button
						variant='contained'
						sx={{ m: 'auto', mt: 3 }}
						onClick={() => setOpen(true)}>
						Выйти
					</Button>
				</Box>
				<Dialog
					open={open}
					onClose={() => setOpen(false)}
					aria-labelledby='responsive-dialog-title'>
					<DialogTitle id='responsive-dialog-title'>
						{'Требуется подтверждение'}
					</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Вый действительно хотите выйти?
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={() => setOpen(false)}>Отменить</Button>
						<Button onClick={handleClose}>Выйти</Button>
					</DialogActions>
				</Dialog>
			</Box>
		</>
	);
};

export const WithProtectionProfile = withProtection(Profile);
