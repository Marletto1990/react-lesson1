import { createContext } from 'react';

export type TUser = {
	id?: string;
};

export type TUserContext = {
	user: TUser;
};

export const UserContext = createContext<TUserContext>({ user: {} });

UserContext.displayName = 'UserContext';
