// you can reference app via angular.module(<name>) or by the javascript variable created previously - app

angular.module('myModule')
//app
.service('myService1', function () {

    // get
    this.get = function () {
        return ['some', 'array', 'here'];
    }

})