<?php
    session_start();
    
    session_destroy();

    $json[] = array(
        "nombre" => ""
    );

    $jsonstring = json_encode($json);
    echo $jsonstring;
?>