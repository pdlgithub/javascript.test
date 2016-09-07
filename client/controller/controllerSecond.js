"use strict"

//const app = angular.module('myModule', [])
app.constant('MYCONSTANT', 'some constant value here')

// Controller
app.controller('controllerSecond', ['$scope', 'MYCONSTANT', function($scope, MYCONSTANT) {
	//onsole.log(MYCONSTANT);
	$scope.message = "hello from controllerSecond"
		// for some reason need to wrap $scope.names in parenthesis
	
}]);	// end controller1


