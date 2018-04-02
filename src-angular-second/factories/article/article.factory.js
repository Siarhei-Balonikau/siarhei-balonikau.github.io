'use strict';

angular.
  module('app').
  factory("articleFactory", function($resource){
      return $resource('http://localhost:3000/blog/:id', { id: '@_id' }, {
        'query': { method: 'GET', isArray:true },
        'save':  { method: 'POST' },
        'edit':  { method: 'PUT' },
      });
  });