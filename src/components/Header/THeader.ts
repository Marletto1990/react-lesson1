// import { ChangeEventHandler } from 'react';

export type THeader = {
	busy: boolean;
	// onSearch: (
	// 	event: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
	// ) => void;
	onSearch: (value: string) => void;
};
