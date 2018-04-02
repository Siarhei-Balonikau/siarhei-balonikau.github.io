'use strict';

angular.
  module('app').
  directive('addForm', function() {
    return {
      restrict: 'A',
      templateUrl: 'src/directives/add-form/add-form.template.html',
      controllerAs: 'vm',
      scope: {
        type: '@'
      },
      controller: ['$scope', '$routeParams', 'articleFactory', function AddFormController($scope, $routeParams, articleFactory) {
        var vm = this;
        
        vm.submit = function() {
          switch ($scope.type) {
            case 'edit':
              articleFactory.edit(
                {
                  _id: $routeParams.id,
                  title: vm.articleName,
                  text: vm.articleText,
                  author: vm.articleAuthor
                }
              );
              break;
              
            case 'add':
              articleFactory.save(
                {
                  title: vm.articleName,
                  text: vm.articleText,
                  date: new Date(),
                  author: vm.articleAuthor
                }
              );
              
              vm.articleName = '';
              vm.articleText = '';
              vm.articleAuthor = '';
            
              break;
          }
        }
      }],
    };
  });