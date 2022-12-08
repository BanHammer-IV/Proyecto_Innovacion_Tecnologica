<?php
    include('Conexion.php');
    
    $resultados = $_POST['search'];
    if(!empty($resultados))
    {
        $query = "SELECT * FROM productos WHERE Nombre_Producto LIKE '$resultados%'";
        $result = mysqli_query($connection, $query);
        if(!$result){
            die('Query Error '.mysqli_error($connection));
        }
        $json = array();
        while($row = mysqli_fetch_array($result)){
            $json[] = array(
                'id_producto' => $row["ID_Producto"],
                'nombre_producto' => $row["Nombre_Producto"],
                'existencias' => $row["Existencias"],
                'precio' => $row["Precio"],
                'id_proveedor' => $row["ID_Proveedor"],
                'descripcion' => $row["Descripcion"]
            );
        }
        $jsonstring = json_encode($json);
        echo $jsonstring;
    }
?>