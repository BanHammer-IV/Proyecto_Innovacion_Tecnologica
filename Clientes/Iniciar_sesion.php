<?php
    include("Conexion.php");
    
    $resultados = $_POST['search'];

    //Separacion del nombre
    $recorteNombre = array_slice($resultados, 0, 1);
    $nombre = implode("",$recorteNombre);

    //Separacion de la contraseña
    $recorte = array_slice($resultados, 1, 1);
    $contrasenia = implode("",$recorte);

    $query = "SELECT * FROM logins WHERE Nombre = '$nombre' AND Contrasenia = '$contrasenia'";
    $result = mysqli_query($connection, $query);
    if(!$result){
        die('Query Error '.mysqli_error($connection));
    }
    

    if(mysqli_num_rows($result) > 0){
        $json = array();
        while($row = mysqli_fetch_array($result)){
            $json[] = array(
                'ref' => 1,
                'id_cliente' => $row["ID_Cliente"],
                'nombre' => $row["Nombre"],
                'apellido' => $row["Apellido"],
                'correo' => $row["Correo"],
                'contrasenia' => $row["Contrasenia"]
                );
        }
    }
    else{
        $json[] = array('ref' => 0);
    }


    $jsonstring = json_encode($json);
    echo $jsonstring;

?>