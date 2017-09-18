<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class UsuariosCtrl extends CI_Controller {

    public function __construct() {

        parent::__construct();
        $this->load->database();   
        	
    }

    public function index() {
        $this->load->view("usuarios/login.html");
    }
    public function register() {
        $this->load->view("usuarios/register.html");
    }  
}