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
		$this->load->model("dashboard/Dashboard_model");
	}

	public function index()
	{
		$this->load->view("dashboard/dashboard.html");
	}


	public function getProgramas()
	{		
		$data['data'] = $this->Dashboard_model->getProgramas();
		echo json_encode($data);
	}

}

/* End of file DashboardCrtl.php */
/* Location: ./application/controllers/dashboard/DashboardCrtl.php */