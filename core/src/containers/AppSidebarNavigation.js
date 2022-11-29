import React from 'react';
import PropTypes from 'prop-types';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link, useLocation } from 'react-router-dom';

export default function AppSidebarNavigation({ items }) {
	const location = useLocation();

	return (
		<React.Fragment>
			{items &&
				items.map((value, index) => (
					<ListItemButton
						key={index}
						component={Link}
						to={value.to}
						selected={location.pathname.startsWith(value.to)}
					>
						<ListItemIcon>{value.icon}</ListItemIcon>
						<ListItemText primary={value.name} />
					</ListItemButton>
				))}
		</React.Fragment>
	);
}

AppSidebarNavigation.propTypes = {
	items: PropTypes.arrayOf(PropTypes.any).isRequired,
};
