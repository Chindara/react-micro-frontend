import React, { useState } from 'react';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const AppHeader = () => {
	const [anchorElUser, setAnchorElUser] = useState(null);

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleLogOut = () => {};

	return (
		<AppBar
			position='absolute'
			open={true}
			sx={{ backgroundColor: '#121212', height: 64 }}
		>
			<Toolbar sx={{ pr: '24px' }}>
				<IconButton
					edge='start'
					color='inherit'
					aria-label='open drawer'
					// onClick={() => dispatch(changeState(!sidebarShow))}
					// sx={{
					// 	marginRight: '36px',
					// 	...(sidebarShow && { display: 'none' }),
					// }}
				>
					<MenuIcon />
				</IconButton>
				<Typography
					component='h1'
					variant='h6'
					color='inherit'
					noWrap
					sx={{ flexGrow: 1 }}
				>
					Micro - Frontend
				</Typography>

				<Box sx={{ flexGrow: 0 }}>
					<Tooltip title='Open settings'>
						<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
							<Avatar alt={''} src='..' />
						</IconButton>
					</Tooltip>
					<Menu
						sx={{ mt: '45px' }}
						id='menu-appbar'
						anchorEl={anchorElUser}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						open={Boolean(anchorElUser)}
						onClose={handleCloseUserMenu}
					>
						<MenuItem onClick={handleCloseUserMenu}>
							{/* {loggedUser?.name} */}
						</MenuItem>
						<MenuItem onClick={handleLogOut}>Logout</MenuItem>
					</Menu>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default React.memo(AppHeader);
