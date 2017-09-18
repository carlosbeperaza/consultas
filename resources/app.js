'use strict';

angular.module("moduleDependencies", 
    //cargar toda las dependecias para el modulo de la applicacion
    ['ui.router','oc.lazyLoad','satellizer']);

// var routerApp = angular.module('routerApp', ['ui.router']);

// routerApp.config(function($stateProvider, $urlRouterProvider) {

    // $urlRouterProvider.otherwise('/home');

    // $stateProvider

    //     // HOME STATES AND NESTED VIEWS ========================================
    //     .state('home', {
    //         url: '/home',
    //         templateUrl: 'partial-home.html'
    //     })

    //     .state('about', {
    //         url: '/about',
    //         templateUrl: 'partial-about.html'
    //     })

    //      // nested list with custom controller
    //     .state('home.list', {
    //         url: '/list',
    //         templateUrl: 'partial-home-list.html',
    //         controller: function($scope) {
    //             $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
    //         }
    //     })

    // // nested list with just some random string data
    // .state('home.paragraph', {
    //     url: '/paragraph',
    //     template: 'I could sure use a drink right now.'
    // })

// });