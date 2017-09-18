app.controller('dashboardCtrl',['$scope', 'dashboardService',
    function($scope, dashboardService){ 

        $scope.name="Micheal P. Strand";

        dashboardService.getProgramas().then(function(response){
        	console.log(response.programas);
        });

}]);