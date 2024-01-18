import * as yup from 'yup';

export const SignUpFormSchema = yup.object({
	email: yup.string().email().required(),
	group: yup.string().lowercase().required().strict(),
	password: yup.string().min(6).max(20).required(),
});
