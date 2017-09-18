<?php
namespace AuthToken;


class authToken_helper{
    //codes
    //0 =authorized
    //1 = unauthorized
    //3 = Expired Token
    //4 = No Token
    public static function VerifyToken($headers) {
        $response=[];
        $CI =& get_instance();
        $CI->load->model('login/Login_model','auth_model');
        $CI->load->helper('jwt_helper');
        if(!isset($headers["X_AUTH_TOKEN"]) || empty($headers["X_AUTH_TOKEN"])){
            //mejorar la validación, pero si está aquí es que no tenemos el token
            $response = array("code" => 4,"response" => array("X_AUTH_TOKEN" => $headers["X_AUTH_TOKEN"], "msg" =>"Token Unavailable"));            
        }else{
            
             $user = JWT\jwt_helper\decode($headers["X_AUTH_TOKEN"],"sello",array('HS256'));
            if($user == "Expired token"){
                $response = array("code" => 3,"response" => array("X_AUTH_TOKEN" => $headers["X_AUTH_TOKEN"], "msg" =>"Expired token"));
            }else{                
                if($CI->auth_model->checkUser($user->id_usuario, $user->email) !== false){
                    $user->iat = time();
                    $user->exp = time() + 300;
                    $jwt = JWT\jwt_helper::encode($user, 'sello');
                    $response = array("code" => 0,"response" => array("X_AUTH_TOKEN" => $jwt, "msg" =>"authorized"));

           }
            }
            
        }
        return $response;
    } 
}

