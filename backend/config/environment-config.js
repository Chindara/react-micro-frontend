const dotenv = require('dotenv');
const environment = process.env.NODE_ENV;
let result = null;

if (environment === 'development')
	result = dotenv.config({ path: './.env.development' });

if (environment === 'production')
	result = dotenv.config({ path: './.env.production' });

if (result.error) throw result.error;

const { parsed: environmentVariables } = result;
environmentVariables['ENVIRONMENT'] = environment;

module.exports = environmentVariables;
