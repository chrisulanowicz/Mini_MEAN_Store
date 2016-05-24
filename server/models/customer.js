var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Name is required'],
		minlength: [6, 'Name has to be longer than that']
	},
	created_at: {
		type: Date, 
		default: Date.now
	},
	orders: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Order"
	}]
})

mongoose.model('Customer', CustomerSchema);