//app.factory('siginServices', ['$http','$location',
//        function siginServices($http,  $location) {
//
//        return{           
//
//            login: function (user) {
//                return $http({
//                url: 'usuarios/usuariosCtrl/loginUser',
//                method: "POST",
//                data : "email="+user.email+"&password="+user.password,
//                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
//            }).then(function (response) {
//                   return response.data;
//                });
//            },
//            //función para cerrar la sesión del usuario
//            logout : function(){
//                return $http.post("usuarios/usuariosCtrl/loginUser").then(function (response) {
//                    return response.data;
//                });
//            
//            },
//            //función que comprueba si la sesión userLogin almacenada en sesionStorage existe
//            isLoggedIn : function(){
//                return sesionesControl.get("userLogin");
//            }
//
//        };
//    }]);
//
