import { FC, forwardRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
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
	const cartProducts = [
		{ name: 'Продукт №1', description: 'Описание продукта номер 1' },
		{ name: 'Продукт №2', description: 'Описание продукта номер 2' },
		{ name: 'Продукт №3', description: 'Описание продукта номер 3' },
		{ name: 'Продукт №4', description: 'Описание продукта номер 4' },
		{ name: 'Продукт №5', description: 'Описание продукта номер 5' },
	];
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
					{cartProducts.map((e, i) => {
						return (
							<ListItemButton key={i}>
								<ListItemText
									primary={e.name}
									secondary={e.description}
								/>
							</ListItemButton>
						);
					})}
				</List>
			</Dialog>
		</>
	);
};
