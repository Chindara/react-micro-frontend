import React from 'react';

import SampleService from '../../services/SampleService';

import { SAMPLE_VALIDATION_MESSAGE } from '../../constants/Message';
import {
	setAlertSuccess,
	setAlertWarning,
	setAlertError,
} from '../alert/Alert';
import { SAMPLE_ALERT } from '../../constants/Message';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const initialSampleState = {
	name: '',
	description: '',
	address: '',
	date: '',
};

export default function SampleForm({
	modelType,
	setSamples,
	setOpenModel,
	error,
	setError,
	sample,
	setSample,
	sampleId,
}) {
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setSample({ ...sample, [name]: value });
		if (value) {
			setError([]);
		}
	};

	const saveSample = async (e) => {
		e.preventDefault();
		const errorList = [];

		if (
			!/([A-Z]+)/g.test(sample.name) &&
			!/([a-z]+)/g.test(sample.name) &&
			!/([0-9]+)/g.test(sample.name)
		) {
			errorList.push('name');
		}

		if (
			!/([A-Z]+)/g.test(sample.description) &&
			!/([a-z]+)/g.test(sample.description) &&
			!/([0-9]+)/g.test(sample.description)
		) {
			errorList.push('description');
		}

		if (
			!/([A-Z]+)/g.test(sample.address) &&
			!/([a-z]+)/g.test(sample.address) &&
			!/([0-9]+)/g.test(sample.address)
		) {
			errorList.push('address');
		}

		if (
			!/([A-Z]+)/g.test(sample.date) &&
			!/([a-z]+)/g.test(sample.date) &&
			!/([0-9]+)/g.test(sample.date)
		) {
			errorList.push('date');
		}

		setError(errorList);

		if (errorList.length === 0) {
			var data = {
				name: sample.name,
				description: sample.description,
				address: sample.address,
				date: sample.date,
			};

			try {
				if (modelType === 'create') await SampleService.createSample(data);

				if (modelType === 'edit')
					await SampleService.updateSample(sampleId, data);

				let res = await SampleService.getAllSample();

				setSamples(res.data.samples);

				setSample(initialSampleState);
				setOpenModel(false);
				setAlertSuccess(
					modelType === 'create'
						? SAMPLE_ALERT.Success.Create
						: SAMPLE_ALERT.Success.Update
				);
			} catch (error) {
				setAlertError(
					modelType === 'create'
						? SAMPLE_ALERT.Error.Create
						: SAMPLE_ALERT.Error.Update
				);
			}
		}
	};

	return (
		<Box component='form' noValidate sx={{ mt: 1 }}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<TextField
						id='name'
						label='Name'
						name='name'
						required
						disabled={modelType === 'view' ? true : false}
						fullWidth
						size='small'
						error={error.includes('validate-name')}
						helperText={
							error.includes('validate-name') &&
							SAMPLE_VALIDATION_MESSAGE.validateCompanyName
						}
						value={sample.name}
						onChange={handleInputChange}
						InputProps={{ style: { fontSize: 14 } }}
						InputLabelProps={{ style: { fontSize: 14 } }}
						FormHelperTextProps={{
							style: { fontSize: 10.5, color: '#d32f2f' },
						}}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						id='description'
						label='Description'
						name='description'
						required
						disabled={modelType === 'view' ? true : false}
						fullWidth
						size='small'
						error={error.includes('validate-description')}
						helperText={
							error.includes('validate-description') &&
							SAMPLE_VALIDATION_MESSAGE.validateCompanyName
						}
						value={sample.description}
						onChange={handleInputChange}
						InputProps={{ style: { fontSize: 14 } }}
						InputLabelProps={{ style: { fontSize: 14 } }}
						FormHelperTextProps={{
							style: { fontSize: 10.5, color: '#d32f2f' },
						}}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						id='address'
						label='Address'
						name='address'
						required
						disabled={modelType === 'view' ? true : false}
						fullWidth
						size='small'
						error={error.includes('validate-address')}
						helperText={
							error.includes('validate-address') &&
							SAMPLE_VALIDATION_MESSAGE.validateBusinessRegistration
						}
						value={sample.address}
						onChange={handleInputChange}
						InputProps={{ style: { fontSize: 14 } }}
						InputLabelProps={{ style: { fontSize: 14 } }}
						FormHelperTextProps={{
							style: { fontSize: 10.5, color: '#d32f2f' },
						}}
					/>
				</Grid>

				<Grid item xs={12}>
					<TextField
						id='date'
						label='Date'
						name='date'
						required
						disabled={modelType === 'view' ? true : false}
						fullWidth
						size='small'
						error={error.includes('validate-date')}
						helperText={
							error.includes('validate-date') &&
							SAMPLE_VALIDATION_MESSAGE.validateBusinessRegistration
						}
						value={sample.date}
						onChange={handleInputChange}
						InputProps={{ style: { fontSize: 14 } }}
						InputLabelProps={{ style: { fontSize: 14 } }}
						FormHelperTextProps={{
							style: { fontSize: 10.5, color: '#d32f2f' },
						}}
					/>
				</Grid>
			</Grid>
			{modelType !== 'view' && (
				<Grid item xs={12}>
					<Button
						variant='contained'
						onClick={saveSample}
						sx={{ mt: 3, ml: 1 }}
					>
						Save
					</Button>
				</Grid>
			)}
		</Box>
	);
}
