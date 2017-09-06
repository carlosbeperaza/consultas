
app.controller('reversoCtrl', ['$scope', 'reversoService',
    function ($scope, reversoService) {

        $scope.esconderInput = true;
        $scope.esconderInput2 = true;
        $scope.esconderInput3 = true;
        $scope.esconderInput4 = true;

        reversoService.getMetodoEntrega().then(function (response) {

            $scope.metodoEntrega = response.data;
            console.log($scope.metodoEntrega);


        });
        reversoService.getPlanFamiliar().then(function (response) {

            $scope.planFamiliar = response.data;
            console.log($scope.planFamiliar);

        });

        reversoService.getInsumos().then(function (response) {

            $scope.insumos = response.data;
            console.log($scope.insumos);

        });


        $scope.formInsumos = function (formData) {

            console.log(formData);

            reversoService.insertIsumos(formData).then(function(){

            // console.log(response);

        });          

        }



 }]);