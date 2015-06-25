'use strict'; 
var myApp = angular.module('myApp',[
	'ngRoute',
	'ngMaterial',
	'ControllersModule'
	]);

myApp.config(['$routeProvider',function($routeProvider){
	$routeProvider.
	when('/summary', {
		templateUrl: 'views/summary.html',
		controller: 'ListController'
	}).
	otherwise({
		redirectTo: '/summary'
	});
}])
