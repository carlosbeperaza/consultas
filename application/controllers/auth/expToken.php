<?php 
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class ExpToken extends CI_Controller
{
     public function __construct() {

        parent::__construct();           
        
    }
    public function ExpT(){ 
        $DataJWT = $this->session->flashdata('DataJWT');
        $msg = 'msg:'.$DataJWT["msg"];
        $code = 'code:'.$DataJWT["code"];           
        $X_AUTH_TOKEN = 'X_AUTH_TOKEN:'.$DataJWT["X_AUTH_TOKEN"];
        header($msg,'');
        header($code, '');
        header($X_AUTH_TOKEN, '');
        $data="";
        echo \json_encode($data);
    }
}