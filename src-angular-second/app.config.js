'use strict';

angular.
  module('app').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $routeProvider.
        when('/', {
          template: '<articles-list></articles-list>'
        }).
        when('/add', {
          template: '<add-article></add-article>'
        }).
        when('/edit/:id', {
          template: '<edit-article></edit-article>'
        }).
        otherwise('/');
    }
  ]);