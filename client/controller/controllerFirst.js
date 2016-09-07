"use strict"

//const app = angular.module('myModule', [])
app.constant('MYCONSTANT', 'some constant value here')

// firstController
app.controller('controllerFirst', ['$scope', 'MYCONSTANT', function($scope, MYCONSTANT) {
	//console.log(MYCONSTANT);
	$scope.message = "hello from controllerFirst"
		// for some reason need to wrap $scope.names in parenthesis
	
}]);	// end controller1


