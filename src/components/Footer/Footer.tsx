import { FC } from 'react';
import { AppBar, Toolbar, Typography, Box, Link, Stack } from '@mui/material';

export const Footer: FC = () => {
	return (
		<>
			<AppBar position='relative' sx={{ top: 'auto', bottom: 0 }}>
				<Toolbar sx={{ justifyContent: 'space-around', width: '100%' }}>
					<Stack direction='column' useFlexGap flexWrap='wrap'>
						<Typography
							variant='h6'
							color='text.error'
							sx={{ m: 5 }}>
							Текст футера 1
						</Typography>
						<Typography
							variant='h6'
							color='text.error'
							sx={{ m: 5 }}>
							Текст футера 2
						</Typography>
					</Stack>
					<Stack direction='column' useFlexGap flexWrap='wrap'>
						<Box sx={{ m: 3 }}>
							<Link href='#' variant='body2' color={'#FFFFFF'}>
								ссылка на контакты
							</Link>
						</Box>
						<Box sx={{ m: 3 }}>
							<Link href='#' variant='body2' color={'#FFFFFF'}>
								ссылка на партнеров
							</Link>
						</Box>
						<Box sx={{ m: 3 }}>
							<Link href='#' variant='body2' color={'#FFFFFF'}>
								ссылка на соцсети
							</Link>
						</Box>
					</Stack>
				</Toolbar>
			</AppBar>
		</>
	);
};
