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

	function getOrders(){
		OrderFactory.index(function(data){
			$scope.orders = data;
		})
	}
	getOrders();

	$scope.addOrder = function(newOrder){
		console.log($scope.$parent);
		console.log($scope.newOrder);
		// OrderFactory.create(newOrder, getOrders)
	}

})