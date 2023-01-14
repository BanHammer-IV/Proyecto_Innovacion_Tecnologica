<?php

    include('conexion.php');

    session_start();

    $identificador = $_SESSION["Cliente"];

    $query = "SELECT * FROM ventas WHERE ID_Vendedor = $identificador";
    $result = mysqli_query($connection, $query);
    if(!$result){
        die('Query Error '.mysqli_error($connection));
    }
    while($row = mysqli_fetch_array($result)){
        $json[] = array(
            'id_ventas' => $row["ID_Ventas"],
            'id_vendedor' => $row["ID_Vendedor"],
            'descripcion' => $row["Descripcion"],
            'fecha' => $row["Fecha"],
            'total_venta' => $row["Total_Venta"]
        );
    }
    $jsonstring = json_encode($json);
    echo $jsonstring;
    
?>