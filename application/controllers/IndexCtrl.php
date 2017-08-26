<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class IndexCtrl extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		//Do your magic here
	}
	public function index()
	{
		$this->load->view("welcome");
	}

}

/* End of file IndexCtrl.php */
/* Location: ./application/controllers/IndexCtrl.php */