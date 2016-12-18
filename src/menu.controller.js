(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('MenuController', MenuController);

  MenuController.$inject = ['categories'];
  function MenuController(categories) {
    var menu = this;
    console.log(categories.data);
    menu.categories = categories.data;
  }

})();
