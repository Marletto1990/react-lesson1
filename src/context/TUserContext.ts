import { createContext } from 'react';

export type TUser = {
	id?: string;
};

export type TUserContext = {
	user: TUser | null;
};

export const UserContext = createContext<TUserContext | null>(null);

UserContext.displayName = 'UserContext';
