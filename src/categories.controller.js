(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['items'];
  function CategoriesController(items) {
    var categories = this;
    categories.items = items.data.menu_items;
    console.log(categories.items);

  }

})();
