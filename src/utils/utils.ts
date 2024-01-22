import { ComponentType } from 'react';

export const objectHasProperty = <P extends PropertyKey>(
	obj: unknown,
	prop: P
): obj is object & Record<P, unknown> => {
	return typeof obj === 'object' && !!obj && Object.hasOwn(obj, prop);
};

export const getMessageFromError = (
	error: unknown,
	defaultErrorMessage: string
) => {
	if (
		objectHasProperty(error, 'data') &&
		objectHasProperty(error.data, 'message') &&
		typeof error.data.message === 'string'
	) {
		return error.data.message;
	}
	return defaultErrorMessage;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getDisplayName = (WrappedComponent: ComponentType<any>) => {
	return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};
