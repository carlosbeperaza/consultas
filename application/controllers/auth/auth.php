<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Auth extends CI_Controller
{
     public function __construct() {

        parent::__construct();             
        $this->load->model('login/Login_model', 'auth_model');	
    }
    
     //logueamos usuarios con codeigniter y angularjs
    public function login(){       
        $request = json_decode(file_get_contents("php://input"));
        $requestArr = (array)$request;
        if (!empty($requestArr)) {
            if (array_key_exists("email",$requestArr) && array_key_exists("password",$requestArr)){            
                $email = $request->email; $password = $request->password;               
                $userData = $this->auth_model->login($email, $password);
                if ($userData !== FALSE) {
                    $temp = array("id_usuario" => $userData->id_usuario, "email" => $userData->email);
                    $user = (object) $temp;
                    $userInfo = array("nombre" => $userData->nombre, "primerApellido" => $userData->primer_apellido,"secundoApellido" => $userData->secundo_apellido,"email" => $userData->email,"userAvatar" => $userData->user_avatar);
                    $user->iat = time(); 
                    $user->exp = time() + 300;  
                    $jwt = JWT\jwt_helper::encode($user, 'M3g@AL13nH@sH');
                    $msg = 'msg:AUTHORIZED'; $code = 'code:0'; $X_AUTH_TOKEN = 'X_AUTH_TOKEN:'.$jwt;
                    header($msg,''); header($code, '');  header($X_AUTH_TOKEN, '');
                    echo \json_encode($userInfo);
                } else {
                    $msg = 'msg:UNAUTHORIZED'; $code = 'code:1'; $X_AUTH_TOKEN = 'X_AUTH_TOKEN: ';
                    header($msg,''); header($code, '');  header($X_AUTH_TOKEN, '');
                }
            } else {
                $msg = 'msg:UNAUTHORIZED'; $code = 'code:1'; $X_AUTH_TOKEN = 'X_AUTH_TOKEN: ';
                header($msg,''); header($code, '');  header($X_AUTH_TOKEN, '');
            }
        }else{
            $msg = 'msg:UNAUTHORIZED'; $code = 'code:1'; $X_AUTH_TOKEN = 'X_AUTH_TOKEN: ';
            header($msg,''); header($code, '');  header($X_AUTH_TOKEN, '');
        }
    }
}