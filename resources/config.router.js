'use strict';

/**
 * Configuración de las rutas
 */
app.config(['$stateProvider','$urlRouterProvider','$controllerProvider','$ocLazyLoadProvider','JS_REQUIRES', '$provide', '$httpProvider',
	function($stateProvider , $urlRouterProvider,  $controllerProvider,  $ocLazyLoadProvider,  jsRequires,   $provide,   $httpProvider){

	app.controller = $controllerProvider.register;
    // app.directive = $compileProvider.directive;
    app.factory = $provide.factory;
    app.service = $provide.service;
    app.constant = $provide.constant;
    app.value = $provide.value;

    // LAZY MODULES
    $ocLazyLoadProvider.config({
        debug: false,
        events: true,
        modules: jsRequires.modules
    });

	$urlRouterProvider.otherwise('/dashboard');

    $stateProvider
        // HOME STATES AND NESTED VIEWS ========================================
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'dashboard/DashboardCtrl',
            resolve: loadSequence('dashboardCtrl','dashboardService')

        })
        .state('forms', {
            url: '/forms',
            templateUrl: 'forms/formsCtrl'
        })
        .state('charts', {
            url: '/charts',
            templateUrl: 'charts/chartsCtrl'
        })
        .state('tables', {
            url: '/tables',
            templateUrl: 'tables/tablesCtrl'
        })
        .state('consulta', {
            url: '/consulta',
            templateUrl: 'consulta/consultaCtrl'
        })
        // .state('login', {
        //     url: '/login',
        //     templateUrl: 'partials/login.html'
        // })
         // nested list with custom controller
        // .state('home.list', {
        //     url: '/list',
        //     templateUrl: 'partials/partial-home-list.html',
        //     controller: function($scope) {
        //         $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        //     }
        // })
        // // nested list with just some random string data
        // .state('home.paragraph', {
        //     url: '/paragraph',
        //     template: 'I could sure use a drink right now.'
        // })
        ;


    // Generates a resolve object previously configured in constant.JS_REQUIRES (config.constant.js)
        function loadSequence() {
            var _args = arguments;
            return {
                deps: ['$ocLazyLoad', '$q',
                    function ($ocLL, $q) {
                        var promise = $q.when(1);
                        for (var i = 0, len = _args.length; i < len; i++) {
                            promise = promiseThen(_args[i]);
                        }
                        return promise;

                        function promiseThen(_arg) {
                            if (typeof _arg === 'function')
                                return promise.then(_arg);
                            else
                                return promise.then(function () {
                                    var nowLoad = requiredData(_arg);
                                    if (!nowLoad)
                                        return $.error('Route resolve: Bad resource name [' + _arg + ']');
                                    return $ocLL.load(nowLoad);
                                });
                        }

                        function requiredData(name) {
                            if (jsRequires.modules)
                                for (var m in jsRequires.modules)
                                    if (jsRequires.modules[m].name && jsRequires.modules[m].name === name)
                                        return jsRequires.modules[m];
                            return jsRequires.scripts && jsRequires.scripts[name];
                        }
                    }]
            };
        }


}]);