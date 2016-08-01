var menu = angular.module('dashboard.menu', [])

menu.controller('navCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.isActive = function(path) {
        return $location.path() == path
    }

    $scope.toggleMenu = function() {
        document.body.classList.toggle('menu-visible')
    }
}])

module.exports = menu