<?php
defined('BASEPATH') OR exit('No direct script access allowed');	

class ConsultaCtrl extends CI_Controller {

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
	}

	public function index()
	{
		$this->load->view("consulta/consulta.html");
	}

}