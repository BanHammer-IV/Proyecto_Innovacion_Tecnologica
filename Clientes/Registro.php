<?php
    include('Conexion.php');
    
    $registro = $_POST['search'];
    
    //Nombre - separador
    $separador = array_slice($registro, 0, 1);
    $nombre = implode("", $separador);

    //Apellido - separador
    $separador = array_slice($registro, 1, 1);
    $apellido = implode("", $separador);

    //Correo - separador
    $separador = array_slice($registro, 2, 1);
    $correo = implode("", $separador);
    //Contraseña - separador
    $separador = array_slice($registro, 3, 1);
    $contrasenia = implode("", $separador);
    //Sentencia
    $query = "INSERT INTO `logins`(`Nombre`, `Apellido`, `Correo`, `Contrasenia`) VALUES ('$nombre','$apellido','$correo','$contrasenia')";
    $result = mysqli_query($connection, $query);

    echo $mensaje;
?>