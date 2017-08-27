<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class PacientesCtrl extends CI_Controller {

    public function __construct() {

        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
        $method = $_SERVER['REQUEST_METHOD'];
        if ($method == "OPTIONS") {
            die();
        }
        parent::__construct();
        //Do your magic here	
        $this->load->model("pacientes/Pacientes_model");
    }
//
//    public function index() {
//        $this->load->view("consulta/consulta.html");
//    }
    
    /**
     * function que llama al metodo y regresa el objeto encontrado
     * por numero de afiliación
     */
    public function buscarUsuarioByAfiliacion() {
        $noAfiliacion = json_decode(file_get_contents("php://input"));
        $data['data'] = $this->Pacientes_model->buscarUsuarioByAfiliacion($noAfiliacion->numberAfiliacion);
        echo json_encode($data);
    }

}
