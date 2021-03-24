<?php

class _mysqli{

    protected $conn;
    protected $response;
    public $data;

    public function __construct()
    {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $nameDB = "total_code";

        $this->conn = mysqli_connect($servername, $username, $password, $nameDB);

        if (!$this->conn) {
            die("Connection failed: " . mysqli_connect_error());
        }
    }

    public function query($sql){
        try{
            $this->response = $this->conn->query($sql);
        }catch (\Exception $e){
            die("Query failed: " . $e->getMessage());
        }

        $this->setData();
    }

    public function setData(){
        $response = [];
        while ($row = $this->response->fetch_assoc()) {
            $data = [];
            foreach ($row as $key => $value){
                $data[$key] = $value;
            }
            $response[] = $data;
        }
        $this->data = $response;
    }

}
