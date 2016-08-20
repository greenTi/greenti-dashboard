// vendors
var angular = require('angular')
require('angular-route')
require('angular-animate')

require('chart.js')
require('angular-chart.js')
require('ng-dialog')

// dashboard deps
require("./menu.js")
require('./api.js')
require('./directives.js')

require("./home/home.js")
require("./cart/cart.js")
require("./about/about.js")


// Main module - This is the dashboard app
var dashboard = angular.module('dashboard', [
    'ngRoute',
    'ngAnimate',
    'ngDialog',

    'chart.js',

    'dashboard.menu',
    'dashboard.api',
    'dashboard.directives',

    'dashboard.home',
    'dashboard.cart',
    'dashboard.about',
])

dashboard.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!')
  $routeProvider.otherwise({redirectTo: '/home'})

}])