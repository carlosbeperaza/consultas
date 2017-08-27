<?php
class Consultas_model extends CI_Model {

  public $GET_TIPO_CONSULTAS = "select * from tipo_consulta";

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
 }