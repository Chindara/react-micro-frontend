import axios from 'axios';

const baseURL = 'http://192.168.4.173:5000/api';

const instance = axios.create({
	baseURL: baseURL,
	headers: {
		'Content-type': 'application/json',
	},
});

export default instance;
