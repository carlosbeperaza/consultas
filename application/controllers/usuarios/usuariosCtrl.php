<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class UsuariosCtrl extends CI_Controller {

    public function __construct() {

        parent::__construct();
//        $this->load->database(); 
        $this->load->model("usuarios/Usuarios_model"); 
        	
    }

    public function index() {
        $this->load->view("usuarios/login.html");
    }
    public function register() {
        $this->load->view("usuarios/register.html");
    }
    
    public function getUserLogonByEmail() {
        $usuario = json_decode(file_get_contents("php://input"));
        $data['data'] = $this->Usuarios_model->getUserLogonByEmail($usuario->email);
        echo json_encode($data);
    }
}