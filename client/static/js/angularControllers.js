myApp.controller('CustomersController', function($scope, CustomerFactory){

	function getCustomers(){
		CustomerFactory.index(function(data){
			$scope.customers = data;
		})
	}
	getCustomers();

	$scope.addCustomer = function(){
		CustomerFactory.create($scope.newCustomer, getCustomers);
		$scope.newCustomer = {};
	}
	 $scope.removeCustomer = function(id){
	 	CustomerFactory.delete(id, getCustomers);
	 }
});

myApp.controller('OrdersController', function($scope, OrderFactory){

	$scope.userInput = {};

	function getOrders(){
		OrderFactory.index(function(data){
			$scope.orders = data;
		})
	}
	getOrders();

	$scope.addOrder = function(newOrder){
		OrderFactory.create(newOrder, getOrders);
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

	function getProducts(){
		ProductFactory.index(function(data){
			$scope.products = data;
		})
	}

	getProducts();

	$scope.addProduct = function(){
		ProductFactory.create($scope.newProduct, getProducts);
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