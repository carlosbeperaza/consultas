<?php
class Consultas_model extends CI_Model {

  private $GET_TIPO_CONSULTAS = "select * from tipo_consulta";
  private $GET_FIELD_INFO_GENERAL = "select * from fields_info_general";
  private $GET_FIELD_INFO_PACIENTE = "select * from field_datos_paciente";
  private $GET_DATA_RELACION_TEMPO = "select * from relacion_temporal";
  private $GET_DATA_DERECHOHABIENCIA = "select * from derechohabiencias";
  private $GET_DATA_DISCAPACIDAD = "select * from discapacidades";
  private $GET_DATA_CLAVE_PERSONA = "select * from clave_edad";
  private $GET_PROGRAMAS = "select * from programas where status = 1";
  private $GET_IMC = "select * from imc";
  private $GET_TIPO_EDI_PRIMERA_VEZ = "select * from edi_tipo where id_edi = 1 or id_edi = 2 or id_edi = 3";
  private $GET_TIPO_EDI_SUBSECUENTE = "select * from edi_tipo where id_edi = 4 or id_edi = 5 or id_edi = 6";
  private $GET_REFERIDO_BY = "select * from referido_by where status = 1";
  private $GET_TIPO_EDI_ALL = "select * from edi_tipo";
  private $GET_RESULTADO_BATTELLE = "select * from rest_battelle";
  private $GET_COMPLICACIONES = "select * from complicaciones";
  private $GET_OTRAS_ACCIONES = "select * from embarazo_acciones";
  private $GET_TIPO_PERSONA = "select * from tipo_personal";
  private $GET_SERVICIOS = "select * from servicios";
  
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
  
  public function getProgramas()
  {
    $query = $this->db->query($this->GET_PROGRAMAS);
    return $query->result(); 
  }
  
  public function getIMC()
  {
    $query = $this->db->query($this->GET_IMC);
    return $query->result(); 
  }
  
   public function getEdiTipoUno()
  {
    $query = $this->db->query($this->GET_TIPO_EDI_PRIMERA_VEZ);
    return $query->result(); 
  }
  
   public function getEdiTipoDos()
  {
    $query = $this->db->query($this->GET_TIPO_EDI_SUBSECUENTE);
    return $query->result(); 
  }
  
  public function getReferidoBy()
  {
    $query = $this->db->query($this->GET_REFERIDO_BY);
    return $query->result(); 
  }
  
  public function getResultBattelle()
  {
    $query = $this->db->query($this->GET_RESULTADO_BATTELLE);
    return $query->result(); 
  }
  
  public function getEdiTipoAll()
  {
    $query = $this->db->query($this->GET_TIPO_EDI_ALL);
    return $query->result(); 
  }
  public function getComplicaciones()
  {
    $query = $this->db->query($this->GET_COMPLICACIONES);
    return $query->result(); 
  }
  public function getOtrasAcciones()
  {
    $query = $this->db->query($this->GET_OTRAS_ACCIONES);
    return $query->result(); 
  }
  public function getTipoPersona()
  {
    $query = $this->db->query($this->GET_TIPO_PERSONA);
    return $query->result(); 
  }
  
  public function getServicios()
  {
    $query = $this->db->query($this->GET_SERVICIOS);
    return $query->result(); 
  }

 }