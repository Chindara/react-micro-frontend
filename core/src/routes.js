import ChildOne from 'maintenance/ChildOne';
import ChildTwo from 'maintenance/ChildTwo';
import Sample from 'maintenance/Sample';
// prettier-ignore

const routes = [
	// { path: '/', exact: true, name: 'Home' },
	{ path: '/child-one', exact: true, name: 'Main', element: ChildOne },
	{ path: '/child-two', exact: true, name: 'Second', element: ChildTwo },
	{ path: '/sample', exact: true, name: 'sample', element: Sample },
	// {
	// 	path: '/company-registration',
	// 	name: 'Company Registration',
	// 	element: CompanyRegistration,
	// },
	// { path: '/license-plan', name: 'License Plan', element: ViewLicensePlan },
	// {
	// 	path: '/tenant',
	// 	name: 'Tenant',
	// 	element: ViewTenant,
	// },
];

export default routes;
