import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { SearchField } from '../SearchField/SearchField';
export const Header = () => {
	return (
		<>
			<AppBar position='fixed' sx={{ top: 0, bottom: 'auto' }}>
				<Toolbar>
					<SearchField/>
				</Toolbar>
			</AppBar>
		</>
	);
};
