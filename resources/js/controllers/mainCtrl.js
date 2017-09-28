'use strict';
/**
 * Clip-Two Main Controller
 */
app.controller('AppCtrl', ['$rootScope', '$scope', '$state', '$location', '$auth', '$http','$localStorage',
    function ($rootScope, $scope, $state, $location, $auth, $http,$localStorage) {        

        $scope.logout = function (event) {
            swal({
                title: "¡Cerrar Sesión!",
                text: "¿Esta seguro que desea cerrar su sesión?",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: '#d33',
                cancelButtonText: "No",
                confirmButtonText: "Si"
            }).then(function () {
                $auth.removeToken();
                $auth.logout();
                $location.path('/login');  
            });     

        };

        if($rootScope.userInfo){
            if(Object.keys($rootScope.userInfo).length === 0){
                $rootScope.userInfo = $localStorage.userInfo;    
            };
        }else{
            $rootScope.userInfo = $localStorage.userInfo;
        }
        
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

        var authenticated = $auth.isAuthenticated();        
        if(from.name === "login" && to.name !== "login"){
            if (authenticated === false) {
                $auth.removeToken();
                $auth.logout();
                ev.preventDefault();
                swal("¡No Autorizado!","Porfavor Inicie sesión para obtener un token.","warning");            
            }
        }
      
    });
    
        
});

