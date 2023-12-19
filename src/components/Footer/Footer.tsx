import React from 'react';
import { AppBar, Toolbar } from '@mui/material';

export const Footer = () => {
	return (
		<>
			<AppBar position='relative' sx={{ top: 'auto', bottom: 0 }}>
				<Toolbar/>
			</AppBar>
		</>
	);
};
