'use strict';

describe('Controller: ElevatorPitchCtrl', function () {

  // load the controller's module
  beforeEach(module('onlineRetailApp'));

  var ElevatorPitchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ElevatorPitchCtrl = $controller('ElevatorPitchCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
