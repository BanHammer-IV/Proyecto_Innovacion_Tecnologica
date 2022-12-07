<?php

    include('conexion.php');

    $query = "SELECT * FROM compras";
    $result = mysqli_query($connection, $query);
    if(!$result){
        die('Query Error '.mysqli_error($connection));
    }
    $json = array();
    while($row = mysqli_fetch_array($result)){
        $json[] = array(
            'id_compra' => $row["ID_Compra"],
            'id_vendedor' => $row["ID_Vendedor"],
            'descripcion' => $row["Descripcion"],
            'fecha' => $row["Fecha"],
            'total_compra' => $row["Total_Compra"]
        );
    }
    $jsonstring = json_encode($json);
    echo $jsonstring;
    
?>