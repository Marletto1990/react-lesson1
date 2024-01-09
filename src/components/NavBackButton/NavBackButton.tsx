import { FC } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { TNavBackButton } from './TNavBackButton';

export const NavBackButton: FC<TNavBackButton> = ({ location }) => {
	const navigate = useNavigate();

	return (
		<IconButton
			color='primary'
			onClick={() => {
				navigate(location || '/');
			}}>
			<ArrowBackIcon />
		</IconButton>
	);
};
