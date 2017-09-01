
<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class ReversoCtrl extends CI_Controller {

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
        $this->load->model("consultas/Reverso_model");
    }

    public function index() {
        $this->load->view("consulta/reverso.html");
    }

    public function getMetodoEntrega() {

        $data['data'] = $this->Reverso_model->getMetodosEntrega();
        echo json_encode($data);
    }

    public function getPlanFamiliar() {

        $data['data'] = $this->Reverso_model->getPlanFamiliar();
        echo json_encode($data);
    }

    public function getInsumos() {

        $data['data'] = $this->Reverso_model->getInsumos();
        echo json_encode($data);
    }

}
