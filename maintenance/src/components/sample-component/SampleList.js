import React, { useState, useEffect } from 'react';

import SampleService from '../../services/SampleService';

import SampleForm from './SampleForm';
import Model from './Model';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FaPlus } from 'react-icons/fa';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';

const initialSampleState = {
	name: '',
	description: '',
	address: '',
	date: '',
};

export default function SampleList() {
	const theme = createTheme();

	const [fetchingData, setFetchingData] = useState(true);
	const [pageSize, setPageSize] = useState(5);
	const [samples, setSamples] = useState([]);
	const [modelType, setModelType] = useState('create');
	const [openModel, setOpenModel] = useState(false);
	const [error, setError] = useState([]);
	const [sample, setSample] = useState(initialSampleState);

	useEffect(() => {
		retrieveSamples();
	}, []);

	const retrieveSamples = async () => {
		try {
			let response = await SampleService.getAllSample();
			console.log(response);
			setSamples(response.data.samples);
			setFetchingData(false);
		} catch (error) {
			setAlerDanger(USER_ALERT.Error.Title, USER_ALERT.Error.Get);
		}
	};

	const openInCreateModal = () => {
		setError([]);
		setOpenModel(true);
		setModelType('create');
	};

	const openInViewModal = async (item, type) => {
		try {
			if (item != null) {
				let response = await SampleService.getSampleById(item);
				setSample(response.data);
			}
			setOpenModel(true);
			setModelType('view');
		} catch (error) {
			setAlerDanger(USER_ALERT.Error.Title, USER_ALERT.Error.Get);
		}
	};

	const openInEditModal = async (item) => {
		try {
			if (item != null) {
				let response = await SampleService.getSampleById(item);
				console.log(response);
				setSample(response.data);
			}
			setError([]);
			setOpenModel(true);
			setModelType('edit');
		} catch (error) {
			setAlerDanger(USER_ALERT.Error.Title, USER_ALERT.Error.Get);
		}
	};

	const openInDeleteModal = async (item) => {
		// try {
		// 	setUserId(item);
		// 	let response = await UserDataService.get(item);
		// 	setCurrentUser(response.data.user);
		// 	setOpenDeleteModal(true);
		// } catch (error) {
		// 	setAlerDanger(USER_ALERT.Error.Title, USER_ALERT.Error.Get);
		// }
	};

	const columns = [
		{
			field: 'name',
			headerName: 'NAME',
			flex: 1,
			renderCell: (sample) => (
				<Tooltip title={sample.row.name}>
					<Box component='span' className='table-cell-trucate'>
						{sample.row.name}
					</Box>
				</Tooltip>
			),
		},
		{
			field: 'description',
			headerName: 'DESCRIPTION',
			flex: 1,
			renderCell: (sample) => (
				<Tooltip title={sample.row.description}>
					<Box component='span' className='table-cell-trucate'>
						{sample.row.description}
					</Box>
				</Tooltip>
			),
		},
		{
			field: 'address',
			headerName: 'ADDRESS',
			flex: 1,
			renderCell: (sample) => (
				<Tooltip title={sample.row.address}>
					<Box component='span' className='table-cell-trucate'>
						{sample.row.address}
					</Box>
				</Tooltip>
			),
		},
		{
			field: 'date',
			headerName: 'DATE',
			flex: 1,
			renderCell: (sample) => (
				<Tooltip title={sample.row.date}>
					<Box component='span' className='table-cell-trucate'>
						{sample.row.date}
					</Box>
				</Tooltip>
			),
		},
		{
			field: 'actions',
			type: 'actions',
			width: 100,
			headerClassName: 'lastcolumnSeparator',
			getActions: (sample) => [
				<GridActionsCellItem
					icon={<InsertDriveFileOutlinedIcon fontSize='small' />}
					title='View Sample'
					label='View'
					onClick={() => openInViewModal(sample.id)}
					sx={{ borderRadius: 1 }}
					color='primary'
					showInMenu
				/>,
				<GridActionsCellItem
					icon={<DriveFileRenameOutlineOutlinedIcon fontSize='small' />}
					title='Edit Sample'
					label='Edit'
					onClick={() => {
						openInEditModal(sample.id);
					}}
					sx={{ borderRadius: 1 }}
					color='primary'
					showInMenu
				/>,
			],
		},
	];

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Container>
				<Grid container mt={5}>
					<Grid item xs={12}>
						<Card
							sx={{
								borderTop: '2px solid #1976d2',
							}}
						>
							<CardHeader
								title='Sample'
								titleTypographyProps={{ fontSize: '18px', fontWeight: '550' }}
								action={
									<Box>
										<IconButton
											size='small'
											title='New Sample'
											onClick={() => {
												openInCreateModal();
											}}
											sx={{
												borderRadius: 1,
												backgroundColor: '#3d5afe',
												color: 'white',
												'&:hover': {
													backgroundColor: '#536dfe',
												},
											}}
										>
											<FaPlus />
										</IconButton>
									</Box>
								}
								sx={{
									mx: 1,
									paddingTop: 1.5,
									paddingBottom: 1.5,
								}}
							/>
							<Divider sx={{ borderWidth: '1px' }} />
							<CardContent>
								{fetchingData ? (
									<Typography sx={{ textAlign: 'center' }}>
										Fetching Data...Please Wait
									</Typography>
								) : (
									<div style={{ height: 400, width: '100%' }}>
										<DataGrid
											sx={{
												'& .color-1': {
													bgcolor: '#f5f5f5',
													'&:hover': {
														bgcolor: '#f5f5f5',
													},
													color: '#bdbdbd',
												},
												'.lastcolumnSeparator .MuiDataGrid-columnSeparator--sideRight':
													{
														display: 'none !important',
													},
												'.table-cell-trucate': {
													whiteSpace: 'nowrap',
													overflow: 'hidden',
													textOverflow: 'ellipsis',
												},
											}}
											columns={columns}
											rows={samples}
											rowHeight={35}
											pageSize={pageSize}
											onPageSizeChange={(newPageSize) =>
												setPageSize(newPageSize)
											}
											rowsPerPageOptions={[5, 10, 20]}
											pagination
											// getRowClassName={(tenant) => `color-${tenant.row.status}`}
										/>
									</div>
								)}
								<Model
									modelType={modelType}
									openPopup={openModel}
									setOpenPopup={setOpenModel}
								>
									<SampleForm
										error={error}
										setError={setError}
										setOpenModel={setOpenModel}
										modelType={modelType}
										setModelType={setModelType}
										setSamples={setSamples}
										sample={sample}
										setSample={setSample}
									/>
								</Model>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</ThemeProvider>
	);
}
