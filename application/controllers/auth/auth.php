<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Auth extends CI_Controller
{
     public function __construct() {

        parent::__construct();
        $this->load->database();   
        	
    }
    function hasAllProperties($object, array $properties) {
    return array_reduce(
        $properties,
        function ($acc, $property) use ($object) {
            return $acc && property_exists($object, $property);
        },
        true
    );
    }


       //logueamos usuarios con codeigniter y angularjs
    public function login(){       
        $request = json_decode(file_get_contents("php://input"));
        // Convert to array
        $requestArr = (array)$request;
        $empty = empty($requestArr);
        if (!$empty) {
            if (array_key_exists("email",$requestArr) && array_key_exists("password",$requestArr)){            
                $email = $request->email; $password = $request->password;
                $this->load->model('login/Login_model', 'auth_model');
                $userData = $this->auth_model->login($email, $password);
                if ($userData !== FALSE) {
                    $temp = array("id_usuario" => $userData->id_usuario, "email" => $userData->email);
                    $user = (object) $temp;
                    $userInfo = array("nombre" => $userData->nombre, "primerApellido" => $userData->primer_apellido,
                                "secundoApellido" => $userData->secundo_apellido,"email" => $userData->email,"userAvatar" => $userData->user_avatar);
                    $user->iat = time();
                    $user->exp = time() + 300;
                    $jwt = JWT\jwt_helper::encode($user, 'M3g@AL13nH@sH');
                    echo \json_encode(["code" => 0, "X_AUTH_TOKEN" => $jwt, "msg" => "authorized", "userInfo" => $userInfo]);
                } else {
                echo \json_encode(["code" => 1, "X_AUTH_TOKEN" => "", "status" => "UNAUTHORIZED"]);
                }
            } else {
                echo \json_encode(["code" => 1, "X_AUTH_TOKEN" => "", "status" => "UNAUTHORIZED"]);
            }
        }else{
            echo \json_encode(["code" => 1, "X_AUTH_TOKEN" => "", "status" => "UNAUTHORIZED"]);
        }
    }
}
/* End of file auth.php */
/* Location: ./application/controllers/auth.php */