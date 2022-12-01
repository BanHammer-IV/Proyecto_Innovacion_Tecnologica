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

//Funcion que muestra el inicio/noticias del software y de la semana
function InicioNoticias()
{
    removedor();
    // DIV  //
    let Noticia = document.createElement('div');
    Noticia.setAttribute('id', 'inicio');

    // H2 - TITULO  //
    let Titulo = document.createElement('h2');
    Titulo.innerText = "Noticias";
    Titulo.setAttribute('class', 'Titulo');

    //Agregacion de los textos
    Noticia.appendChild(Titulo);

    for(let a = 1; a <= 4; a++)
    {
        let texto = document.createElement('p');
        let Lado = document.createElement('div');
        texto.setAttribute('id', 'prueba');
        if(a % 2 != 0)
        {
            //Izquierda
            Lado.setAttribute('class', 'recuadroIzq');
            texto.innerText = "What is Lorem Ipsum?\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
            texto.setAttribute('class', 'texto');
            Lado.appendChild(texto);
            Noticia.appendChild(Lado);
        }

        if(a % 2 == 0)
        {
            //Derecha
            Lado.setAttribute('class', 'recuadroDer');
            texto.innerText = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
            texto.setAttribute('class', 'texto');
            Lado.appendChild(texto);
            Noticia.appendChild(Lado);
        }
    }
    document.body.appendChild(Noticia);
}

//Funcion que muestra todo la lista de productos
function AccesoCatalogo()
{
    removedor();

    //DIV - CONTENEDOR
    let Contenedor = document.createElement('div');
    Contenedor.setAttribute('class', 'contenedor');
    Contenedor.setAttribute('id', 'inicio');

    //Titulo
    let Titulo = document.createElement('h2');
    Titulo.innerText = "Catalogo de productos\n";
    Titulo.setAttribute('class', 'Titulo');

    Contenedor.appendChild(Titulo);

    for(let i = 1; i <= 10; i++)
    {
        //DIV - Tarjeta del Producto
        let TarjetaProducto = document.createElement('div');
        TarjetaProducto.setAttribute('class', 'Tarjeta_producto');
        
        //Imagen
        let ImagenTarjeta = document.createElement('img');
        ImagenTarjeta.setAttribute('src', 'Images/00750100010630L.webp');
        ImagenTarjeta.setAttribute('class', 'imagen');

        //Separacion( Este apartado es meramente decorativo )
        let Separador = document.createElement('hr');
        
        //DIV - DESCRIPCION
        let Descripcion = document.createElement('div');
        Descripcion.setAttribute('class', 'descripcion');
        Descripcion.innerText = "Descripcion: \n 62 gr";
        
        //BOTON DE REVISION
        let BotonRevision = document.createElement('button');
        BotonRevision.setAttribute('onclick', 'RevisarProducto()');
        BotonRevision.setAttribute('class', 'BtnProducto');
        BotonRevision.innerText = "Revisar";

        //Empaquetado
        TarjetaProducto.appendChild(ImagenTarjeta);
        TarjetaProducto.appendChild(Separador);
        TarjetaProducto.appendChild(Descripcion);
        TarjetaProducto.appendChild(BotonRevision);
    
        Contenedor.appendChild(TarjetaProducto);
    }
    document.body.appendChild(Contenedor);
}

//Funcion que muestra las ventas  realizadas por el usuario
function AccesoVentas()
{
    removedor();
    let textoh1 = document.createElement('h1');
    textoh1.innerText = "Ventas del usuario";
    textoh1.setAttribute('Id', 'inicio');
    textoh1.setAttribute('class', 'Titulo');
    document.body.appendChild(textoh1);
}

//Funcion que muestra las compras realizadas por el usuario
function AccesoCompras()
{
    removedor();
    let textoh1 = document.createElement('h1');
    textoh1.innerText = "Compras del usuario";
    textoh1.setAttribute('Id', 'inicio');
    textoh1.setAttribute('class', 'Titulo');
    document.body.appendChild(textoh1);
}

//Funcion para Iniciar sesion
function AccesoInicioSesion()
{
    removedor();
    let textoh1 = document.createElement('h1');
    textoh1.innerText = "Bienvenido";
    textoh1.setAttribute('Id', 'inicio');
    textoh1.setAttribute('class', 'Titulo');
    document.body.appendChild(textoh1);
}

//Funcion para Registrarse
function AccesoRegistroNuevo()
{
    removedor();
    //  DIV     //
    let Registro = document.createElement('div');
    Registro.setAttribute('Id', 'inicio');
    Registro.setAttribute('class', 'Tarjeta_Registro');

    //  FORM    //
    let formulario = document.createElement('form');
    formulario.setAttribute('action', '#');

    // INPUT - NOMBRE                 //
    let inputName = document.createElement('input');
    inputName.setAttribute('type', 'text');
    inputName.setAttribute('name', 'nombre');     
    inputName.setAttribute('class', 'inputForm');
    inputName.setAttribute('placeholder', 'Nombre');

    // INPUT - APELLIDO               //
    let inputApellido = document.createElement('input');
    inputApellido.setAttribute('type', 'text');
    inputApellido.setAttribute('name', 'apellido');     
    inputApellido.setAttribute('class', 'inputForm');
    inputApellido.setAttribute('placeholder', 'Apellido');

    // INPUT - CORREO                 //
    let inputCorreo = document.createElement('input');
    inputCorreo.setAttribute('type', 'text');
    inputCorreo.setAttribute('name', 'correo');     
    inputCorreo.setAttribute('class', 'inputForm');
    inputCorreo.setAttribute('placeholder', 'Correo');

    // INPUT - CONTRASEÑA             //
    let inputContrasenia = document.createElement('input');
    inputContrasenia.setAttribute('type', 'text');
    inputContrasenia.setAttribute('name', 'contrasenia');     
    inputContrasenia.setAttribute('class', 'inputForm');
    inputContrasenia.setAttribute('placeholder', 'Contraseña');

    // INPUT - CONFIRMAR CONTRASEÑA   //
    let inputConfirmarContrasenia = document.createElement('input');
    inputConfirmarContrasenia.setAttribute('type', 'text');
    inputConfirmarContrasenia.setAttribute('name', 'confirmarcontrasenia');     
    inputConfirmarContrasenia.setAttribute('class', 'inputForm');
    inputConfirmarContrasenia.setAttribute('placeholder', 'Confirmar Contraseña');

    // BOTON - REGISTRAR //
    let btnRegistro = document.createElement('input');
    btnRegistro.setAttribute('type', 'submit');
    btnRegistro.setAttribute('value', 'Registrar');
    btnRegistro.setAttribute('class', 'btnRegistro');

    //  H1 - TITULO //
    let Titulo = document.createElement('h1');
    Titulo.innerText = "Registro";
    Titulo.setAttribute('class', 'Titulo');

    //  Fundiendo to' //
    formulario.appendChild(inputName);
    formulario.appendChild(inputApellido);    
    formulario.appendChild(inputCorreo);    
    formulario.appendChild(inputContrasenia);
    formulario.appendChild(inputConfirmarContrasenia);    
    formulario.appendChild(btnRegistro);
    Registro.appendChild(Titulo);
    Registro.appendChild(formulario);

    document.body.appendChild(Registro);
}

function Prueba()
{
    $.get('conexion.php', function(info, estado){
        alert('informacion de php:' +info+ '\n Estado: '+estado);
        $('#inicio').html(info);
    })
}

