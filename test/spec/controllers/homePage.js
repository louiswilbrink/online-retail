'use strict';

describe('Controller: HomePageCtrl', function () {

  // load the controller's module
  beforeEach(module('onlineRetailApp'));

  var HomePageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomePageCtrl = $controller('HomePageCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
