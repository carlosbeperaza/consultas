app.controller('dashboardCtrl',['$scope', 'dashboardService','$auth',
    function($scope, dashboardService,$auth){ 

        $scope.name="Micheal P. Strand";
        if ($auth.isAuthenticated()){
                dashboardService.getProgramas().then(function(response){
                console.log(response.programas);
            });
        }
        

}]);