'use strict';

angular.module('gubiParkingApp', [
  'gubiParkingApp.auth',
  'gubiParkingApp.admin',
  'gubiParkingApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'btford.socket-io',
  'ui.bootstrap',
  'validation.match',
  'googlechart',
  'uiGmapgoogle-maps',
  'firebase'
])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
