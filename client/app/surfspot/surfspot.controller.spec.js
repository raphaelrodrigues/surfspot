'use strict';

describe('Controller: SurfspotCtrl', function () {

  // load the controller's module
  beforeEach(module('surfguruApp'));

  var SurfspotCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SurfspotCtrl = $controller('SurfspotCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
