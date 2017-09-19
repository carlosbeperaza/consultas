'use strict';
/**
 * Clip-Two Main Controller
 */
app.controller('AppCtrl', ['$rootScope', '$scope', '$state', '$location', '$auth', '$http',
    function ($rootScope, $scope, $state, $location, $auth, $http) {
        
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
//            event.preventDefault();
            if ($auth.isAuthenticated() && toState && toState !== fromState) {
                 $location.path(toState.name);
            }else{
                $location.path('/login'); 
            } 
        });
        $scope.logout = function (event) {
            if (window.confirm("logout?") === true) {
                $auth.removeToken();
                $auth.logout();
                $location.path('/login');  
            } 
             
               
            //$auth.removeToken();
            //$auth.logout();
            //$location.path('/login/signin');
        };
        
}]);

