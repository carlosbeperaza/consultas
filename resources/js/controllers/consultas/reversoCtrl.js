
app.controller('reversoCtrl', ['$scope', 'reversoService', '$filter',
    function ($scope, reversoService, $filter) {


        reversoService.getMetodoEntrega().then(function (response) {
            $scope.metodoEntrega = response.data;
            console.log($scope.metodoEntrega);
        });

        reversoService.getPlanFamiliar().then(function (response) {
            $scope.planFamiliar = response.data;
            console.log($scope.planFamiliar);
        });

        reversoService.getDetecciones().then(function (response) {
            $scope.detecciones = response.data;
            console.log($scope.detecciones);
        });

        reversoService.getInsumos().then(function (response) {
            $scope.dataInsumos = response.data;
            console.log($scope.dataInsumos);
        });
        reversoService.getMujeres().then(function (response) {
            $scope.dataMujeres = response.data;
            console.log($scope.dataMujeres);
        });
        reversoService.getAdicciones().then(function (response) {
            $scope.dataAdicciones = response.data;
            console.log($scope.dataAdicciones);
        });

        $scope.isSelected = function(product) {
            return product.selected;
        };
        $scope.formSupplies = function () {

          $scope.dataInsumoss = $filter('filter')($scope.dataInsumos, $scope.isSelected);
          console.log($scope.dataInsumoss);   
          for (var i =  0; i < $scope.dataInsumoss.length; i++) {
           reversoService.insertIsumos($scope.dataInsumoss[i]).then(function () {
               console.log("ya esta man");
              });
           }
        };

        $scope.formReverso = function() {
            
            $scope.dFamiliar       = $filter('filter')($scope.planFamiliar, $scope.isSelected);
            console.log($scope.dFamiliar);

            $scope.dDetecciones    = $filter('filter')($scope.detecciones, $scope.isSelected);        
            console.log($scope.dDetecciones);

            $scope.dMujeres        = $filter('filter')($scope.dataMujeres, $scope.isSelected);
            console.log($scope.dMujeres);

            $scope.dAdicciones     = $filter('filter')($scope.dataAdicciones, $scope.isSelected);
            console.log($scope.dAdicciones);

            $scope.daInsumos       = $filter('filter')($scope.dataInsumos, $scope.isSelected);
            console.log($scope.daInsumos);

            $scope.dEntrega        = $filter('filter')($scope.metodoEntrega, $scope.isSelected);
            console.log($scope.dEntrega);
        }

}]);