import axios from 'axios';

const baseURL = 'http://localhost:5000/';

const instance = axios.create({
	baseURL: baseURL,
	headers: {
		'Content-type': 'application/json',
	},
});

export default instance;
