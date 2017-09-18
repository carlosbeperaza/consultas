'use strict';

// signin controller
app.controller('signinCtrl', ["$scope","$rootScope",'$state', "$location",'$auth',
    function ($scope,$rootScope,$state, $location,$auth) {

        $scope.user = { email : "", password : "" };

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
        
    }]);

