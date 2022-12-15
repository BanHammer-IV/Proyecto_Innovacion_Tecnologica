<?php
    include("Conexion.php");
    
    $resultados = $_POST['search'];

    //Separacion del nombre
    $recorteNombre = array_slice($resultados, 0, 1);
    $nombre = implode("",$recorteNombre);

    //Separacion de la contraseña
    $recorte = array_slice($resultados, 1, 1);
    $contrasenia = implode("",$recorte);

    $json[] = array('nombre' => $nombre, 'contrasenia' => $contrasenia);

    $jsonstring = json_encode($json);
    echo $jsonstring;

?>