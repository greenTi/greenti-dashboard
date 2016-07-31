var home = angular.module('dashboard.home', ['ngRoute'])

home.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/home', {
    templateUrl: 'tpl/home.html',
    controller: 'homeCtrl'
  })

}])

home.controller('homeCtrl', ['$scope', function($scope) {
    console.log('homeCtrl -- Started')
    $scope.pageClass = 'page-home'

}])

module.exports = home