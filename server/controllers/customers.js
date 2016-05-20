var mongoose = require('mongoose');
var customer = mongoose.model('Customer');

module.exports = function(){
	return {
		index: function(req, res){
			customer.find({}, function(error, data){
				if(error){
					console.log(error);
				}
				else{
					res.json(data);
				}
			})
		},
		create: function(req, res){
			var newCustomer = new customer(req.body);
			newCustomer.save(function(error){
				if(error){
					console.log(error);
				}
				else{
					res.json(newCustomer);
				}
			})
		},
		delete: function(req, res){
			customer.remove({_id: req.params.id}, function(error){
				if(error){
					console.log(error);
				}
				else{
					res.json(true);
				}
			})
		}
	}
}();