<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MY_Controller extends CI_Controller{

    public function __construct()
    {
        parent::__construct();

        $this->headers = apache_request_headers();
        $this->DataJWT = JWT\jwt_helper::VerifyToken($this->headers);
        if($this->DataJWT["code"] !== 0){            
            $this->session->set_flashdata('DataJWT', $this->DataJWT);
            redirect('auth/expToken/ExpT');
        }else{
//        $header='modHead: jaja';        
            $msg = 'msg:'.$this->DataJWT["msg"];
            $code = 'code:'.$this->DataJWT["code"];           
            $X_AUTH_TOKEN = 'X_AUTH_TOKEN:'.$this->DataJWT["X_AUTH_TOKEN"];
            header($msg,'');
            header($code, '');
            header($X_AUTH_TOKEN, '');
        }

    }

}