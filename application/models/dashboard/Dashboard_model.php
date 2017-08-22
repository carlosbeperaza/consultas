<?php
class Dashboard_model extends CI_Model {

  public $GET_PROGRAMAS = "select * from programas";

  //aqui es donde se hace uso de la base datos "urgencias"
  public  function __construct()
  {
    parent::__construct();
    $this->load->database();

  }

  public function getProgramas()
  {
    $query = $this->db->query($this->GET_PROGRAMAS);
    return $query->result();     
   }
 }