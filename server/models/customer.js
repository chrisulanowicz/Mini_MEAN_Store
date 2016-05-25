var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var CustomerSchema = new mongoose.Schema({
	name: {
		type: String,
		lowercase: true,
		required: [true, 'Name is required'],
		minlength: [6, 'Name has to be longer than that'],
		unique: [true, 'Name already exists']
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

CustomerSchema.plugin(uniqueValidator, {message: 'Name already exists'});
mongoose.model('Customer', CustomerSchema);