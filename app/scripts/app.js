var portfolio = angular.module('portfolio', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/', {
			template: 'Home'
		}).otherwise({
			redirectTo: '/'
		});
	}]);
