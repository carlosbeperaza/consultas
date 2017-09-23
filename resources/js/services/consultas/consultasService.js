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
//            getFieldsPaciente: function () {
//                return $http.get("consultas/consultasCtrl/getFieldsPaciente").then(function (response) {
//                    return response.data;
//                });
//            },
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
            },
            getProgramas: function () {
                return $http.get("consultas/consultasCtrl/getProgramas").then(function (response) {
                    return response.data;
                });
            },            
            getIMC: function () {
                return $http.get("consultas/consultasCtrl/getIMC").then(function (response) {
                    return response.data;
                });
            },
            getEdiTipoUno: function () {
                return $http.get("consultas/consultasCtrl/getEdiTipoUno").then(function (response) {
                    return response.data;
                });
            },
            getEdiTipoDos: function () {
                return $http.get("consultas/consultasCtrl/getEdiTipoDos").then(function (response) {
                    return response.data;
                });
            },
            getReferidoBy: function () {
                return $http.get("consultas/consultasCtrl/getReferidoBy").then(function (response) {
                    return response.data;
                });
            },
            getResultBattelle: function () {
                return $http.get("consultas/consultasCtrl/getResultBattelle").then(function (response) {
                    return response.data;
                });
            },
            getEdiTipoAll: function () {
                return $http.get("consultas/consultasCtrl/getEdiTipoAll").then(function (response) {
                    return response.data;
                });
            },
            getComplicaciones: function () {
                return $http.get("consultas/consultasCtrl/getComplicaciones").then(function (response) {
                    return response.data;
                });
            },
             getOtrasAcciones: function () {
                return $http.get("consultas/consultasCtrl/getOtrasAcciones").then(function (response) {
                    return response.data;
                });
            }
            ,
             getTipoPersona: function () {
                return $http.get("consultas/consultasCtrl/getTipoPersona").then(function (response) {
                    return response.data;
                });
            },
            getServicios: function () {
                return $http.get("consultas/consultasCtrl/getServicios").then(function (response) {
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