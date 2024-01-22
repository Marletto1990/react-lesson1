import { ComponentType, FC } from 'react';
import { useAppSelector } from '../storage/hooks';
import { selectToken } from '../storage/reducers/auth/authSelectors';
import { Navigate, useLocation } from 'react-router';
import { getDisplayName } from '../utils/utils';

export const withProtection = <P extends object>(
	WrappedComponent: ComponentType<P>
) => {
	const InnerComponent: FC<P> = (props) => {
		const accessToken = useAppSelector(selectToken);
		const location = useLocation();

		if (!accessToken) {
			return (
				<Navigate to='/signin' state={{ from: location.pathname }} />
			);
		}
		InnerComponent.displayName = `WithSubscription(${getDisplayName(
			WrappedComponent
		)})`;
		return <WrappedComponent {...props} />;
	};
	return InnerComponent;
};
