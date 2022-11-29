import React, { Suspense } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import routes from '../routes';

const AppContent = () => {
	return (
		<Container maxWidth='xl' sx={{ mt: 0, mb: 4 }}>
			<Suspense>
				<Routes>
					{routes.map((route, idx) => {
						return (
							route.element && (
								<Route
									key={idx}
									path={route.path}
									exact={route.exact}
									name={route.name}
									element={<route.element />}
								/>
							)
						);
					})}
					<Route path='/' element={<Navigate to='login' replace />} />
				</Routes>
			</Suspense>
		</Container>
	);
};

export default React.memo(AppContent);
