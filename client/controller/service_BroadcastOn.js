// you can reference app via angular.module(<name>) or by the javascript variable created previously - app

angular.module('myModule')
//app
.service('serviceBroadcastOn', ['$rootScope', function ($rootScope) {
	var names = []

    // get
    this.getNames = function () {
        return names
    }

    this.addName = function(name) {
    	names.push(name)
    	$rootScope.$broadcast('nameAdded')

    }

}])