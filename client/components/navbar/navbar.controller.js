'use strict';

angular.module('surfguruApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': '',
      'link': '/'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });