var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');
var moment = require('moment');

module.exports = function(){
	return {
		index: function(req, res){
			Order.find({})
				.lean()
				.populate('_customer')
				.populate('_product')
				.sort({created_at: -1})
				.exec(function(error, orders){
				if(error){
					console.log(error);
				}
				else{
					for(var i = 0;i<orders.length;i++){
						if(orders[i]._customer == null){
							orders[i]._customer = {name: "User no longer registered"};
						}
						var ago = moment(orders[i].created_at).fromNow();
						orders[i].timeago = ago;
					}
					res.json(orders);
				}	
			})
		},
		create: function(req, res){
			var newOrder = new Order(req.body);
			Product.findOne({_id: newOrder._product}, function(error, product){
				newOrder.save(function(error){
					if(error){
						console.log(error);
					}
					else{
						product.quantity -= newOrder.quantity;
						product.save({}, function(error){
							if(error){
								console.log(error);
							}
							else{
								res.json(newOrder);
							}
						})
					}
				})
			})
		}
	}
}();