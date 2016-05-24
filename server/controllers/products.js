var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = function(){
	return{
		index: function(req, res){
			Product.find({}, function(error, products){
				if(error){
					console.log(error);
				}
				else{
					res.json(products);
				}
			})
		},
		create: function(req, res){
			var newProduct = new Product(req.body);
			newProduct.save(function(error){
				if(error){
					res.status(400);
					res.json(error);
				}
				else{
					res.json(true);
				}
			})
		}
	}
}();