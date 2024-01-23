import { FC } from 'react';
import { useLocation } from 'react-router';
import { NavBackButton } from '../components';
import { WithProtectionProfile } from '../components/Profile';

export const ProfilePage: FC = () => {
	const { state } = useLocation();

	return (
		<>
			<NavBackButton location={state && state.location} />
			<WithProtectionProfile />
		</>
	);
};
