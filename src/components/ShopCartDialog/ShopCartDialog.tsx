import { FC, forwardRef } from 'react';
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
import { useAppDispatch } from '../../storage/types';
import { getShopCartOpen } from '../../storage/reducers/root/selectors';
import { setShopCartOpen } from '../../storage/reducers/root/rootSlice';
import { useSelector } from 'react-redux';

const Transition = forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction='up' ref={ref} {...props} />;
});

export const ShopCartDialog: FC = () => {
	const dispatch = useAppDispatch();
	const shopCartOpen = useSelector(getShopCartOpen);

	return (
		<>
			<Dialog
				fullScreen
				open={shopCartOpen}
				onClose={() => dispatch(setShopCartOpen(false))}
				TransitionComponent={Transition}>
				<AppBar sx={{ position: 'relative' }}>
					<Toolbar>
						<IconButton
							edge='start'
							color='inherit'
							onClick={() => dispatch(setShopCartOpen(false))}
							aria-label='close'>
							<CloseIcon />
						</IconButton>
						<Typography
							sx={{ ml: 2, flex: 1, m: 'auto' }}
							variant='h4'
							component='div'>
							Корзина
						</Typography>
						<Button
							color='inherit'
							onClick={() => dispatch(setShopCartOpen(false))}>
							Закрыть
						</Button>
					</Toolbar>
				</AppBar>
				<List>
					<ListItemButton>
						<ListItemText
							primary='Продукт №1'
							secondary='Описание продукта номер 1'
						/>
					</ListItemButton>
					<Divider />
					<ListItemButton>
						<ListItemText
							primary='Продукт №2'
							secondary='Описание продукта номер 2'
						/>
					</ListItemButton>
					<ListItemButton>
						<ListItemText
							primary='Продукт №3'
							secondary='Описание продукта номер 3'
						/>
					</ListItemButton>
					<ListItemButton>
						<ListItemText
							primary='Продукт №4'
							secondary='Описание продукта номер 4'
						/>
					</ListItemButton>
				</List>
			</Dialog>
		</>
	);
};
