'use strict';

angular.
  module('app').
  component('articlesList', {
    templateUrl: 'src/components/articles-list/articles-list.template.html',
    controller: ['articleFactory', function ArticlesListController(articleFactory) {
      this.articles = [];
      
      var articlePromise = articleFactory.query();
      articlePromise.$promise.then((data) => {
        for (var i=0; i < data.length; i++) {
          this.articles.push(data[i]);
        }
      });
    }]
  });