'use strict';

describe('Directive: elevatorPitch', function () {
  beforeEach(module('onlineRetailApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<elevator-pitch></elevator-pitch>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the elevatorPitch directive');
  }));
});
