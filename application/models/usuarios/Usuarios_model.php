<?php
class Usuarios_model extends CI_Model {

  private $GET_USER_LOGON_BY_EMAIL = "select * from usuarios where correo = ";

  
  //aqui es donde se hace uso de la base datos "urgencias"
  public  function __construct()
  {
    parent::__construct();
    $this->load->database();
  }

  public function getUserLogonByEmail($email)
  {
     
    $query = $this->db->query($this->GET_USER_LOGON_BY_EMAIL . "'$email'" . " AND status = 1");
    return $query->result();     
  }  

 }