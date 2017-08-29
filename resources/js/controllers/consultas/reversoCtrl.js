
app.controller('reversoCtrl', ['$scope', 'reversoService',
    function ($scope, reversoService) {

//        reversoService.getTipoConsulta().then(function (response) {
//            $scope.tipoConsultas = response.data;
//            console.log($scope.tipoConsultas);
//        });

//        $scope.changeTipoConsulta = function () {
//            if ($scope.tipoConsulta === "1") {
//                $scope.disabledNinio = false;
//                $scope.disabledReproductiva = true;
//            }
//            if ($scope.tipoConsulta === "2") {
//                $scope.disabledReproductiva = false;
//                $scope.disabledNinio = true;
//            }
//            if ($scope.tipoConsulta === "0") {
//                $scope.disabledNinio = true;
//                $scope.disabledReproductiva = true;
//            }
//            if ($scope.tipoConsulta === "10") {
//                $scope.disabledNinio = false;
//                $scope.disabledReproductiva = false;
//            }
//        };
//
//        $scope.buscarUsuarioByAfiliacion = function () {
//            pacientesService.buscarUsuarioByAfiliacion($scope.consulta).then(function (response) {
//                $scope.paciente = response.data;
//                console.log($scope.paciente);
//            });
//        };

    }]);