myApp.factory('CustomerFactory', function($http){
	var factory = {};

	factory.index = function(callback){
		$http.get('/customers').success(function(output){
			customers = output;
			callback(customers);
		})
	}
	factory.create = function(customer, callback, errcallback){
		$http.post('/customers', customer).success(callback).error(function(output){
			errors = output;
			errcallback(errors);
		});
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
	factory.create = function(order, callback, errcallback){
		$http.post('/orders', order).success(callback).error(function(output){
			errors = output;
			errcallback(errors);
		});
	}

	return factory;
});

myApp.factory('ProductFactory', function($http){
	var factory = {};

	factory.index = function(callback){
		$http.get('/products').success(function(output){
			products = output;
			callback(products);
		})
	}
	factory.create = function(product, callback, errcallback){
		$http.post('/products', product).success(callback).error(function(output){
			errors = output;
			errcallback(errors);
		});
	}

	return factory;
})