
<?php

class Reverso_model extends CI_Model {

    public $GET_METODO_ENTREGA = "select id_metodo, nombre from metodo";
    public $GET_PLANFAMY = "select * from planificacion_familiar";
    public $GET_INSUMOS = "select id_insumos, nombre from insumos";

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

}
