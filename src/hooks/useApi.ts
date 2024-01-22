import { useEffect, useState } from 'react';
import { TProductDto } from '../model/model';
export const useApi = (
	handler: () => Promise<TProductDto>
): { data: TProductDto; loading: boolean; error?: Error } => {
	const [data, setData] = useState<TProductDto>();
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<Error>();
	useEffect(() => {
		setLoading(true);
		handler()
			.then((result) => {
				setData(result);
			})
			.catch((err) => {
				setError(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [handler]);
	return { data: data!, loading, error };
};
