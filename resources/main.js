var app = angular.module('app', ['moduleDependencies']);

app.run(['$rootScope', '$state', '$stateParams','$location',
    function ($rootScope, $state, $stateParams,$location) {
    
        // Set some reference to access them from any scope
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        // GLOBAL APP SCOPE
        // set below basic information
        $rootScope.app = {
            name: 'X name', // name of your project
            author: 'Micheal Strand', // author's name or company name
            description: 'X Web Application', // brief description
            version: '1.0', // current version
            year: ((new Date()).getFullYear()) // automatic current year (for copyright information)
         
        };
        $rootScope.user = {
            name: 'Micheal Strand',
            job: 'ng-Dev',
            picture: ' '
        };
    }]);