<?php
defined('BASEPATH') OR exit('No direct script access allowed');

	

class DashboardCtrl extends CI_Controller {

	public function __construct()
	{

        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
        $method = $_SERVER['REQUEST_METHOD'];
        if($method == "OPTIONS") {
            die();
        }
		parent::__construct();
		//Do your magic here
            $this->headers = apache_request_headers();
		$this->load->model("dashboard/Dashboard_model");
	}

	public function index()
	{
		$this->load->view("dashboard/dashboard.html");
	}

	public function getProgramas()
	{
          $response = JWT\jwt_helper::VerifyToken($this->headers);
          $data=array();
          if($response["code"]==0){
              //code 0 significa que el usuario exsite y esta bien su token.
              //aqui realizar todo los trabajos.
              $data = $this->Dashboard_model->getProgramas();              
//              echo \json_encode(array("code" => $response["code"],"X_AUTH_TOKEN" => $response["X_AUTH_TOKEN"],"msg" => $response["msg"], "programas"=>$data));
          }else{
              //aqui hay algo mal con el token.. ya expiro o esta mal.
//            echo \json_encode(array("code" => $response["code"],"X_AUTH_TOKEN" => $response["X_AUTH_TOKEN"],"msg" => $response["msg"]));
          }
          echo \json_encode(array("code" => $response["code"],"X_AUTH_TOKEN" => $response["X_AUTH_TOKEN"],"msg" => $response["msg"], "programas"=>$data));
	}

}

/* End of file DashboardCrtl.php */
/* Location: ./application/controllers/dashboard/DashboardCrtl.php */