<?php
    session_start();

    include("Conexion.php");
    
    $resultados = $_POST['search'];

    //Separador
    $separador = implode("", $resultados);
    $checadorArroba = strstr($separador, '@');

    //En caso de ser un correo
    if($checadorArroba == "@gmail.com" || $checadorArroba == "@hotmail.com" || $checadorArroba == "@outlook.com")
    {
        $_SESSION["Cliente"] = $resultados;
        $json[] = array(
            'ref' => 0,
            'nombre' => $_SESSION["Cliente"]
        );
        
    }
    //En caso de ser un usuario
    else
    {
        $_SESSION["referencia"] = 1; 
        $_SESSION["Cliente"] = $resultados;
        $json[] = array(
            'ref' => $_SESSION["referencia"],
            'nombre' => $_SESSION["Cliente"]
        );
    }
    $jsonstring = json_encode($json);
    echo $jsonstring;

?>