'use strict';

angular.module('gubiParkingApp.auth', [
  'gubiParkingApp.constants',
  'gubiParkingApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
