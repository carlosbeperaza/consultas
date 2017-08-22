<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ChartsCtrl extends CI_Controller {

	public function index()
	{
		$this->load->view("charts/charts.html");
	}

}

/* End of file ChartsCtrl.php */
/* Location: ./application/controllers/charts/ChartsCtrl.php */