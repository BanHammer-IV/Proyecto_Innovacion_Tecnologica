<?php
    include('conexion.php');

    $resultados = $_POST['resultados'];

    if(!empty($resultados)){
        $query =" SELECT * FROM `productos` ";
        $result = mysqli_query($connection, $query);
        if(!$result){
            die('Query Error '.mysqli_error($connection));
        }

        while($row = mysqli_fetch_array($result)){
            $json[] = array(
                'id_producto' => $row['ID_Producto'];
                'nombre' => $row['Nombre_Producto'];
                'existencias' => $row['Existencias'];
                'precio' => $row['Precio'];
                'ID_Proveedor' => $row['ID_Proveedor'];
                'Descripcion' => $row['Descripcion'];
            );
        }

        $jsonstring = json_encode($json);
        echo $jsonstring;
    
    }
?>