export const USER_ALERT = {
	Success: {
		Title: 'Success',
		Create: 'User created succussfully',
		Delete: 'User Deleted succussefully',
		Update: 'User updated succussfully',
		PasswordReset: 'Password reset successfully',
		Assign: 'User Assigned succesfully',
		ProfileUpdate: 'Profile updated succesfully',
	},

	Error: {
		Title: 'Error',
		Get: 'Error cccured while retrive User',
		Delete: 'Error cccured while delete User',
		Create: 'Error cccured while Create User',
		Update: 'Error cccured while Update User',
		GetGroupWiseUsers: 'Error occured while opening group wise users',
		GetRoleWiseUsers: 'Error occured while opening role wise users',
		PasswordReset: ' Error occured while resetting password',
		AddAD_User: 'Please log in as a AD user to add AD users',
		FetchAzureUsers: 'Error Fetching Azure Users',
		AzureSSUUnavailable: 'Azure SSO is currently unavailable',
		LogActiveUser: 'Error occured while log active user',
		GetProfilePic: 'Error occured while create profile picture',
		Unlog: 'Error occured while unlog user',
		FetchLDAPUsers: 'Error Fetching LDAP Users',
	},
};

//#region Alerts
export const SIGN_UP_ALERT = {
	Success: {
		SignUpSuccess: 'Sign-Up Successful',
		ActivationSentSuccess: 'Activation Email Sent Successfully',
		ActivationVerified: 'Activation Verified',
		ActivationSuccess: 'Activation Successful',
		UserCreatedSuccess: 'User Created Successfully',
	},
	Warning: {
		SignUpExists: 'Provided Email Is Already Registered',
		ActivationExpired: 'Activation Expired',
	},
	Error: {
		SignUpError: 'Sign-Up Failed',
		ActivationSentError: 'Sending Activation Email Failed',
		ActivationError: 'Activation Error',
		UserCreatedError: 'User Creation Failed',
	},
};

export const LOGIN_ALERT = {
	Warning: {
		InvalidCredentials: 'Invalid User Credentials',
	},
	Error: {
		UserNotFound: 'User Not Found',
		LoginError: 'Login Failed',
	},
};

export const AUTH_ALERT = {
	Warning: {},
	Error: {
		GetLoggedUserError: 'Fetching Logged User Failed',
		SetLoggedUserError: 'Setting Logged User Failed',
	},
};

export const COMPANY_REGISTRATION_ALERT = {
	Success: {
		RegisterCompanySuccess: 'Company Registered Successfully',
	},
	Warning: {
		SectorExists: 'Provided Sector Already Exists',
		EmailExists: 'Provided Email Is Already Registered',
	},
	Error: {
		CreateSectorError: 'Creating Sector Failed',
		GetAutoCompleteOptionsError: 'Fetching Auto Complete Options Failed',
		RegisterCompanyError: 'Company Registration Failed',
	},
};

export const LICENSE_PLAN_ALERT = {
	Success: {
		Create: 'License Plan created succussfully',
		Update: 'License Plan updated succussfully',
		Delete: 'License Plan Deleted succussefully',
	},

	Error: {
		Get: 'Error occured while retrive license plans',
		GetSingleLicensePlanError: 'Error occured while retrive license plan',
		LicensePlanExists: 'License Plan Already Exists. Please try again',
		LicensePlanCreationError: 'License Plan Creation Failed',
		LicensePlanUpdateError: 'License Plan Update Failed',
		LicensePlanDeleteError: 'License Plan Delete Failed',
		LicensePlanOrderChangeError: 'License Plan Order Changing Failed',
	},
};

export const FEATURE_ALERT = {
	Get: 'Error occured while retrive features',
};

export const TENANT_ALERT = {
	Success: {
		Create: 'Tenant created succussfully',
		Update: 'Tenant updated succussfully',
		Freeze: 'Tenant Freeze succussefully',
		UnFreeze: 'Tenant UnFreeze succussefully',
	},

	Error: {
		Get: 'Error occured while retrive companies',
		TenantCreationError: 'Tenant Creation Failed',
		TenantUpdateError: 'Tenant Update Failed',
		GetSingleTenantError: 'Error occured while retrive tenant',
		TenantStatusChangeError: 'Error occured while changing tenant status',
		TenantEmailExistError: 'Tenant Email Already Exists. Please try again',
	},
};

export const FLOW_ALERT = {
	Success: {
		Create: 'Flow created succussfully',
		Update: 'Flow updated succussfully',
		Delete: 'Flow Deleted succussefully',
	},

	Error: {
		Get: 'Error occured while retrive flows',
		FlowCreationError: 'Flow Creation Failed',
		FlowUpdateError: 'Flow Update Failed',
		GetSingleFlowError: 'Error occured while retrive flow',
		FlowDeleteError: 'Flow Delete Failed',
		FlowNameExists: 'Flow Name Already Exists. Please try again',
	},
};

//#endregion Alerts

//#region Field Validations
export const SIGN_UP_VALIDATION_MESSAGE = {
	validateCompany: 'Please enter a valid company',
	validateCountry: 'Please enter a valid country',
	validateFirstName: 'Please enter a valid first name',
	validateLastName: 'Please enter a valid last name',
	validateDesignation: 'Please enter a valid designation',
	validateEmail: 'Please enter a valid email',
	validateMobile: 'Please enter a valid mobile',
	validatePassword: 'Please enter a valid password',
	validateConfirmPassword: 'Please enter a valid confirm password',
	validateConfirmPasswordMatch: `Confirm password and password doesn't match`,
	validatePasswordCharacters:
		'Minimum 8 characters (1 uppercase letter, one number & 1 special character)',
};

export const LOGIN_VALIDATION_MESSAGE = {
	validateEmail: 'Please enter a valid email',
	validatePassword: 'Please enter a valid password',
};

export const SAMPLE_VALIDATION_MESSAGE = {
	validateCompanyName: 'Please enter a valid company name',
	validateBusinessRegistration: 'Please enter a valid business registration',
	validateSector: 'Please enter a valid sector',
	validateAddressLine1: 'Please enter a valid address line',
	validateCity: 'Please enter a valid city',
	validatePostalCode: 'Please enter a valid postal code',
	validateState: 'Please enter a valid state',
	validateCountry: 'Please enter a valid country',
	validatePhone: 'Please enter a valid phone',
	validateEmail: 'Please enter a valid email',
	validatePrimaryContact: 'Please enter a valid primary contact',
};

export const LICENSE_PLAN_VALIDATION_MESSAGE = {
	validateType: 'Please select a valid type',
	validateName: 'Please enter a valid name',
	validateDescription: 'Please enter a valid description',
	validatePerMonthRate: 'Please enter a valid Per Month Rate',
	validatePerYearRate: 'Please enter a valid Per Year Rate',
	validateDesignation: 'Please enter a valid designation',
	validateEmail: 'Please enter a valid email',
	validateMobile: 'Please enter a valid mobile',
	validateFeatures: 'Please enter a valid ',
};

//#endregion Field Validations
