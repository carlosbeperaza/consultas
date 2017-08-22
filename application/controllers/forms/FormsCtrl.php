<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class FormsCtrl extends CI_Controller {

	public function index()
	{
		$this->load->view("forms/forms.html");
		
	}

}

/* End of file formsCtrl.php */
/* Location: ./application/controllers/forms/formsCtrl.php */