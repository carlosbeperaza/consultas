
<?php

class Reverso_model extends CI_Model {

    public $GET_METODO_ENTREGA = "select id_metodo, nombre from metodo";
    public $GET_PLANFAMY = "select id_planificacion_familiar, nombre from planificacion_familiar";
    public $GET_DETECCIONES = "select id_detecciones, nombre_detecciones from detecciones";
    public $GET_INSUMOS = "select id_insumos, nombre from insumos";
    public $GET_MUJERES = "select id_mujeres, nombre_m from reverso_mujeres ";
    public $GET_ADICCIONES = "select id_adicciones, nombre_a  from adicciones";

    //aqui es donde se hace uso de la base datos "consultas"
    public function __construct() {
        parent::__construct();
        $this->load->database();
    }

    public function getMetodosEntrega() {
        $query = $this->db->query($this->GET_METODO_ENTREGA);
        return $query->result();
    }

    public function getPlanFamiliar() {
        $query = $this->db->query($this->GET_PLANFAMY);
        return $query->result();
    }

    public function getInsumos() {
        $query = $this->db->query($this->GET_INSUMOS);
        return $query->result();
    }

    public function getDetecciones(){
         $query = $this->db->query($this->GET_DETECCIONES);
        return $query->result();
    }

    public function getMujeres()
    {
         $query = $this->db->query($this->GET_MUJERES);
        return $query->result();
    }

    public function getAdicciones()
    {
         $query = $this->db->query($this->GET_ADICCIONES);
        return $query->result();
    }

    public function insertInsumos($request){
 
        $this->db->insert('consulta_insumo', $request);

        
       

    }

}
