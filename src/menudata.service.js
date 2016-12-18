(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;

  service.getAllCategories = function () {
    var path='https://davids-restaurant.herokuapp.com/categories.json'

    var promise = $http({
      method: "GET",
      url: path
    });

    promise.then(function (response) {
      return response.data;
      console.log(response.data);
    }).catch(function (error) {
      console.log(error);
    });

    return promise;
  };

  service.getItemsForCategory = function (categoryShortName) {
    var path='https://davids-restaurant.herokuapp.com/menu_items.json?category='
    // path.concat(categoryShortName)
    var promise = $http({
      method: "GET",
      url: path,
      params:{ category: categoryShortName }
  });

    promise.then(function (response) {
      return response.data.menu_items;
      console.log(response.data.menu_items);
    }).catch(function (error) {
      console.log(error);
    });

    return promise;
  };
}

})();
