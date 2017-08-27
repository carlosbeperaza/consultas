'use strict';

/**
 * Config constant
 */
app.constant('APP_MEDIAQUERY', {
    'desktopXL': 1200,
    'desktop': 992,
    'tablet': 768,
    'mobile': 480
});
app.constant('JS_REQUIRES', {
    //*** Scripts
    scripts: {

        // 'loginControllers': 'angular-app/controllers/loginControllers.js',
        // 'loginServices': 'angular-app/services/loginServices.js',
        
        'dashboardCtrl': 'resources/js/controllers/dashboard/dashboardCtrl.js',
        'dashboardService': 'resources/js/services/dashboard/dashboardService.js',
        'consultasCtrl': 'resources/js/controllers/consultas/consultasCtrl.js',
        'consultasService': 'resources/js/services/consultas/consultasService.js',
        'pacientesService': 'resources/js/services/pacientes/pacientesService.js'

        // 'itemCtrl': 'angular-app/controllers/ItemController.js',
        // 'itemService': 'angular-app/services/myServices.js',        
        // 'northwareAlert': 'angular-app/js/utils/northwareAlert.js',

    },
    //*** angularJS Modules
    modules: [
            // {
            //     name: 'sweet-alert',
            //     files: ['angular-app/js/sweetalert/sweet-alert.min.js', 'angular-app/js/sweetalert/sweet-alert.css']
            // },{
            //     name: 'dirPagination',
            //     files: ['angular-app/js/dirPagination.js']
            // },{
            //     name: 'oitozero.ngSweetAlert',
            //     files: ['angular-app/js/angular-sweetalert-promised/SweetAlert.min.js']
            // }
    ]
});
