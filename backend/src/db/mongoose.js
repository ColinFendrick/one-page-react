const mongoose = require('mongoose');

console.log('in master');

mongoose.connect(process.env.MONGODB_URL, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false
});
