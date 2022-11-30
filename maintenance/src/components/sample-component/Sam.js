import React, { useEffect, useState, useRef } from 'react';
import { TENANT_ALERT } from '../../constants/Message';
import { STATUS_CODE } from '../../constants/Common';
import {
	setAlertSuccess,
	setAlertError,
	setAlertWarning,
} from '../alert/Alert';
import TenantService from '../../services/TenantService';
import CompanyService from '../../services/CompanyService';
import CompanyRegistrationForm from '../company-registration-components/CompanyRegistrationForm';
import AdminUserForm from './AdminUserForm';
import LicensePlanForm from '../license-plan-components/LicensePlanForm';

import Container from '@mui/material/Container';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const initialCompanyState = {
	companyName: '',
	tag: '',
	businessRegistration: '',
	typeOfBusiness: null,
	sector: null,
	addressLine1: '',
	addressLine2: '',
	city: '',
	postalCode: '',
	state: '',
	country: null,
	phone: '',
	fax: '',
	email: '',
	primaryContact: null,
	secondaryContact: null,
	administrator: null,
};

const initialAdminUserState = {
	firstName: '',
	lastName: '',
	password: '',
	email: '',
};

const initialLicensePlanState = {
	type: '',
	name: '',
	description: '',
	perMonthRate: '',
	perYearRate: '',
	currency: 1,
	order: 1,
	licenseFeatures: [],
	createdBy: '',
	createdMachine: '',
	modifiedBy: '',
	modifiedMachine: '',
};

