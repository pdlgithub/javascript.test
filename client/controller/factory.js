angular.module('myModule')
.factory('myFactory', function () {
  return {
    sayHello: function () {
      return "Hi " + name + "!";
    }
  }
});