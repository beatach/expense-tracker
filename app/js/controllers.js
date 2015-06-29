'use strict';

var controllersModule = angular.module('ControllersModule', []);

controllersModule.controller('ListController', ['$scope', '$mdDialog', function($scope, $mdDialog){
	$scope.expList = [
		{"category": "food", "label":"Food", "total":457.23},
		{"category": "clothes", "label":"Clothes", "total":171.99},
		{"category": "gifts", "label":"Gifts", "total":45.99}
	];

	$scope.addItem = function(bucket, event){
		$mdDialog.show({
			controller: AddController,
			templateUrl: 'addItem.html',
			parent: angular.element(document.body),
			targetEvent: event
		});
	};
}]);

function AddController($scope, $mdDialog){
	$scope.hide = function(){
		$mdDialog.hide();
	};
	$scope.cancel = function(){
		$mdDialog.cancel();
	};
	$scope.answer = function(){
		$mdDialog.hide(answer); 
	};
}
