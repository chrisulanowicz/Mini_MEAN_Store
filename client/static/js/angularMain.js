var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider
		.when('/customers', {
			templateUrl: 'views/partials/customers.html'
		})
		.when('/orders', {
			templateUrl: 'views/partials/orders.html'
		})
})