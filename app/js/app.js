'use strict'; 
var myApp = angular.module('myApp',[
	'ui.router',
	'ngMaterial'
	]);

myApp.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/home');
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'views/summary.html'
		});
})

