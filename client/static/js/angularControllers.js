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
})