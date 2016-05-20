var mongoose = require('mongoose');
var order = mongoose.model('Order');

module.exports = function(){
	return {
		index: function(req, res){
			order.find({})
				.populate('_customer')
				.exec(function(error, results){
				if(error){
					console.log(error);
				}
				else{
					res.json(results);
				}	
			})
		},
		create: function(req, res){
			console.log(req.body);
			var newOrder = new order(req.body);
			newOrder.save(function(error){
				if(error){
					console.log(error);
				}
				else{
					res.json(newOrder);
				}
			})
		}
	}
}();