var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
	item: {
		type: String,
		required: [true, 'Product name required']
	},
	image: {
		type: String,
		required: [true, 'Image is required']
		// match: [/\.jpg$/, 'Image must be in .jpg format']
	},
	description: {
		type: String,
		required: [true, 'Description required']
	},
	quantity: {
		type: Number,
		required: [true, 'Initial quantity must be set']
	},
	created_at: {
		type: Date, 
		default: Date.now
	}
});

mongoose.model('Product', ProductSchema);