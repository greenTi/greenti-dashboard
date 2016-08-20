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

    $scope.isLoading = false;

    $scope.shoppingList = shoppingListFactory

    $scope.load = function() {
      if($scope.isLoading) return // safe...
      $scope.isLoading = true;
      $scope.shoppingList.fetch().then(function() {
        $scope.isLoading = false;
      })

    }
    


    $scope.addToCartModal = function() {
      var dialog = ngDialog.open({
        template: "tpl/addToCartDialog.html",
        controller: ['$scope', function($scope) {
          console.log('modal openned', $scope.pageClass)
          $scope.save = function(newItem) {
            if(!!newItem.title && !!newItem.code){
              dialog.close(newItem);
              console.log("adding new item", newItem);
            }
            
          }
        }],
        scope:$scope,
        overlay: true,
        showClose: false,
        closeByEscape: false,
      })

      dialog.closePromise.then(function(data){
        var newItem = data.value
        if(!!newItem.title && !!newItem.code) {
          // client side
          $scope.shoppingList.list.push({title: newItem.title, code: newItem.code, checked: newItem.checked})

          // server side
          $scope.shoppingList.add(newItem)
          
        }
      })
    }

    $scope.toggleCheck = function(index, newState) {
      var item = $scope.shoppingList.list[index]
      // client side
      item.checked = newState

      // server side
      $scope.shoppingList.update(index, item)
    }

    $scope.delete = function(index) {
      // client side
      $scope.shoppingList.list.splice(index, 1)

      // server side
      $scope.shoppingList.delete(index)
    }
    

}])

module.exports = cart