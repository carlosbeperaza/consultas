'use strict';

/* Controllers */

//mientras corre la aplicación, comprobamos si el usuario tiene acceso a la ruta a la que está accediendo
//como vemos inyectamos authUsers
app.run(function($rootScope, $location, authUsers){
 //creamos un array con las rutas que queremos controlar
    var rutasPrivadas = ["/dashboard","/info","/login"];
    //al cambiar de rutas
    $rootScope.$on('$routeChangeStart', function(){
    	//si en el array rutasPrivadas existe $location.path(), locationPath en el login
    	//es /login, en la home /home etc, o el usuario no ha iniciado sesión, lo volvemos 
    	//a dejar en el formulario de login
        if(in_array($location.path(),rutasPrivadas) && !authUsers.isLoggedIn()){
            $location.path("/login");
        }
        //en el caso de que intente acceder al login y ya haya iniciado sesión lo mandamos a la home
        if(($location.path() === '/login') && authUsers.isLoggedIn()){
            $location.path("/dashboard");
        }
    });
});

// signin controller
app.controller('signinCtrl', ["$scope","$rootScope",'$state', "$location",'$auth',
    function ($scope,$rootScope,$state, $location,$auth) {

        $scope.user = { email : "", password : "" };

        $scope.user = {};
        $scope.authError = null;
        $scope.loading = false;    
        
               
        if ($location.search().status) {
            alert("Oops! Token Expired.", "Please Sign in Again");
            $location.search("");
        }
        $location.search("");
        
           $scope.login = function(){
           $auth.login({
                email: $scope.user.email,
                password: $scope.user.password
            }).then(function (response) {
                $rootScope.userInfo=response.data.userInfo;
                $auth.setToken(response.data.X_AUTH_TOKEN);
                $state.go('app.dashboard');  
            }).catch(function (response) {
                if (response.data.status !== 'INTERNAL_SERVER_ERROR') {
                    $scope.loading = false;                                  
                    $scope.authError = 'Usuario o contrasena no validos';
                    alert('Usuario o contrasena no validos');
                } else {                    
                    $scope.authError = 'Server Error';
                    $scope.loading = false;
                }
            });
        };
        
        $scope.logout = function(){
           
        };
        
    }]);

