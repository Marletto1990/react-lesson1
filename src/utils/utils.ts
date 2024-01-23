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

export const stringToColor = (string: string) => {
	let hash = 0;
	let i;

	/* eslint-disable no-bitwise */
	for (i = 0; i < string.length; i += 1) {
		hash = string.charCodeAt(i) + ((hash << 5) - hash);
	}

	let color = '#';

	for (i = 0; i < 3; i += 1) {
		const value = (hash >> (i * 8)) & 0xff;
		color += `00${value.toString(16)}`.slice(-2);
	}
	/* eslint-enable no-bitwise */

	return color;
};
export const stringAvatar = (name: string) => {
	return {
		sx: {
			bgcolor: stringToColor(name),
		},
		children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
	};
};
