var about = angular.module('dashboard.about', ['ngRoute'])

about.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/about', {
    templateUrl: 'tpl/about.html',
    controller: 'aboutCtrl'
  })

}])

about.controller('aboutCtrl', ['$scope', function($scope) {
    console.log('aboutCtrl -- Started')
    $scope.pageClass = 'page-about'

}])

module.exports = about