angular.module('myModule', [])
  .provider("game", function () {
    var type;
    return {
      setType: function (value) {
        type = value;
      },
      $get: function () {
        return {
          title: type + "Craft"
        };
      }
    };
  });