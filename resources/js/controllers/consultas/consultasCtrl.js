app.controller('consultasCtrl', ['$scope', 'consultasService', 'pacientesService',
    function ($scope, consultasService, pacientesService) {

        $scope.tipoConsultas = {};
        $scope.paciente = {};
        $scope.disabledNinio = true;
        $scope.disabledReproductiva = true;
        $scope.consulta = {};

        consultasService.getTipoConsulta().then(function (response) {
            $scope.tipoConsultas = response.data;
         
        });

        consultasService.getFieldsInfoGeneral().then(function (response) {
            $scope.fieldsInfoGeneral = response.data;
         
        });
        consultasService.getFieldsPaciente().then(function (response) {
            $scope.fieldsPaciente = response.data;
         
        });
         consultasService.getDataRelacionTemporal().then(function (response) {
            $scope.dataRelacionTemporal = response.data;
         
        });
        consultasService.getDataDerechohabiencia().then(function (response) {
            $scope.dataDerechohabiencia = response.data;
           
        });
        consultasService.getDataDiscapacidad().then(function (response) {
            $scope.dataDiscapacidad = response.data;
            console.log($scope.dataDiscapacidad);
        });
        consultasService.getDataClavePersona().then(function (response) {
            $scope.dataClavePersona = response.data;
            console.log($scope.dataClavePersona);
        });
        $scope.changeTipoConsulta = function () {
            if ($scope.tipoConsulta === "1") {
                $scope.disabledNinio = false;
                $scope.disabledReproductiva = true;
            }
            if ($scope.tipoConsulta === "2") {
                $scope.disabledReproductiva = false;
                $scope.disabledNinio = true;
            }
            if ($scope.tipoConsulta === "0") {
                $scope.disabledNinio = true;
                $scope.disabledReproductiva = true;
            }
            if ($scope.tipoConsulta === "10") {
                $scope.disabledNinio = false;
                $scope.disabledReproductiva = false;
            }
        };

        $scope.buscarUsuarioByAfiliacion = function () {
            pacientesService.buscarUsuarioByAfiliacion($scope.consulta).then(function (response) {
                $scope.paciente = response.data;
                console.log($scope.paciente);
            });
        };

        $scope.saveConsulta = function(){
            console.log($scope.consulta);
        };

    }]);