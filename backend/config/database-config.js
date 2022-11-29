const mongoose = require('mongoose');
const { ATLAS_URI } = require('./environment-config');

const connectMongoDB = async () => {
	try {
		await mongoose.connect(ATLAS_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
	} catch (err) {
		console.log(err);
	}
};

module.exports = connectMongoDB;
