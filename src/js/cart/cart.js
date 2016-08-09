var cart = angular.module('dashboard.cart', ['ngRoute'])

cart.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/cart', {
    templateUrl: 'tpl/cart.html',
    controller: 'cartCtrl'
  })

}])

cart.controller('cartCtrl', ['$scope', 'shoppingListFactory', 'ngDialog', function($scope, shoppingListFactory, ngDialog) {
    console.log('cartCtrl -- Started')
    $scope.pageClass = 'page-cart'

    $scope.shoppingList = shoppingListFactory
    $scope.shoppingList.fetch()

    $scope.addToCartModal = function() {
      ngDialog.open({
        template: "tpl/addToCartDialog.html",
        controller: ['$scope', function($scope) {
          console.log('modal openned', $scope.pageClass)
        }],
        scope:$scope,
        overlay: true,
        showClose: false,
        closeByEscape: false,
      })
    }
    

}])

module.exports = cart