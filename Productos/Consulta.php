<?php

    include('conexion.php');
    session_start();

    $inventario;
    $permiso;

    $cliente = $_SESSION["Cliente"];
    $query_usuario = "SELECT * FROM logins WHERE ID_Cliente = $cliente";
    $result_usuario = mysqli_query($connection, $query_usuario);
    if(!$result_usuario){
        die('Query Error '.mysqli_error($connection));
    }

    while($row = mysqli_fetch_array($result_usuario)){
        $permiso = $row["Permiso"];
    }

    if($permiso == "Administrador"){
        //Administrador
        $query_productos = "SELECT * FROM productos";
        $result_productos = mysqli_query($connection, $query_productos);
        if(!$result_productos){
            die('Query Error '.mysqli_error($connection));
        }

        while($row = mysqli_fetch_array($result_productos)){
            $json[] = array(
                'nombre_producto' => $row["Nombre_Producto"],
                'descripcion' => $row["Descripcion"]
            );
        }
    }

    if($permiso == "Cliente"){
    //Cliente
    $query_inventario = "SELECT Inventario FROM inventario WHERE ID_Cliente = $cliente";
    $result_inventario = mysqli_query($connection, $query_inventario);
    if(!$result_inventario){
        die('Query Error '.mysqli_error($connection));
    }

    $json = array();
    while($row = mysqli_fetch_array($result_inventario)){

        $inventario = $row["Inventario"];
    }

    $repeticion = substr_count($inventario,";");
    for($i = 0; $i < $repeticion; $i++ ){
        $separador = explode(";", $inventario);
        $identificador = explode(",", $separador[$i]);
        $numero_producto = array_slice($identificador, 0, 1);
        $existencias = array_slice($identificador, 1, 1);
        $producto = implode("", $numero_producto);
        
        $query = "SELECT * FROM productos WHERE ID_Producto = $producto";
        $result = mysqli_query($connection, $query);
        if(!$result){
            die('Query Error '.mysqli_error($connection));
        }        
        while($row = mysqli_fetch_array($result)){
            $json[] = array(
                'nombre_producto' => $row["Nombre_Producto"],
                'existencias' => $existencias,
                'descripcion' => $row["Descripcion"]
            );
        }
    }
    }
    

    
    $jsonstring = json_encode($json);
    echo $jsonstring;
    
?>