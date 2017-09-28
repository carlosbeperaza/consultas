<?php
defined('BASEPATH') OR exit('No direct script access allowed');

	

class DashboardCtrl extends MY_Controller {

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
            $this->load->model('dashboard/Dashboard_model','dashboardModel');
	}

	public function index()
	{
            $this->load->view("dashboard/dashboard.html");
	}

	public function getProgramas()
	{
        $data = $this->dashboardModel->getProgramas();
        echo \json_encode($data);
      }

}
