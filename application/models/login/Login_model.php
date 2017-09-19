<?php 
class Login_model extends CI_Model{
    public function __construct(){
        parent::__construct();
        $this->load->database();   
    }
 
    public function login($email,$password){
        
        $query = $this->db->select("id_usuario,nombre,primer_apellido,secundo_apellido,correo as email,user_avatar")
        ->from("usuarios")
        ->where("correo", $email)
        ->where("password", $password)
        ->get();
        if($query->num_rows() === 1)
        {
            return $query->row();
        }
        return false;
    }
    
    public function checkUser($id_usuario, $email)
    {
        $query = $this->db->limit(1)->get_where("usuarios", array("id_usuario" => $id_usuario, "correo" => $email));
        return $query->num_rows() === 1;
    }
}

