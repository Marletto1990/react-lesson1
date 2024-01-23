import { FC, useState, forwardRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

type TShopCartDialog = {
	cartOpener: boolean;
};

const Transition = forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction='up' ref={ref} {...props} />;
});

export const ShopCartDialog: FC<TShopCartDialog> = ({ cartOpener }) => {
	const [open, setOpen] = useState(cartOpener);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Button variant='outlined' onClick={handleClickOpen}>
				Open full-screen dialog
			</Button>
			<Dialog
				fullScreen
				open={open}
				onClose={handleClose}
				TransitionComponent={Transition}>
				<AppBar sx={{ position: 'relative' }}>
					<Toolbar>
						<IconButton
							edge='start'
							color='inherit'
							onClick={handleClose}
							aria-label='close'>
							<CloseIcon />
						</IconButton>
						<Typography
							sx={{ ml: 2, flex: 1 }}
							variant='h6'
							component='div'>
							Sound
						</Typography>
						<Button color='inherit' onClick={handleClose}>
							save
						</Button>
					</Toolbar>
				</AppBar>
				<List>
					<ListItemButton>
						<ListItemText
							primary='Phone ringtone'
							secondary='Titania'
						/>
					</ListItemButton>
					<Divider />
					<ListItemButton>
						<ListItemText
							primary='Default notification ringtone'
							secondary='Tethys'
						/>
					</ListItemButton>
				</List>
			</Dialog>
		</>
	);
};
