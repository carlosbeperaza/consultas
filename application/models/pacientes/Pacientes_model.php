<?php
class Pacientes_model extends CI_Model {

  public $GET_PACIENTE_BY_NO_AFILIACION = "select * from pacientes where num_afilicacion = ";

  //aqui es donde se hace uso de la base datos "urgencias"
  public  function __construct()
  {
    parent::__construct();
    $this->load->database();

  }

  /**
   * 
   * @param type $noAfiliacion
   * @return type
   * consulta que buscar por un paciente por numero de afiliación
   */
  public function buscarUsuarioByAfiliacion($noAfiliacion)
  {
    $query = $this->db->query($this->GET_PACIENTE_BY_NO_AFILIACION . "'".$noAfiliacion ."'" . " AND status = 1");
      return $query->result();     
   }
 }