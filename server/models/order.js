var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
	_product: {type: mongoose.Schema.Types.ObjectId, ref: "Product"},
	quantity: Number,
	created_at: {type: Date, default: Date.now},
	_customer: {type: mongoose.Schema.Types.ObjectId, ref: "Customer"}
})

mongoose.model('Order', OrderSchema);