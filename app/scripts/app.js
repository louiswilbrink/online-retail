'use strict';

angular.module('onlineRetailApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/homePage.html',
        controller: 'HomePageCtrl'
      })
      .when('/navBar', {
        templateUrl: 'views/navBar.html',
        controller: 'NavBarCtrl'
      })
      .when('/hero', {
        templateUrl: 'views/hero.html',
        controller: 'HeroCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
