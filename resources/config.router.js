'use strict';

/**
 * Configuración de las rutas
 */
app.config(['$stateProvider','$urlRouterProvider','$controllerProvider','$ocLazyLoadProvider','JS_REQUIRES', '$authProvider','$provide', '$httpProvider',
	function($stateProvider , $urlRouterProvider,  $controllerProvider,  $ocLazyLoadProvider,  jsRequires,$authProvider,  $provide,   $httpProvider){

   //Setellizer-Token Parameters Configuration
   $authProvider.loginUrl = "http://localhost/consultas/auth/auth/login";
   $authProvider.signupUrl = "http://localhost/consultas/auth/auth/logoutUser";
   $authProvider.tokenName = "X_AUTH_TOKEN";
   $authProvider.tokenPrefix = "";
    //Previo a abrir la página, obtengo del local storage el token existente
    app.token = localStorage.getItem($authProvider.tokenName);
        

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

        $urlRouterProvider.otherwise('/login');

    $stateProvider
        // HOME STATES AND NESTED VIEWS ========================================
        .state('login', {
            url: '/login',
            templateUrl: 'usuarios/UsuariosCtrl',
            resolve: loadSequence('signinCtrl')
        })
        .state('register', {
            url: '/register',
            templateUrl: 'usuarios/UsuariosCtrl/register'
        })        
        .state('app', {
            url: '/app',
            template: '<div ui-view></div>'
        })        
        .state('app.dashboard', {
            url: '/dashboard',
            templateUrl: 'dashboard/DashboardCtrl',
            resolve: loadSequence('dashboardCtrl','dashboardService')
        })
        .state('app.forms', {
            url: '/forms',
            templateUrl: 'forms/formsCtrl'
        })
        .state('app.charts', {
            url: '/charts',
            templateUrl: 'charts/chartsCtrl'
        })
        .state('app.tables', {
            url: '/tables',
            templateUrl: 'tables/tablesCtrl'
        })
        .state('app.consulta', {
            url: '/consulta',
            templateUrl: 'consultas/consultasCtrl',
            resolve: loadSequence('consultasCtrl','consultasService', 'pacientesService')
        })
        .state('app.reverso', {
            url: '/reverso',
            templateUrl: 'consultas/reversoCtrl',
            resolve: loadSequence('reversoCtrl', 'reversoService')
        })
        ;

    $httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type';
    $httpProvider.defaults.headers.common['Access-Control-Max-Age'] = 1;
    $httpProvider.defaults.headers.common['X_AUTH_TOKEN'] = app.token;    
    $httpProvider.defaults.headers.common['Content-Type'] = undefined,
    $httpProvider.defaults.headers.common['Cache-Control'] = 'no-cache',
    
    $httpProvider.interceptors.push(['$q', '$location', function ($q, $location) {
        var config = $authProvider.SatellizerConfig;
        var tokenName = config.tokenPrefix ? config.tokenPrefix + '_' + config.tokenName : config.tokenName;
        return {
            request: function (httpConfig) {
                app.token = localStorage.getItem(tokenName);
                if (app.token && app.token !== 'null' && config.httpInterceptor) {
                    app.token =config.authHeader === 'Authorization' ? 'Bearer ' + app.token : app.token;
                    httpConfig.headers[config.tokenName] = app.token;
                }
                return httpConfig;                                
            },
            response: function (response) {
                if (!response.config.cache) {
                    if(response.data){
                        console.log("data in");
                    }
                    if(response.data.code === 0){
                         var newToken = response.data.X_AUTH_TOKEN;
//                    var oldToken = app.token;
                        localStorage.setItem(tokenName, newToken);
                        app.token = localStorage.getItem(tokenName);
                    }
                    if(response.data.code === 1){
                         return $q.reject(response);
                    }
                     if(response.data.code === 3){     
                         alert("Token expired");
                         $location.path('/login/signin');
                         return $q.reject(response);
                    }
                    
                   
                    
                }
                return response || $q.when(response);
            },
            responseError: function (response) { 
                if (response.status === 404) {
                    alert("NOT FOUND ERROR 400!!");
                }
                if (response.status === 500) {
                    alert("INTERNAL SERVER ERROR 500!!");
                }
                 if (response.status === 401) {
                    $location.path('/login/signin');
                    alert("UNAUTHORIZED 401!!");
                }
                return $q.reject(response);
            }
        };
    }]);
                
                
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
