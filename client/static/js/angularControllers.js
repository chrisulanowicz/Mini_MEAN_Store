myApp.controller('CustomersController', function($scope, CustomerFactory){

	$scope.validationError = null;

	function getCustomers(){
		CustomerFactory.index(function(data){
			$scope.customers = data;
		})
	}
	getCustomers();

	$scope.addCustomer = function(){
		$scope.validationError = null;
		CustomerFactory.create($scope.newCustomer, getCustomers, function(errors){
		$scope.validationError = errors;
		});
		$scope.newCustomer = {};
	}
	 $scope.removeCustomer = function(id){
	 	CustomerFactory.delete(id, getCustomers);
	 }
});

myApp.controller('OrdersController', function($scope, OrderFactory){

	$scope.userInput = {};
	$scope.validationError = null;

	function getOrders(){
		OrderFactory.index(function(data){
			$scope.orders = data;
		})
	}
	getOrders();

	$scope.addOrder = function(newOrder){
		OrderFactory.create(newOrder, getOrders, function(errors){
			$scope.validationError = errors;
			console.log($scope.validationError);
		});
		$scope.newOrder = {};
	}

	$scope.orderSearch = function(){
		for(property in $scope.userInput){
			$scope.search = {};
			console.log($scope.userInput);
			console.log(property);
			console.log($scope.userInput[property]);
			$scope.search[property] = $scope.userInput[property];
			console.log($scope.search);
			$scope.userInput = {};
		}
	}

});

myApp.controller('ProductsController', function($scope, ProductFactory){

	$scope.userInput = {};
	$scope.validationError = null;

	function getProducts(){
		ProductFactory.index(function(data){
			$scope.products = data;
		})
	}

	getProducts();

	$scope.addProduct = function(){
		ProductFactory.create($scope.newProduct, getProducts, function(errors){
			console.log(errors);
			$scope.validationError = errors;
		});
		$scope.newProduct = {};
	}

	$scope.applySearch = function(){
		for(property in $scope.userInput){
			$scope.search = {};
			console.log($scope.userInput);
			console.log(property);
			console.log($scope.userInput[property]);
			$scope.search[property] = $scope.userInput[property];
			$scope.userInput = {};
		}
	}
});

myApp.controller('LoginController', function($scope, LoginFactory, CustomerFactory){
	// $scope.loggedUser = null;
	$scope.validationError = null;

	// LoginFactory.getLoggedUser(function(data){
	// 	$scope.loggedUser = data;
	// })

	function setLogin(result){
		if(result == null){
			$scope.validationError = null;
			CustomerFactory.create($scope.newLogin, setLogin, function(errors){
				$scope.validationError = errors;
				console.log($scope.validationError);
				console.log($scope.validationError.errors['name']);
				console.log($scope.validationError.errors['name'].message);
			});
		}
		else{
			LoginFactory.authenticate(result, function(data){
				$scope.loggedUser = data;
			})
			$scope.newLogin = {};

		}
	}

	$scope.login = function(){
		LoginFactory.show($scope.newLogin, setLogin, function(errors){
			console.log(errors);
		})
	}

	$scope.logout = function(){
		console.log('clicked logout');
		LoginFactory.logout();
	}
})





