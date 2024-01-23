import { yupResolver } from '@hookform/resolvers/yup';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LoadingButton from '@mui/lab/LoadingButton';
import {
	Avatar,
	Box,
	Container,
	Link,
	TextField,
	Typography,
} from '@mui/material';
import { FC } from 'react';
import { Controller, Resolver, SubmitHandler, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSignInMutation } from '../../../storage/api/AuthApi';
import { setToken, setUser } from '../../../storage/reducers/root/rootSlice';
import { useAppDispatch } from '../../../storage/types';
import { ISignInFormValues } from './helpers/ISignInFormValues';
import { signInFormSchema } from './helpers/validator';
import { objectHasProperty } from '../../../utils/utils';

export const SignInForm: FC = () => {
	const state = useLocation();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [signInRequestFn] = useSignInMutation();
	const {
		control,
		handleSubmit,
		formState: { errors, isValid, isSubmitting, isSubmitted },
	} = useForm<ISignInFormValues>({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: yupResolver(signInFormSchema) as Resolver<ISignInFormValues>,
	});

	const submitHandler: SubmitHandler<ISignInFormValues> = async (values) => {
		try {
			const { data, token } = await signInRequestFn(values).unwrap();
			dispatch(setUser(data));
			dispatch(setToken(token));
			toast.success(`Добро пожаловать, ${data.name}!`);
			navigate(
				objectHasProperty(state, 'from') &&
					typeof state.from === 'string'
					? state.from
					: '/'
			);
		} catch (error) {
			toast.error('Ошибка при авторизации пользователя');
		}
	};

	return (
		<Container component='main' maxWidth='xs'>
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Sign In
				</Typography>
				<Box
					component='form'
					onSubmit={handleSubmit(submitHandler)}
					noValidate
					sx={{ mt: 1 }}>
					<Controller
						name='email'
						control={control}
						render={({ field }) => (
							<TextField
								margin='normal'
								label='Email Address'
								type='email'
								fullWidth
								required
								autoComplete='email'
								error={!!errors.email?.message}
								// helperText={errors.email?.message}
								{...field}
							/>
						)}
					/>
					<Controller
						name='password'
						control={control}
						render={({ field }) => (
							<TextField
								label='Password'
								type='password'
								error={!!errors.password?.message}
								// helperText={errors.password?.message}
								margin='normal'
								fullWidth
								required
								{...field}
							/>
						)}
					/>

					<LoadingButton
						type='submit'
						disabled={isSubmitted && (!isValid || isSubmitting)}
						loading={isSubmitting}
						fullWidth
						variant='contained'
						sx={{ mt: 3, mb: 2 }}>
						Sign In
					</LoadingButton>
				</Box>
				<Link href='/signup'>{"Don't have an account? Sign Up!"}</Link>
			</Box>
		</Container>
	);
};
