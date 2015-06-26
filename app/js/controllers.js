'use strict';

var controllersModule = angular.module('ControllersModule', []);

controllersModule.controller('ListController', ['$scope', function($scope){
	$scope.expList = [
		{"category": "food", "label":"Food", "total":457.23},
		{"category": "clothes", "label":"Clothes", "total":171.99},
		{"category": "gifts", "label":"Gifts", "total":45.99}
	];


	console.log("ListController called"); 
}]);