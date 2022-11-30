import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import AppFooter from '../containers/AppFooter';
import AppHeader from '../containers/AppHeader';
import AppSidebar from '../containers/AppSidebar';
import AppContent from '../containers/AppContent';

const mdTheme = createTheme();

const TheLayout = () => {
	return (
		<>
			<ThemeProvider theme={mdTheme}>
				<Box sx={{ display: 'flex' }}>
					<CssBaseline />
					<AppHeader />
					<AppSidebar />
					<Box
						component='main'
						sx={{
							backgroundColor: (theme) =>
								theme.palette.mode === 'light'
									? theme.palette.grey[100]
									: theme.palette.grey[900],
							flexGrow: 1,
							height: '100vh',
							overflow: 'auto',
						}}
					>
						<Toolbar />
						<AppContent />
						{/* <AppFooter sx={{ pt: 0, mb: 3 }} /> */}
					</Box>
				</Box>
			</ThemeProvider>
		</>
	);
};

export default TheLayout;
