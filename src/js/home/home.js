var home = angular.module('dashboard.home', ['ngRoute', 'dashboard.api'])

home.config(['$routeProvider', 'ChartJsProvider', function($routeProvider, ChartJsProvider, shoppingListFactory) {

  $routeProvider.when('/home', {
    templateUrl: 'tpl/home.html',
    controller: 'homeCtrl'
  })

  ChartJsProvider.setOptions('line', {
    chartColors: ['#44aa44', '#bbbbbb'],
    legend: {
      display: true,
      position: 'bottom',
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  });

}])

home.controller('homeCtrl', ['$scope', 'shoppingListFactory', function($scope, shoppingListFactory) {
    console.log('homeCtrl -- Started')
    $scope.pageClass = 'page-home'

    $scope.chart = {
      labels: ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet"],
      series: ["Cuisine", "Garage"],
      data: [
        [7, 6, 8, 9, 6, 6, 4], 
        [3, 5, 4, 2, 8, 3, 9]
      ]
    }

    $scope.shoppingList = shoppingListFactory;

    $scope.shoppingList.fetch();

}])

module.exports = home