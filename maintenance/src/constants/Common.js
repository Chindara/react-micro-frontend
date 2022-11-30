export const STATUS_CODE = {
	Success: 200,
	Created: 201,
	NoContent: 204,
	HuaweiCommon: 300,
	Forbidden: 403,
	NotFound: 404,
	Conflict: 409,
	UnprocessableEntity: 422,
	InternalServerError: 500,
};

export const LOCAL_STORAGE_CONFIGURATION = {
	token: 'core-token',
};

const COOKIES_OPTIONS = () => {
	const today = new Date();
	const expireAt = new Date(today.getTime() + 60 * 60 * 24 * 1000);
	const path = '/';

	const cookieOptions = {
		Path: path,
		Expire: expireAt,
	};

	return cookieOptions;
};

export const COOKIES_CONFIGURATION = {
	Auth: {
		CookieName: 'auth-cookie',
		UserLogged: true,
		AuthMode: {
			Docubinet: 'docubinet',
			Azure: 'azure',
		},
	},
	CookieOptions: COOKIES_OPTIONS(),
};

export const LICENSE_PLAN_TYPE = {
	Standard: 1,
	Customized: 2,
};

export const TENANT_STATUS = {
	UnFreeze: 0,
	Freeze: 1,
	Active: 3,
	Inactive: 4,
};
