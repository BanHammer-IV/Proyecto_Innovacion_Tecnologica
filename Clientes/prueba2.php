<?php
    session_start();

    $mensaje = "No hay nada registrado";
    if(isset($_SESSION["Cliente"]))
    {
        $json[] = array(
            'ref' => session_status(),
            'nombre' => $_SESSION["Cliente"]
        );
    }
    else{
        $json[] = array(
            'mensaje' => $mensaje
        );
    }
    
    $jsonstring = json_encode($json);
    echo $jsonstring;
?>