var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
	name: String,
	created_at: {type: Date, default: Date.now},
	orders: [{type: mongoose.Schema.Types.ObjectId, ref: "Order"}]
})

mongoose.model('Customer', CustomerSchema);