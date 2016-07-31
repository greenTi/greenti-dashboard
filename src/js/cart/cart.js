var cart = angular.module('dashboard.cart', ['ngRoute'])

cart.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/cart', {
    templateUrl: 'tpl/cart.html',
    controller: 'cartCtrl'
  })

}])

cart.controller('cartCtrl', ['$scope', function($scope) {
    console.log('cartCtrl -- Started')
    $scope.pageClass = 'page-cart'

}])

module.exports = cart