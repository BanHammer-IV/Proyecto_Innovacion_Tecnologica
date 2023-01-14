<?php
    include("Conexion.php");
    session_start();

    $username = $_POST['username'];
    $password = $_POST['password'];

    //Separador
    $checadorArroba = strstr($username, '@');

    //En caso de ser un correo
    if($checadorArroba == "@gmail.com" || $checadorArroba == "@hotmail.com" || $checadorArroba == "@outlook.com")
    {
        //Query que busca en la tabla logins al usuario
        $query = "SELECT * FROM logins WHERE Correo = '$username' AND Contrasenia = '$password'";
        $result = mysqli_query($connection, $query);
        if(!$result){
            die('Query Error '.mysqli_error($connection));
        }

        if(mysqli_num_rows($result) > 0){
            header("location: ../users/Principal.html");
            
            while($row = mysqli_fetch_array($result)){
                $_SESSION["Cliente"] = $row["ID_Cliente"];
            }
        }
        
    }
    //En caso de ser un usuario
    else
    {
        //Query que busca en la tabla logins al usuario
        $query = "SELECT * FROM logins WHERE Nombre = '$nombre' AND Contrasenia = '$contrasenia'";
        $result = mysqli_query($connection, $query);
        if(!$result){
            die('Query Error '.mysqli_error($connection));
        }
        
    }
?>