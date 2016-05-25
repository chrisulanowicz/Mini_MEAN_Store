var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider
		.when('/dashboard', {
			templateUrl: 'views/partials/dashboard.html'
		})
		.when('/products', {
			templateUrl: 'views/partials/products.html'
		})
		.when('/orders', {
			templateUrl: 'views/partials/orders.html'
		})
		.when('/customers', {
			templateUrl: 'views/partials/customers.html'
		})
		.when('/settings', {
			templateUrl: 'views/partials/settings.html'
		})
		// .when('/logout', {
		// 	templateUrl: 'index.html'
		// })
})