<?php
    session_start();
    include("Conexion.php");

    if(isset($_SESSION["Cliente"]))
    {
        $identificador = $_SESSION["Cliente"];

        $query = "SELECT * FROM logins WHERE ID_Cliente = $identificador";
        $result = mysqli_query($connection, $query);
        if(!$result){
            die('Query Error '.mysqli_error($connection));
        }
        while($row = mysqli_fetch_array($result))
        {
           $json[] = array(
            'nombre' => $row["Nombre"],
            'permiso' => $row["Permiso"],
            'correo' => $row["Correo"]
            ); 
        }
        
    }
    else{
        $json[] = array(
            'nombre' => ""
        );
    }

    $jsonstring = json_encode($json);
    echo $jsonstring;
?>