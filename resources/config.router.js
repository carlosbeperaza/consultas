'use strict';

/**
 * Configuración de las rutas
 */
app.config(['$stateProvider','$urlRouterProvider','$controllerProvider','$compileProvider','$ocLazyLoadProvider','JS_REQUIRES', '$authProvider','$provide', '$httpProvider',
	function($stateProvider , $urlRouterProvider,  $controllerProvider,  $compileProvider, $ocLazyLoadProvider,  jsRequires,$authProvider,  $provide,   $httpProvider){

   
    //Previo a abrir la página, obtengo del local storage el token existente
    app.token = localStorage.getItem($authProvider.tokenName);      

    app.controller = $controllerProvider.register;
    app.directive = $compileProvider.directive;
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
            resolve: loadSequence('signinCtrl', 'sweetalert')
        })
        .state('register', {
            url: '/register',
            templateUrl: 'usuarios/UsuariosCtrl/register',
            resolve: loadSequence('signupCtrl', 'sweetalert')
        })        
        .state('app', {
            url: '/app',
            template: '<div ui-view></div>'
        })        
        .state('app.dashboard', {
            url: '/dashboard',
            templateUrl: 'dashboard/DashboardCtrl',
            resolve: loadSequence('dashboardCtrl','dashboardService', 'sweetalert')
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
            resolve: loadSequence('consultasCtrl','consultasService', 'pacientesService', 'sweetalert', 'usuariosService')
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
        //Setellizer-Token Parameters Configuration  
        var protocol = $location.protocol();
        var host = $location.host();
        var port = $location.port();
        var APIURL = protocol+"://" + host +":" + port;
        $authProvider.loginUrl = APIURL +"/consultas/auth/auth/login";
        $authProvider.signupUrl = APIURL + "/consultas/auth/auth/signup";
        $authProvider.tokenName = "X_AUTH_TOKEN";
        $authProvider.tokenPrefix = "";
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
                    var msg = response.headers('msg');
                    var code = response.headers('code');
                    var newToken = response.headers('X_AUTH_TOKEN');
                    if(response.headers('code') === "0"){
                        var newToken = response.headers('X_AUTH_TOKEN');
                        localStorage.setItem(tokenName, newToken);
                        app.token = localStorage.getItem(tokenName);
                    }
                    if(response.headers('code') === "1"){
                         return $q.reject(response);
                    }
                    if(response.headers('code') === "3"){ 
                        $location.path('/login');
                        swal("¡Token expirado!","Inicie sesión para renovar su token.","warning");
                        return $q.reject(response);
                    }
                    if(response.headers('code') === "4"){ 
                        $location.path('/login');
                        swal("¡Falta el token!","Inicie sesión para obtener un token.","warning");
                        return $q.reject(response);
                    }
                    
                }
                return response || $q.when(response);
            },
            responseError: function (response) { 
                if (response.status === 404) {
                    swal('Oops...','¡No Encontrado...!','error');
                }
                if (response.status === 500) {
                    swal('Oops...','¡Error del Servidor...!','error');
                }
                 if (response.status === 401) {
                    swal('Oops...','¡No Autorizado...!','error');
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
