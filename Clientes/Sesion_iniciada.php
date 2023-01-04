<?php
    session_start();

    if(isset($_SESSION["Cliente"]))
    {
        $json[] = array(
            'ref' => session_status(),
            'nombre' => $_SESSION["Cliente"]
        );
    }
    else{
        $json[] = array(
            'nombre' => ""
        );
    }

    $jsonstring = json_encode($json);
    echo $jsonstring;
?>