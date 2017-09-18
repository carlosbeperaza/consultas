app.factory('consultasService', ['$http',
    function consultasService($http) {
        return{
            getTipoConsulta: function () {
                return $http.get("consultas/consultasCtrl/getTipoConsulta").then(function (response) {
                    return response.data;
                });
            }, 
            getFieldsInfoGeneral: function () {
                return $http.get("consultas/consultasCtrl/getFieldsInfoGeneral").then(function (response) {
                    return response.data;
                });
            },
            getFieldsPaciente: function () {
                return $http.get("consultas/consultasCtrl/getFieldsPaciente").then(function (response) {
                    return response.data;
                });
            },
             getDataRelacionTemporal: function () {
                return $http.get("consultas/consultasCtrl/getDataRelacionTemporal").then(function (response) {
                    return response.data;
                });
            },                  
            getDataDerechohabiencia: function () {
                return $http.get("consultas/consultasCtrl/getDataDerechohabiencia").then(function (response) {
                    return response.data;
                });
            },
            getDataDiscapacidad: function () {
                return $http.get("consultas/consultasCtrl/getDataDiscapacidad").then(function (response) {
                    return response.data;
                });
            },
            getDataClavePersona: function () {
                return $http.get("consultas/consultasCtrl/getDataClavePersona").then(function (response) {
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