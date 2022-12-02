<?php

    $connection = mysqli_connect(
        'localhost',
        'root'
        'password',
        'proyecto_infraestructura_informatica'
    );

    if($connection){
        echo "Database is connected";
    }
?>