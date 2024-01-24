import { FC } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { NavBackButton, Product } from '../components';
import { useGetProductQuery } from '../storage/api/ProductsApi';

export const ProductPage: FC = () => {
	const { productId } = useParams();
	const { data } = useGetProductQuery(productId);
	debugger;

	const { state } = useLocation();
	return (
		<>
			<NavBackButton location={state && state.location} />
			<Product data={data} />
		</>
	);
};
