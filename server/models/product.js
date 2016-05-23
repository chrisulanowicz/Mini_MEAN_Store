var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
	item: String,
	image: String,
	description: String,
	quantity: Number,
	created_at: {type: Date, default: Date.now}
});

ProductSchema.path('item').required(true, "Product name cannot be blank");
ProductSchema.path('image').required(true, "Image is required");
ProductSchema.path('quantity').required(true, "Need Initial quantity");
ProductSchema.path('description').required(true, "Description required");

mongoose.model('Product', ProductSchema);