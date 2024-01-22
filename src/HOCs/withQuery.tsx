import { ComponentType, FC } from 'react';
import { Button, CircularProgress, Stack } from '@mui/material';

type WithQueryType = {
	isLoading: boolean;
	isError: boolean;
	error?: string;
	refetch?: () => void;
};

export const withQuery = <P extends object>(
	WrappedComponent: ComponentType<P>
) => {
	const ReturnedComponent: FC<P & WithQueryType> = (props) => {
		const {
			isLoading,
			isError,
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			error,
			refetch,
			...restPropsForWrappedComponent
		} = props;

		if (isLoading) {
			return (
				<Stack direction={'column'} sx={{ minHeight: '60vh' }}>
					<CircularProgress sx={{ m: 'auto' }} />
				</Stack>
			);
		}

		if (isError) {
			return (
				<Button onClick={refetch} sx={{ mx: 'auto', my: 'auto' }}>
					refetch
				</Button>
			);
		}

		return <WrappedComponent {...(restPropsForWrappedComponent as P)} />;
	};

	ReturnedComponent.displayName = `withQuery${ReturnedComponent.displayName}`;
	return ReturnedComponent;
};
