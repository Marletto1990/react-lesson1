import { FC, useContext } from 'react';
import { useLocation } from 'react-router';
import { NavBackButton } from '../components';
import { TUserContext, UserContext } from '../context';

export const ProfilePage: FC = () => {
	const { state } = useLocation();
	const { user } = useContext<TUserContext>(UserContext);
	return (
		<>
			<NavBackButton location={state && state.location} />
			<p>{`ID пользователя: ${user.id}`}</p>
		</>
	);
};
