/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


app.factory('sweetalert', ['$q',
    function sweetalert($q) {
        return{
            loadingAlert: function (title, text) {
                return swal({
                    title: title,
                    text: text,
                    allowOutsideClick: false,
                    onOpen: function () {
                        swal.showLoading()
                    }
                });
            },
            close: function () {
                return swal.close();
            },
            warning: function (title, text) {
                return swal({
                    title: title,
                    text: text,
                    type: "warning",
                    timer: 5000,
                    confirmButtonColor: "#007AFF"
                });
            },
            warning2: function (title, text) {
                return swal({
                    title: title,
                    text: text,
                    type: "warning",
                    confirmButtonColor: "#007AFF"
                });
            },
            confirmPromise: function (title, text, type, confirmText) {
                return swal({
                    title: title,
                    text: text,
                    type: type,
                    showCancelButton: false,
                    confirmButtonColor: "#259b54",
                    confirmButtonText: confirmText
                });
            },
            cancelConfirmPromise: function (title, text, type, confirmText) {
                return  $q(function (resolve, reject) {
                    swal({
                        title: title,
                        text: text,
                        type: type,
                        showCancelButton: true,
                        confirmButtonColor: "#259b54",
                        confirmButtonText: confirmText
                    }).then(function () {
                        resolve(true);
                    }, function () {
                        reject(false);
                    });
                });
            }
        }

    
    }]);