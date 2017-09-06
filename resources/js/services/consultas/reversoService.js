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
            getInsumos: function () {
                return $http.get("consultas/reversoCtrl/getInsumos").then(function (response) {
                    return response.data;
                });
            },
            insertIsumos: function(formData) {
                return $http.post("consultas/reversoCtrl/insertInsumos", formData ).then(function () {
                    // return response.data;
                });
            }

        };
    }]);

