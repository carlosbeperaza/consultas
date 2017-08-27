app.factory('pacientesService', ['$http',
    function pacientesService($http) {
        return{
            buscarUsuarioByAfiliacion: function (numberAfiliacion) {
                return $http.post("pacientes/pacientesCtrl/buscarUsuarioByAfiliacion", numberAfiliacion).then(function (response) {
                    return response.data;
                });
            }
        };
    }]);