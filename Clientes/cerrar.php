<?php
    session_start();
    
    session_destroy();

    $json[] = array(
        "nombre" => "",
        "mensaje" => "Sesion cerrada"
    );

    $jsonstring = json_encode($json);
    echo $jsonstring;
?>