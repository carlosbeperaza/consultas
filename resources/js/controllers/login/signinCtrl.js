'use strict';

// signin controller
app.controller('signinCtrl', ["$scope","$rootScope",'$state', "$location",'$auth',
    function ($scope,$rootScope,$state, $location,$auth) {

        $scope.user = {};
        $scope.authError = null;        
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
                    $scope.authError = 'Usuario o contrasena no validos';
                    alert('Usuario o contrasena no validos');
                } else {                    
                    $scope.authError = 'Server Error';
                    $scope.loading = false;
                }
            });
        };
        $scope.master = $scope.user;
        $scope.form = {
            submit: function (form) {
                var firstError = null;
                if (form.$invalid) {
                    var field = null, firstError = null;
                    for (field in form) {
                        if (field[0] != '$') {
                            if (firstError === null && !form[field].$valid) {
                                firstError = form[field].$name;
                            }

                            if (form[field].$pristine) {
                                form[field].$dirty = true;
                            }
                        }
                    }
                    angular.element('.ng-invalid[name=' + firstError + ']').focus();
//                        SweetAlert.swal("The form cannot be submitted because it contains validation errors!", "Errors are marked with a red, dashed border!", "error");
                    return;

                } else {
                    $scope.login();
//                        SweetAlert.swal("Good job!", "Your form is ready to be submitted!", "success");
                    //your code for submit
                }
            },
            reset: function (form) {

                $scope.myModel = angular.copy($scope.master);
                form.$setPristine(true);

            }
        };
        
    }]);

