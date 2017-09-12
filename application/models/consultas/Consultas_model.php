<?php
class Consultas_model extends CI_Model {

  public $GET_TIPO_CONSULTAS = "select * from tipo_consulta";
  public $GET_FIELD_INFO_GENERAL = "select * from fields_info_general";
  public $GET_FIELD_INFO_PACIENTE = "select * from field_datos_paciente";
  public $GET_DATA_RELACION_TEMPO = "select * from relacion_temporal";
  public $GET_DATA_DERECHOHABIENCIA = "select * from derechohabiencias";
  public $GET_DATA_DISCAPACIDAD = "select * from discapacidades";
  public $GET_DATA_CLAVE_PERSONA = "select * from clave_edad";
  //aqui es donde se hace uso de la base datos "urgencias"
  public  function __construct()
  {
    parent::__construct();
    $this->load->database();

  }

  public function getTipoConsulta()
  {
    $query = $this->db->query($this->GET_TIPO_CONSULTAS);
    return $query->result();     
  }

  public function getFieldsInfoGeneral()
  {
      $query = $this->db->query($this->GET_FIELD_INFO_GENERAL);
      return $query->result();     
  }

  public function getFieldsPaciente()
  {
    $query = $this->db->query($this->GET_FIELD_INFO_PACIENTE);
    return $query->result();     
  }
  public function getDataRelacionTemporal(){
    $query = $this->db->query($this->GET_DATA_RELACION_TEMPO);
    return $query->result();    
  }
  public function getDataDerechohabiencia()
  {
     $query = $this->db->query($this->GET_DATA_DERECHOHABIENCIA);
     return $query->result();  
  }
  public function getDataDiscapacidad()
  {
     $query = $this->db->query($this->GET_DATA_DISCAPACIDAD);
     return $query->result();  
  }
  public function getDataClavePersona()
  {

    $query = $this->db->query($this->GET_DATA_CLAVE_PERSONA);
    return $query->result(); 
  }

 }