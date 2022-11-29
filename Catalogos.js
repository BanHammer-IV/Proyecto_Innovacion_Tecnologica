function removedor()
{
    //Funcion que borra lo que se esta mostrando
    //actualmente en la pagina
    $(function()
    {
        setTimeout(function()
        {
            $(document.getElementById("inicio")).remove();
        })
    });
}

//Funcion que muestra todo la lista de productos
function AccesoCatalogo()
{
    removedor();
    let textoh1 = document.createElement('h1');
    textoh1.innerText = "Catalogo de productos";
    textoh1.setAttribute('Id', 'Catalogo');
    textoh1.setAttribute('class', 'Titulo');
    document.body.appendChild(textoh1);
}

//Funcion que muestra las ventas  realizadas por el usuario
function AccesoVentas()
{
    removedor();
    let textoh1 = document.createElement('h1');
    textoh1.innerText = "Ventas del usuario";
    textoh1.setAttribute('Id', 'Ventas');
    document.body.appendChild(textoh1);
}

//Funcion que muestra las compras realizadas por el usuario
function AccesoCompras()
{
    removedor();
    let textoh1 = document.createElement('h1');
    textoh1.innerText = "Compras del usuario";
    textoh1.setAttribute('Id', 'inicio');
    document.body.appendChild(textoh1);
}

//Funcion para Iniciar sesion
function AccesoInicioSesion()
{
    removedor();
    let textoh1 = document.createElement('h1');
    textoh1.innerText = "Bienvenido";
    textoh1.setAttribute('Id', 'inicio');
    document.body.appendChild(textoh1);
}

//Funcion para Registrarse
function AccesoRegistroNuevo()
{
    removedor();
    let textoh1 = document.createElement('h1');
    textoh1.innerText = "Registro";
    textoh1.setAttribute('Id', 'inicio');
    document.body.appendChild(textoh1);
}

function obtenerID()
{
    let obj = document.getElementById("Catalogo");
    console.log(obj);
}