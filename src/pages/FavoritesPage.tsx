// import { useContext, useEffect, useState } from 'react';
import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { NavBackButton } from '../components';
// import { TUserContext, TUser, TProductsContext } from '../../context';
import { Favorites } from '../components/Favorites';

export const FavoritesPage: FC = () => {
	const { state } = useLocation();
	// const { busy, products } = useContext<TProductsContext>({ProductContext});
	// const [favorites, setFavorites] = useState<number | undefined>();

	// useEffect(() => {
	// 	const newFavorites = products.filter((e) => e.isFavorite);

	// 	setFavorites(newFavorites.length);
	// }, [products]);

	return (
		<>
			<NavBackButton location={state && state.location} />
			<Favorites />
			{/* {busy ? <Spinner /> : <p>{`Избранных товаров: ${favorites}`}</p>} */}
		</>
	);
};
