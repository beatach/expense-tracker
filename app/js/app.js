'use strict'; 
var myApp = angular.module('myApp',[
	'ngRoute',
	'ngMaterial'
//	'SummaryController'
	]);

myApp.config(['$routeProvider',function($routeProvider){
	$routeProvider.
	when('/summary', {
		templateUrl: 'views/summary.html'
	//	controller: 'SummaryController'
	}).
	otherwise({
		redirectTo: '/summary'
	});
}])
//
//myApp.controller('SummaryController', function(){
//	console.log("SummaryController called"); 
//})
