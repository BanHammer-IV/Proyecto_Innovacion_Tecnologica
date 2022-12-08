<?php
    include('Conexion.php');
    
     $resultados = $_POST['search'];

    if(!empty($resultados))
    {
        $query = "SELECT * FROM logins WHERE Nombre LIKE '$resultados%'";
        $result = mysqli_query($connection, $query);
        if(!$result){
            die('Query Error '.mysqli_error($connection));
        }
        $json = array();
        while($row = mysqli_fetch_array($result)){
            $json[] = array(
                'id_cliente' => $row["ID_Cliente"],
                'nombre' => $row["Nombre"],
                'apellido' => $row["Apellido"],
                'correo' => $row["Correo"],
                'contrasenia' => $row["Contrasenia"]
            );
        }
        $jsonstring = json_encode($json);
        echo $jsonstring;
    }
?>