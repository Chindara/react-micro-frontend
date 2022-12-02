import React from 'react';

export default function IndexController() {
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
