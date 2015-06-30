'use strict';

var controllersModule = angular.module('ControllersModule', []);

controllersModule.controller('ListController', ['$scope', '$mdDialog', function($scope, $mdDialog){
	$scope.expList = [
		{"category": "food", "label":"Food", "total":457.23},
		{"category": "clothes", "label":"Clothes", "total":171.99},
		{"category": "gifts", "label":"Gifts", "total":45.99}
	];

	$scope.showAddDialog = function(bucket, event){
		$mdDialog.show({
			controller: AddController,
			templateUrl: 'views/addItem.html',
			parent: angular.element(document.body),
			targetEvent: event
		});
	};
}]);

function AddController($scope, $mdDialog){
	$scope.addItem = function(){
		console.log("Adding item"); 
		$mdDialog.hide()
	};
	$scope.cancel = function(){
		$mdDialog.hide();
	};
	
}
