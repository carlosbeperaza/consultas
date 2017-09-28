<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class ConsultasCtrl extends CI_Controller {

    public function __construct() {

        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
        $method = $_SERVER['REQUEST_METHOD'];
        if ($method == "OPTIONS") {
            die();
        }
        parent::__construct();
        $this->load->model("consultas/Consultas_model");       
    }

    public function index() {
        $this->load->view("consulta/consulta.html");
    }
      public function getTipoConsulta() {
        $data['data'] = $this->Consultas_model->getTipoConsulta();
        echo json_encode($data);
    }

    public function getFieldsInfoGeneral() {
        $data['data'] = $this->Consultas_model->getFieldsInfoGeneral();
        echo json_encode($data);
    }

    public function getFieldsPaciente() {
        $data['data'] = $this->Consultas_model->getFieldsPaciente();
        echo json_encode($data);
    }

    public function getDataRelacionTemporal()
    {
        $data['data'] = $this->Consultas_model->getDataRelacionTemporal();
        echo json_encode($data);
    }
    public function getDataDerechohabiencia(){

         $data['data'] = $this->Consultas_model->getDataDerechohabiencia();
        echo json_encode($data);
    }
    public function getDataDiscapacidad(){
        
         $data['data'] = $this->Consultas_model->getDataDiscapacidad();
        echo json_encode($data);
    }
    public function getDataClavePersona()
    {
        $data['data'] = $this->Consultas_model->getDataClavePersona();
        echo json_encode($data);
    }    
    public function getProgramas()
    {
        $data['data'] = $this->Consultas_model->getProgramas();
        echo json_encode($data);
    }    
    public function getIMC()
    {
        $data['data'] = $this->Consultas_model->getIMC();
        echo json_encode($data);
    }
    public function getEdiTipoUno()
    {
        $data['data'] = $this->Consultas_model->getEdiTipoUno();
        echo json_encode($data);
    }
    public function getEdiTipoDos()
    {
        $data['data'] = $this->Consultas_model->getEdiTipoDos();
        echo json_encode($data);
    }
    public function getReferidoBy()
    {
        $data['data'] = $this->Consultas_model->getReferidoBy();
        echo json_encode($data);
    }
    public function getResultBattelle()
    {
        $data['data'] = $this->Consultas_model->getResultBattelle();
        echo json_encode($data);
    }
    public function getEdiTipoAll()
    {
        $data['data'] = $this->Consultas_model->getEdiTipoAll();
        echo json_encode($data);
    }
    public function getComplicaciones()
    {
        $data['data'] = $this->Consultas_model->getComplicaciones();
        echo json_encode($data);
    }
    public function getOtrasAcciones()
    {
        $data['data'] = $this->Consultas_model->getOtrasAcciones();
        echo json_encode($data);
    }    
    public function getTipoPersona()
    {
        $data['data'] = $this->Consultas_model->getTipoPersona();
        echo json_encode($data);
    }
    
    public function getServicios()
    {
        $data['data'] = $this->Consultas_model->getServicios();
        echo json_encode($data);
    }
          

}
