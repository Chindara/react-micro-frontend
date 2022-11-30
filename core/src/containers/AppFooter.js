import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const AppFooter = (props) => {
	return (
		<Typography
			variant='body2'
			color='text.secondary'
			align='center'
			{...props}
		>
			{'Copyright © '}
			<Link color='inherit' href='https://www.dmsswe.com/'>
				DMS Software Engineering (Pvt) Ltd.
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
};

export default React.memo(AppFooter);
