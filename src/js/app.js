// vendors
var angular = require('angular')
require('angular-route')
require('angular-animate')

// dashboard deps
require("./home/home.js")
require("./cart/cart.js")
require("./about/about.js")
require("./menu.js")


// Main module - This is the dashboard app
var dashboard = angular.module('dashboard', [
    'ngRoute',
    'ngAnimate',

    'dashboard.menu',

    'dashboard.home',
    'dashboard.cart',
    'dashboard.about',
])

dashboard.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!')
  $routeProvider.otherwise({redirectTo: '/home'})

}])