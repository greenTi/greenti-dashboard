var cart = angular.module('dashboard.cart', ['ngRoute'])

cart.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/cart', {
    templateUrl: 'tpl/cart.html',
    controller: 'cartCtrl'
  })

}])

cart.controller('cartCtrl', ['$scope', 'shoppingListFactory', function($scope, shoppingListFactory) {
    console.log('cartCtrl -- Started')
    $scope.pageClass = 'page-cart'

    $scope.shoppingList = shoppingListFactory
    $scope.shoppingList.fetch()


}])

module.exports = cart