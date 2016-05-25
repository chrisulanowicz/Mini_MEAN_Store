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
		console.log(id);
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
});

myApp.factory('LoginFactory', function($http){
	var factory = {};
	// var loggedUser = {};

	factory.show = function(name, callback, errcallback){
		var loggedUser = {};
		var name = name.name;
		// var name = name.name.toLowerCase();
		console.log(name);
		$http.get('/customers/' + name)
			.success(function(output){
				customer = output;
				callback(customer);
			})
			.error(function(output){
				problem = output;
				errcallback(problem);
			});
	}

	factory.authenticate = function(user, callback){
		loggedUser = user;
		callback(loggedUser);
	}

	// factory.getLoggedUser = function(){
	// 	return loggedUser;
	// }

	factory.logout = function(){
		loggedUser = null;
	}
	return factory;
})







