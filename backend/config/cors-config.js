const corsConfig = (req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Cross-Origin-Resource-Policy', 'cross-origin');
	res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	res.header('Access-Control-Expose-Headers', 'Content-Range, X-Content-Range');
	next();
};

module.exports = corsConfig;
