/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


app.factory('sweetalert', ['$q',
    function sweetalert($q) {
        return{
            loadingAlert: function () {
                return swal({
                    content: "<div class='cp-spinner cp-meter'></div>",
//                    title: "<div class='cp-spinner cp-meter'></div>",
                    text: "Espere un momento...",
                    button: false,
                    html: true
                });
            }
//            getPaymentVerify: function (scan_batch) {
//                var params = {scan_batch: scan_batch};
//                return $http.get('paymentVerify/getImgPaymentVerify', {params: params}).then(function (response) {
//                    return response.data;
//                });
//            },
//            getExceptionTypes: function () {
//                return $http.get('paymentVerify/getExceptionTypes').then(function (response) {
//                    return response.data;
//                });
//            },
//            updatePaymentVerify: function (payment_id, chk_amt, chk_claim_num, scan_batch, exceptionType, party, currentLogUser) {
//                var params = {payment_id: payment_id, chk_amt: chk_amt, chk_claim_num: chk_claim_num, scan_batch: scan_batch, exceptionType: exceptionType, party: party, currentLogUser: currentLogUser};
//                return $http.get('paymentVerify/updatePaymentVerify', {params: params});
//            }
        };
    }]);