<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Auth extends CI_Controller
{
     public function __construct() {

        parent::__construct();
        $this->load->database();   
        	
    }
       //logueamos usuarios con codeigniter y angularjs
    public function login(){
            //verify if there is a token.. if ther is..evualuate and renew
           $request = json_decode(file_get_contents("php://input"));
           if($request!==FALSE){
               $email = $request->email;
           $password = $request->password;
           }           
           $this->load->model('login/Login_model','auth_model');
           $userData = $this->auth_model->login($email,$password);           

           if($userData !== FALSE){
            $temp= array("id_usuario"=>$userData->id_usuario  ,"email"=>$userData->email);
            $user =(object)$temp;
            $userInfo = array("nombre"=>$userData->nombre,"primerApellido"=>$userData->primer_apellido,
                             "secundoApellido"=>$userData->secundo_apellido,
                             "email"=>$userData->email,
                             "userAvatar"=>$userData->user_avatar);
            $user->iat = time();
            $user->exp = time() + 300;
            $jwt = JWT\jwt_helper::encode($user, 'M3g@AL13nH@sH');
            echo \json_encode(array("code" => 0,"X_AUTH_TOKEN" => $jwt,"msg" => "authorized","userInfo"=>$userInfo));
//          echo \json_encode(array("code" => 0,"response" => array("X_AUTH_TOKEN" => $jwt)));                            
           }else{
               echo \json_encode(array("code" => 1,"X_AUTH_TOKEN" => "","status"=>"UNAUTHORIZED"));
//                echo json_encode(array("code" => 1,"status"=>"UNAUTHORIZED","response" => "Failed"));  
           }
      
        
    }
}
/* End of file auth.php */
/* Location: ./application/controllers/auth.php */