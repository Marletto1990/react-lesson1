import { Button, ButtonGroup, Toolbar } from '@mui/material';

export const Sorter = () => {
	return (
		<Toolbar sx={{justifyContent:"center"}}>
			<ButtonGroup fullWidth={true} variant="text" sx={{ justifyContent: 'stretch', width: '40%' }}>
				<Button variant='contained'>Сначала дорогие</Button>
				<Button>Сначала дешевые</Button>
				<Button>По размеру скидки</Button>
			</ButtonGroup>
		</Toolbar>
)};
