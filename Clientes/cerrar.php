<?php
    session_start();
    
    session_destroy();

    $json[] = array(
        "nombre" => "",
        "mensaje" => "Sesion cerrada"
        header("location:../index.html")
    );

    $jsonstring = json_encode($json);
    echo $jsonstring;
?>