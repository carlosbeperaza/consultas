
app.controller('reversoCtrl', ['$scope', 'reversoService',
    function ($scope, reversoService) {

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

//        $scope.changeTipoConsulta = function () {
//           if ($scope.tipoConsulta === "1") {
//               $scope.disabledNinio = false;
//              $scope.disabledReproductiva = true;
//          }
//           if ($scope.tipoConsulta === "2") {
//               $scope.disabledReproductiva = false;
//               $scope.disabledNinio = true;
//           }
//           if ($scope.tipoConsulta === "0") {
//               $scope.disabledNinio = true;
//                $scope.disabledReproductiva = true;
//           }
//            if ($scope.tipoConsulta === "10") {
//               $scope.disabledNinio = false;
//              $scope.disabledReproductiva = false;
//           }
//        };
//
//        $scope.buscarUsuarioByAfiliacion = function () {
//            pacientesService.buscarUsuarioByAfiliacion($scope.consulta).then(function (response) {
//                $scope.paciente = response.data;
//               console.log($scope.paciente);
//            });
//        };

    }]);