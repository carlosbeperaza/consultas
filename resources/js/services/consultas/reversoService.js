app.factory('reversoService', ['$http',
    function reversoService($http) {
        return{
            getMetodoEntrega: function () {
                return $http.get("consultas/reversoCtrl/getMetodoEntrega").then(function (response) {
                    return response.data;
                });

            },
            getPlanFamiliar: function () {
                return $http.get("consultas/reversoCtrl/getPlanFamiliar").then(function (response) {
                    return response.data;
                });
            },
            getDetecciones: function () {
                return $http.get("consultas/reversoCtrl/getDetecciones").then(function (response) {
                    return response.data;
                });
            },
            getInsumos: function () {
                return $http.get("consultas/reversoCtrl/getInsumos").then(function (response) {
                    return response.data;
                });
            },
            getMujeres: function () {
                return $http.get("consultas/reversoCtrl/getMujeres").then(function (response) {
                    return response.data;
                });
            },
            getAdicciones: function () {
                return $http.get("consultas/reversoCtrl/getAdicciones").then(function (response) {
                    return response.data;
                });
            },
            insertIsumos: function(dataInsumos) {
                return $http.post("consultas/reversoCtrl/insertInsumos", dataInsumos ).then(function () {
                    // return response.data;
                });
            }

        };
    }]);

