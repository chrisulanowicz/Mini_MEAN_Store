myApp.factory('CustomerFactory', function($http){
	var factory = {};

	factory.index = function(callback){
		$http.get('/customers').success(function(output){
			customers = output;
			callback(customers);
		})
	}
	factory.create = function(customer, callback){
		$http.post('/customers', customer).success(callback);
	}
	factory.delete = function(id, callback){
		$http.delete('/customers/' + id).success(callback);
	}

	return factory;
});

myApp.factory('OrderFactory', function($http){
	var factory = {};

	factory.index = function(callback){
		$http.get('/orders').success(function(output){
			orders = output;
			callback(orders);
		})
	}
	factory.create = function(order, callback){
		console.log(order);
		$http.post('/orders', order).success(callback);
	}

	return factory;
})