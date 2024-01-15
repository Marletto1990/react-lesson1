import { FC } from 'react';
import { useLocation } from 'react-router';
import { NavBackButton } from '../components';
import { useAppSelector } from '../storage/hooks';
import {
	selectUser,
	selectUserLoading,
} from '../storage/reducers/user/selectors';

export const ProfilePage: FC = () => {
	const { state } = useLocation();
	const user = useAppSelector(selectUser);
	const busy = useAppSelector(selectUserLoading);
	return (
		<>
			<NavBackButton location={state && state.location} />
			{busy ? (
				<p>123</p>
			) : (
				<p>{`ID пользователя: ${user && user.name ? user.name : 0}`}</p>
			)}
			{/* <p>{'ID пользователя:'}</p> */}
		</>
	);
};
