import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const sidebarItems = [
	{
		id: 1,
		name: 'Child One',
		to: '/child-one',
		icon: <PersonIcon />,
	},
	{
		id: 2,
		name: 'Child Two',
		to: '/child-two',
		icon: <PeopleAltIcon />,
	},
	{
		id: 3,
		name: 'Sample',
		to: '/sample',
		icon: <PeopleAltIcon />,
	},
];

export default sidebarItems;
