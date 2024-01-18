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
// import { batch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSignInMutation } from '../../../api/AuthApi';
// import { setToken } from '../../../storage/reducers/auth/authSlice';
// import { setUser } from '../../../storage/reducers/user/userSlice';
// import { useAppDispatch } from '../../../storage/types';
import { ISignInFormValues } from './helpers/TSignInFormValues';
import { signInFormSchema } from './helpers/validator';

export const SignInForm: FC = () => {
	const navigate = useNavigate();
	// const dispatch = useAppDispatch();
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
		resolver: yupResolver(signInFormSchema) as Resolver<ISignInFormValues>, // иначе конфликтует
	});

	const submitHandler: SubmitHandler<ISignInFormValues> = async (values) => {
		try {
			const { data, token } = await signInRequestFn(values).unwrap();
			toast.success('Вы успешно вошли в систему');
			console.dir(data);
			console.log(token);
			// batch(() => {
			// 	dispatch(setUser(data));
			// 	dispatch(setToken(token));
			// });
			navigate('/');
		} catch (error) {
			toast.error('Не известная ошибка при авторизации пользователя');
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
