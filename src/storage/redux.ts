import { Action, AsyncThunk } from '@reduxjs/toolkit';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GenericAsynkThunk = AsyncThunk<unknown, unknown, any>;
type PendingAction = ReturnType<GenericAsynkThunk['pending']>;
type RejectedAction = ReturnType<GenericAsynkThunk['rejected']>;
type FulfilledAction = ReturnType<GenericAsynkThunk['fulfilled']>;

const hasPrefix = (action: Action, prefix: string): boolean => {
	return action.type.startsWith(prefix);
};

const isPending = (action: Action): boolean => action.type.endsWith('/pending');

const isFulfilled = (action: Action): boolean =>
	action.type.endsWith('/fulfilled');

const isRejected = (action: Action): boolean =>
	action.type.endsWith('/rejected');

export const isActionPending = (prefix: string) => (action: PendingAction) => {
	return hasPrefix(action, prefix) && isPending;
};

export const isActionFulfilled =
	(prefix: string) => (action: FulfilledAction) => {
		return hasPrefix(action, prefix) && isFulfilled;
	};

export const isActionRejected =
	(prefix: string) => (action: RejectedAction) => {
		return hasPrefix(action, prefix) && isRejected;
	};
