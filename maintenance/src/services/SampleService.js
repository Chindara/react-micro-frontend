import http from '../common/http-common';

const getAllSample = (id) => {
	return http.get(`/sample/get-all-sample`);
};

const getSampleById = (id) => {
	return http.get(`/sample/get-by-id/${id}`);
};

const createSample = (data) => {
	return http.post(`/sample/create-sample`, data);
};

const updateSample = (id, data) => {
	return http.put(`/sample/update-sample/${id}`, data);
};

const deleteSample = (id) => {
	return http.delete(`/sample/remove-sample/${id}`);
};

const exportTaskService = {
	getAllSample,
	getSampleById,
	createSample,
	updateSample,
	deleteSample,
};

export default exportTaskService;
