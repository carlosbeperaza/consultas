'use strict';
/**
 * Clip-Two Main Controller
 */
app.controller('AppCtrl', ['$rootScope', '$scope', '$state', '$location', '$auth', '$http',
    function ($rootScope, $scope, $state, $location, $auth, $http) {        

        $scope.logout = function (event) {
            if (window.confirm("logout?") === true) {
                $auth.removeToken();
                $auth.logout();
                $location.path('/login');  
            } 
        };
//         if ($auth.isAuthenticated() && toState && toState !== fromState) {

        
}]);

app.run(function ($rootScope, $location,$auth) {

    // enumerate routes that don't need authentication
    var routesThatDontRequireAuth = ['/login'];

    // check if current location matches route  
    var routeClean = function (route) {
      return find(routesThatDontRequireAuth,
        function (noAuthRoute) {
          return startsWith(route, noAuthRoute);
        });
    };

    $rootScope.$on('$stateChangeStart', function (ev, to, toParams, from, fromParams) {
      // if route requires auth and user is not logged in
      if (!routeClean($location.url()) && ! $auth.isAuthenticated()) {
        // redirect back to login
        $location.path('/login');
      }
    });
});

