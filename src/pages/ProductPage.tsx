import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { NavBackButton } from '../components';
// import { TUserContext, TUser, TProductsContext } from '../../context';
// import { Favorites } from '../../components/Favorites';

export const ProductPage: FC = () => {
	const { state } = useLocation();
	return (
		<>
			<NavBackButton location={state && state.location} />
			<div>Product</div>
		</>
	);
};