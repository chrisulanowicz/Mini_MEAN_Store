var mongoose = require('mongoose');
var customer = mongoose.model('Customer');
var moment = require('moment');

module.exports = function(){
	return {
		index: function(req, res){
			customer.find({}, null, {sort: {created_at: -1}}, function(error, data){
				if(error){
					console.log(error);
				}
				else{
					for(var idx = 0; idx < data.length; idx++){
						var ago = moment(data[idx].created_at).fromNow();
						data[idx].timeago = ago;
					}
					res.json(data);
				}
			}).lean()
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