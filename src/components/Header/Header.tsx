import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
export const Header = () => {
	return (
		<>
			<AppBar position='fixed' sx={{ top: 0, bottom: 'auto' }}>
				<Toolbar/>
			</AppBar>
		</>
	);
};
