(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    // Set up UI states

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/home.template.html'
      })
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/categories.template.html',
        controller: 'MenuController as menuctrl',
        resolve: {
          categories: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })
      .state('items', {
        url: '/items/{category}',
        templateUrl: 'src/items.template.html',
        controller: 'CategoriesController as catctrl',
        resolve: {
          items: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.category);
          }]
        }
      });
  }


})();