export default function TenantForm({
	error,
	setError,
	setOpenModal,
	modelType,
	setModelType,
	setCompanies,
	licensePlansLength,
	currentTenant,
	features,
	stepper,
}) {
	const childRef = useRef(null);
	const [activeStep, setActiveStep] = useState(0);
	const [companyData, setCompanyData] = useState(initialCompanyState);
	const [adminUserData, setAdminUserData] = useState(initialAdminUserState);
	const [licensePlanData, setLicensePlanData] = useState(
		initialLicensePlanState
	);
	const [tenant] = useState(true);
	const [update, setUpdate] = useState(false);
	const [buttonTitle, setButtonTitle] = useState('Add Tenant');
	const [contactControllers, setContactControllers] = useState(false);

	useEffect(() => {
		if ((modelType === 'edit') | !stepper) {
			const adminUser = {
				firstName: currentTenant.adminUser.name.split(' ')[0],
				lastName: currentTenant.adminUser.name.split(' ')[1],
				password: '',
				email: currentTenant.adminUser.email,
			};

			setUpdate(true);

			setCompanyData(currentTenant.company);
			setAdminUserData(adminUser);
			setLicensePlanData(currentTenant.licensePlan);
			setButtonTitle('Save Tenant');
			setContactControllers(true);
		}
	}, [modelType, currentTenant, stepper]);

	const steps = [
		'Company',
		'Primary Contact',
		'License Plan',
		`Review + ${update ? 'Update' : 'Create'}`,
	];

	const getStepContent = (step) => {
		switch (step) {
			case 0:
				return (
					<CompanyRegistrationForm
						uiComponent={null}
						companyData={companyData}
						setCompanyData={setCompanyData}
						ref={childRef}
						tenant={tenant}
						modelType={modelType}
						contactControllers={contactControllers}
					/>
				);
			case 1:
				return (
					<AdminUserForm
						adminUserData={adminUserData}
						setAdminUserData={setAdminUserData}
						ref={childRef}
						modelType={modelType}
						stepper={stepper}
					/>
				);
			case 2:
				return (
					<LicensePlanForm
						error={error}
						setError={setError}
						modelType={modelType}
						features={features}
						licensePlansLength={licensePlansLength}
						licensePlanData={licensePlanData}
						setLicensePlanData={setLicensePlanData}
						ref={childRef}
						tenant={tenant}
					/>
				);
			case 3:
				return (
					<Box>
						<Box mb={3}>
							<Typography variant='h6'>Company</Typography>
							<Divider sx={{ borderWidth: '1px', marginBottom: '30px' }} />
							<CompanyRegistrationForm
								uiComponent={null}
								companyData={companyData}
								setCompanyData={setCompanyData}
								ref={childRef}
								tenant={tenant}
								modelType={modelType}
								contactControllers={contactControllers}
							/>
						</Box>
						{update ? null : (
							<Box my={3}>
								<Typography variant='h6'>Primary Contact</Typography>
								<Divider sx={{ borderWidth: '1px', marginBottom: '30px' }} />
								<AdminUserForm
									adminUserData={adminUserData}
									setAdminUserData={setAdminUserData}
									ref={childRef}
									modelType={modelType}
									stepper={stepper}
								/>
							</Box>
						)}

						<Box my={3}>
							<Typography variant='h6'>License Plan</Typography>
							<Divider sx={{ borderWidth: '1px', marginBottom: '30px' }} />
							<LicensePlanForm
								error={error}
								setError={setError}
								modelType={modelType}
								features={features}
								licensePlansLength={licensePlansLength}
								licensePlanData={licensePlanData}
								setLicensePlanData={setLicensePlanData}
								ref={childRef}
								tenant={tenant}
							/>
						</Box>
					</Box>
				);
			default:
				throw new Error('Unknown step');
		}
	};

	const handleNext = () => {
		let isDataValid = false;

		activeStep === 0 && (isDataValid = childRef.current.handleCompanyData());

		!update &&
			activeStep === 1 &&
			(isDataValid = childRef.current.handleAdminUserData());

		activeStep === 2 &&
			(isDataValid = childRef.current.handleLicensePlanData());

		if (isDataValid && activeStep === 2) {
			setModelType('view');
		}

		isDataValid &&
			setActiveStep(
				update && activeStep === 0 ? activeStep + 2 : activeStep + 1
			);
	};

	const handleBack = () => {
		activeStep === 3 && setModelType('create');
		setActiveStep(update && activeStep === 2 ? activeStep - 2 : activeStep - 1);
	};

	const handleTenant = async () => {
		let data = {
			company: companyData,
			adminUser: adminUserData,
			licensePlan: licensePlanData,
		};

		try {
			if (update) {
				await TenantService.updateTenant(currentTenant.company.id, data);

				setAlertSuccess(TENANT_ALERT.Success.Update);
			} else {
				await TenantService.createTenant(data);

				setAlertSuccess(TENANT_ALERT.Success.Create);
			}

			const response = await CompanyService.getAllCompanies();
			setCompanies(response.data.companies);

			setOpenModal(false);
		} catch (err) {
			if (err.response.status === STATUS_CODE.Conflict) {
				setAlertWarning(TENANT_ALERT.Error.TenantEmailExistError);
				return;
			}

			if (update) {
				setAlertError(TENANT_ALERT.Error.TenantUpdateError);
			} else {
				setAlertError(TENANT_ALERT.Error.TenantCreationError);
			}
		}
	};

	return (
		<Container component='main' sx={{}}>
			{stepper ? (
				<>
					<Stepper
						activeStep={update && activeStep > 0 ? activeStep - 1 : activeStep}
						sx={{ pt: 3, pb: 5 }}
					>
						{steps.map((label, index) => {
							if (update && index === 1) {
								return null;
							}
							return (
								<Step key={label}>
									<StepLabel>{label}</StepLabel>
								</Step>
							);
						})}
					</Stepper>

					{getStepContent(activeStep)}

					<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
						{activeStep !== 0 && (
							<Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
								Back
							</Button>
						)}

						<Button
							variant='contained'
							onClick={
								activeStep === steps.length - 1 ? handleTenant : handleNext
							}
							sx={{ mt: 3, ml: 1 }}
						>
							{activeStep === steps.length - 1 ? buttonTitle : 'Next'}
						</Button>
					</Box>
				</>
			) : (
				getStepContent(3)
			)}
		</Container>
	);
}
