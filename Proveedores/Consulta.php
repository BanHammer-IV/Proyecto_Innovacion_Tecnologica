<?php
    session_start();
    include("Conexion.php");

    if(isset($_SESSION["Cliente"]))
    {
        $identificador = $_SESSION["Cliente"];

        $query = "SELECT Nombre_Empresa FROM proveedores";
        $result = mysqli_query($connection, $query);
        if(!$result){
            die('Query Error '.mysqli_error($connection));
        }
        while($row = mysqli_fetch_array($result))
        {
           $json[] = array(
            'nombre' => $row["Nombre_Empresa"]
            ); 
        }
        
    }

    $jsonstring = json_encode($json);
    echo $jsonstring;
?>