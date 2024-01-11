import { useEffect, useState } from 'react';
import { TData } from '../data';
export const useApi = (
	handler: () => Promise<TData>
): { data: TData; loading: boolean; error?: Error } => {
	const [data, setData] = useState<TData>();
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
