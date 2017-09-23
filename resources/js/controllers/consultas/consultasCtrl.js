app.controller('consultasCtrl', ['$scope', 'consultasService', 'pacientesService', 'sweetalert', '$localStorage', 'usuariosService',
    function ($scope, consultasService, pacientesService, sweetalert, $localStorage, usuariosService) {

        $scope.tipoConsultas = {};
        $scope.paciente = {};
        $scope.disabledNinio = true;
        $scope.disabledReproductiva = true;
        $scope.consulta = {};
        $scope.usuario = {};

        sweetalert.loadingAlert('Cargando...', '');

        $scope.planTratamientos = [
            {id: 'A', tipo: 'A'},
            {id: 'B', tipo: 'B'},
            {id: 'C', tipo: 'C'}
        ];
        $scope.noSobres = [
            {id: '1', cantidad: '3'},
            {id: '2', cantidad: '5'},
            {id: '3', cantidad: '10'}
        ];
        $scope.tipoTratamientoIRA = [
            {id: '1', tipo: 'SINTOMÁTICO'},
            {id: '2', tipo: 'ANTIBIÓTICO'}
        ];
        $scope.trimeGestacional = [
            {id: '1', tipo: 'PRIMERO'},
            {id: '2', tipo: 'SEGUNDO'},
            {id: '3', tipo: 'TERCERO'}
        ];
        $scope.aceptantePuerperio = [
            {id: '1', tipo: 'HORMONAL'},
            {id: '2', tipo: 'DIU'}
        ];
        $scope.apliCedulaCancer = [
            {id: '1', tipo: 'PRIMERA VEZ'},
            {id: '2', tipo: 'SEGUNDA VEZ'}
        ];

        consultasService.getTipoConsulta().then(function (response) {
            $scope.tipoConsultas = response.data;
        });
        consultasService.getFieldsInfoGeneral().then(function (response) {
            $scope.fieldsInfoGeneral = response.data;
        });
        consultasService.getDataRelacionTemporal().then(function (response) {
            $scope.dataRelacionTemporal = response.data;
        });
        consultasService.getDataDerechohabiencia().then(function (response) {
            $scope.dataDerechohabiencia = response.data;
        });
        consultasService.getDataDiscapacidad().then(function (response) {
            $scope.dataDiscapacidad = response.data;
        });
        consultasService.getDataClavePersona().then(function (response) {
            $scope.dataClavePersona = response.data;
        });
        consultasService.getProgramas().then(function (response) {
            $scope.dataProgramas = response.data;
        });
        consultasService.getIMC().then(function (response) {
            $scope.dataIMC = response.data;
        });
        consultasService.getEdiTipoUno().then(function (response) {
            $scope.dataEdiTipoUno = response.data;
        });
        consultasService.getEdiTipoDos().then(function (response) {
            $scope.dataEdiTipoDos = response.data;
        });
        consultasService.getReferidoBy().then(function (response) {
            $scope.dataReferidoBy = response.data;
        });
        consultasService.getResultBattelle().then(function (response) {
            $scope.dataResultBattelle = response.data;
        });
        consultasService.getEdiTipoAll().then(function (response) {
            $scope.dataEdiTipoAll = response.data;
        });
        consultasService.getComplicaciones().then(function (response) {
            $scope.dataComplicaciones = response.data;
        });
        consultasService.getTipoPersona().then(function (response) {
            $scope.dataTipoPersona = response.data;
        });
        consultasService.getServicios().then(function (response) {
            $scope.dataServicios= response.data;
        });

        $scope.usuario = {email: $localStorage.userInfo.email};
        usuariosService.getUserLogonByEmail($scope.usuario).then(function (response) {
            $scope.dataUserLogonByEmail = response.data;
            $scope.consulta['curpUser'] = $scope.dataUserLogonByEmail[0].curp;
            $scope.consulta['cedulaProfecional'] = $scope.dataUserLogonByEmail[0].cedula;
            $scope.consulta['tipoPersona'] = $scope.dataUserLogonByEmail[0].id_tipo_persona;

            var today = new Date();
            var dd = ("0" + (today.getDate())).slice(-2);
            var mm = ("0" + (today.getMonth() + 1)).slice(-2);
            var yyyy = today.getFullYear();
            today = yyyy + '-' + mm + '-' + dd;
            
            $scope.consulta['fecha'] = today;
            
            var nombrePrestador = $scope.dataUserLogonByEmail[0].nombre + " " + $scope.dataUserLogonByEmail[0].primer_apellido;
            $scope.consulta['prestadorServicio'] = nombrePrestador;


            sweetalert.close();
        });

        $scope.changeTipoConsulta = function () {
            if ($scope.consulta['tipoConsulta'] === "1") {
                $scope.disabledNinio = false;
                $scope.disabledReproductiva = true;
            }
            if ($scope.consulta['tipoConsulta'] === "2") {
                $scope.disabledReproductiva = false;
                $scope.disabledNinio = true;
            }
            if ($scope.consulta['tipoConsulta'] === "0") {
                $scope.disabledNinio = true;
                $scope.disabledReproductiva = true;
            }
            if ($scope.consulta['tipoConsulta'] === "10") {
                $scope.disabledNinio = false;
                $scope.disabledReproductiva = false;
            }
        };

        $scope.buscarUsuarioByAfiliacion = function () {
            pacientesService.buscarUsuarioByAfiliacion($scope.consulta).then(function (response) {
                $scope.paciente = response.data;
//                console.log($scope.paciente);
            });
        };

        $scope.saveConsulta = function () {
            console.log($scope.consulta);
        };

        $scope.clear = function () {
            $scope.consulta = {};
        };

    }]);
