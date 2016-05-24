var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
	_product: {
		type: mongoose.Schema.Types.ObjectId, 
		ref: "Product",
		required: [true, "Please choose a product for purchase"]
	},
	quantity: {
		type: Number,
		required: [true, "Please choose a quantity"]
	},
	created_at: {
		type: Date, 
		default: Date.now
	},
	_customer: {
		type: mongoose.Schema.Types.ObjectId, 
		ref: "Customer",
		required: [true, "Please choose buyer"]
	}
})

mongoose.model('Order', OrderSchema);