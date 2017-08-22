<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class TablesCtrl extends CI_Controller {

	public function index()
	{
		$this->load->view("tables/tables.html");
	}

}

/* End of file TablesCtrl.php */
/* Location: ./application/controllers/tables/TablesCtrl.php */