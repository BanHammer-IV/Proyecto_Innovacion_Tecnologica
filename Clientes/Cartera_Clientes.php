<?php
    session_start();
    include("Conexion.php");

    if(isset($_SESSION["Cliente"]))
    {
        $identificador = $_SESSION["Cliente"];

        $query = "SELECT Nombre, Correo, Apellido FROM logins WHERE Permiso != 'Administrador'";
        $result = mysqli_query($connection, $query);
        if(!$result){
            die('Query Error '.mysqli_error($connection));
        }
        while($row = mysqli_fetch_array($result))
        {
           $json[] = array(
            'nombre' => $row["Nombre"],
            'apellido' => $row["Apellido"],
            'correo' => $row["Correo"]
            ); 
        }
        
    }

    $jsonstring = json_encode($json);
    echo $jsonstring;
?>