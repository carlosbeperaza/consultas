app.controller('dashboardCtrl',['$scope', 'dashboardService','$auth',
    function($scope, dashboardService,$auth){ 

        $scope.name="Micheal P. Strand";        
        dashboardService.getProgramas($scope.name).then(function(response){
            console.log(response);
        });      
        
}]);