app.factory('dashboardService', ['$http',
    function dashboardService($http) {
        return{
            getResources: function () {
                return $http.get("https://api.github.com/users/urielhdz/repos").then(function (response) {
                    return response.data;
                });
            },            
            getProgramas: function () {
                return $http.post("dashboard/DashboardCtrl/getProgramas").then(function (response) {
                    return response.data;
                });
            }

        };
    }]);