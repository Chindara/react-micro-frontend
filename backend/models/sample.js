const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sampleSchema = new Schema(
	{
		name: { type: String, maxlength: 100, default: '' },
		description: { type: String, maxlength: 200, default: '' },
		address: { type: String, default: '' },
		date: { type: Date, default: '' },
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Sample', sampleSchema, 'Sample');
