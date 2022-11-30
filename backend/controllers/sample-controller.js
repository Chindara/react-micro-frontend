const Sample = require('../models/sample');

const getAll = async (req, res, next) => {
	try {
		const samples = await Sample.find();

		res.status(200).json({
			samples: samples.map((sample) => sample.toObject({ getters: true })),
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'Error Occured' });
	}
};

const getById = async (req, res, next) => {
	const id = req?.params?.id;

	try {
		const sample = await Sample.findById(id);

		res.status(200).json(sample.toObject({ getters: true }));
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'Error Occured' });
	}
};

const create = async (req, res, next) => {
	const { name, description, address, date } = req.body;

	try {
		const sample = new Sample({
			name: name,
			description: description,
			address: address,
			date: date,
		});

		await sample.save();
		res.status(201).json({ sampleCreated: true });
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'Error Occured' });
	}
};

const update = async (req, res, next) => {
	const id = req?.params?.id;
	const { name, description, address, date } = req.body;

	try {
		const sample = await Sample.findById(id);
		if (!sample) res.status(404).json({ message: 'Not Found' });

		sample.name = name;
		sample.description = description;
		sample.address = address;
		sample.date = date;

		await sample.save();
		res.status(200).json({ sampleModified: true });
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'Error Occured' });
	}
};

const remove = async (req, res, next) => {
	const id = req?.params?.id;

	try {
		const sample = await Sample.findById(id);
		if (!sample) res.status(404).json({ message: 'Not Found' });

		await sample.remove();
		res.status(200).json({ sampleDeleted: true });
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'Error Occured' });
	}
};

exports.getAll = getAll;
exports.getById = getById;
exports.create = create;
exports.update = update;
exports.remove = remove;
