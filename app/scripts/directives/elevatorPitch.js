'use strict';

angular.module('onlineRetailApp')
  .directive('elevatorPitch', function () {
    return {
      templateUrl: 'views/elevatorPitch.html',
      restrict: 'E',
      replace: true,
      controller: function ($scope)
      {
          $scope.model = {
            test : "hello"
          };
      },
    };
  });
