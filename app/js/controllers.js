'use strict';

var controllersModule = angular.module('ControllersModule', []);

controllersModule.controller('ListController', ['$scope', function($scope){
	console.log("ListController called"); 
}]);