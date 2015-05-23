'use strict';

angular.module('surfguruApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('surfspot', {
        url: '/',
        templateUrl: 'app/surfspot/surfspot.html',
        controller: 'SurfspotCtrl'
      });
  });