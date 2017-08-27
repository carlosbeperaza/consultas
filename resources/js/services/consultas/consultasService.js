app.factory('consultasService', ['$http',
    function consultasService($http) {
        return{
            getTipoConsulta: function () {
                return $http.get("consultas/consultasCtrl/getTipoConsulta").then(function (response) {
                    return response.data;
                });
            }            
//            getProgramas: function () {
//                return $http.post("dashboard/DashboardCtrl/getProgramas").then(function (response) {
//                    return response;
//                });
//            }

        };
    }]);