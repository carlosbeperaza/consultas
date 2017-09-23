app.factory('usuariosService', ['$http',
    function usuariosService($http) {
        return{
            getUserLogonByEmail: function (usuario) {
                return $http.post("usuarios/usuariosCtrl/getUserLogonByEmail", usuario).then(function (response) {
                    return response.data;
                });
            }
        };
    }]);