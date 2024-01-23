import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ISignUpFormValues } from './helpers/ISignUpFormValues';
import { useNavigate } from 'react-router-dom';
import {
	Avatar,
	Box,
	Container,
	TextField,
	Typography,
	Link,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { SignUpFormSchema } from './helpers/validator';
import { useSignUpMutation } from '../../../storage/api/AuthApi';
import { toast } from 'react-toastify';

export const SignUpForm: FC = () => {
	const navigate = useNavigate();
	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitted, isSubmitting, isValid },
	} = useForm<ISignUpFormValues>({
		defaultValues: { email: '', group: '', password: '' },
		resolver: yupResolver(SignUpFormSchema),
	});

	const [signUpRequestFn] = useSignUpMutation();
	const submitHandler: SubmitHandler<ISignUpFormValues> = async (values) => {
		try {
			await signUpRequestFn(values).unwrap();
			toast.success('Успешная регистрация. Войдите в систему');
			navigate('/signin');
		} catch (error) {
			toast.error('Ошибка при регистрации');
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
					{'Зарегистрироваться'}
				</Typography>
				<Box
					component='form'
					onSubmit={handleSubmit(submitHandler)}
					noValidate
					sx={{ mt: 1 }}>
					{/* Чтобы подружить react-hook-form с MUI используем компонент Controller
		смотри доку https://react-hook-form.com/get-started#IntegratingwithUIlibraries
		*/}
					<Controller
						name='email'
						control={control}
						render={({ field }) => (
							<TextField
								margin='normal'
								label='Почта'
								type='email'
								fullWidth
								required
								autoComplete='email'
								error={!!errors.email?.message}
								helperText={errors.email?.message}
								{...field}
							/>
						)}
					/>
					<Controller
						name='group'
						control={control}
						render={({ field }) => (
							<TextField
								label='Группа'
								type='text'
								margin='normal'
								error={!!errors.group?.message}
								helperText={errors.group?.message}
								fullWidth
								required
								{...field}
							/>
						)}
					/>
					<Controller
						name='password'
						control={control}
						render={({ field }) => (
							<TextField
								label='Пароль'
								type='password'
								error={!!errors.password?.message}
								helperText={errors.password?.message}
								margin='normal'
								fullWidth
								required
								{...field}
							/>
						)}
					/>
					<LoadingButton
						type='submit'
						// кнопка становится недоступной после первой валидации (если есть ошибки)
						// или когда выполняется отправка (чтобы не дать пользователю отправить форму несколько раз)
						disabled={isSubmitted && (!isValid || isSubmitting)}
						loading={isSubmitting}
						fullWidth
						variant='contained'
						sx={{ mt: 3, mb: 2 }}>
						Sign Up
					</LoadingButton>
				</Box>
				<Link href='/' variant={'button'}>
					{'На Главную'}
				</Link>
			</Box>
		</Container>
	);
};
