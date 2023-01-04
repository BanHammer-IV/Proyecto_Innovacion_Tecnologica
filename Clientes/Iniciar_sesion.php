<?php
    include("Conexion.php");
    session_start();

    $resultados = $_POST['search'];

    //Separador
    $recorte = array_slice($resultados, 0, 1);
    $separador = implode("", $recorte);
    $checadorArroba = strstr($separador, '@');

    //Separacion del nombre
    $recorteNombre = array_slice($resultados, 0, 1);
    $nombre = implode("",$recorteNombre);

    //Separacion de la contraseña
    $recortePassword = array_slice($resultados, 1, 1);
    $contrasenia = implode("",$recortePassword);

    //En caso de ser un correo
    if($checadorArroba == "@gmail.com" || $checadorArroba == "@hotmail.com" || $checadorArroba == "@outlook.com")
    {
        //Query que busca en la tabla logins al usuario
        $query = "SELECT * FROM logins WHERE Correo = '$separador' AND Contrasenia = '$contrasenia'";
        $result = mysqli_query($connection, $query);
        if(!$result){
            die('Query Error '.mysqli_error($connection));
        }
        
        //Si hay mas de 0 resultados quiere decir que encontro al indicado
        if(mysqli_num_rows($result) > 0){
            $json = array();
            while($row = mysqli_fetch_array($result)){
                $_SESSION["Cliente"] = $row["Nombre"];
                $json[] = array(
                    'ref' => 0,
                    'id_cliente' => $row["ID_Cliente"],
                    'nombre' => $row["Nombre"],
                    'apellido' => $row["Apellido"],
                    'correo' => $row["Correo"]
                    );
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
        
        //Si hay mas de 0 resultados quiere decir que encontro al indicado
        if(mysqli_num_rows($result) > 0){
            $json = array();
            while($row = mysqli_fetch_array($result)){
                $_SESSION["Cliente"] = $row["Nombre"];
                $json[] = array(
                    'ref' => 1,
                    'id_cliente' => $row["ID_Cliente"],
                    'nombre' => $row["Nombre"],
                    'apellido' => $row["Apellido"],
                    'correo' => $row["Correo"]
                    );
            }
        }
    }


    $jsonstring = json_encode($json);
    echo $jsonstring;

?>