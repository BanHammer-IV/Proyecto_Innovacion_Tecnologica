function removedor()
{
    //Funcion que borra lo que se esta mostrando
    //actualmente en la pagina
    if(("#inicio").length)
    {
        $(function()
        {
            setTimeout(function()
            {
                $(document.getElementById("inicio")).remove();
            })
        });
    }

    if(('#containerLogin').length)
    {
        $(function()
        {
            setTimeout(function()
            {
                $(document.getElementById("containerLogin")).remove();
            })
        });
    }
}

function removedorBtnCerrar()
{
    //Funcion que borra lo que se esta mostrando
    //actualmente en la pagina
    $(function()
    {
        setTimeout(function()
        {
            $(document.getElementById("Close")).remove();
        })
    });
}

function removedorContainerLogin()
{
    //Funcion que borra lo que se esta mostrando
    //actualmente en la pagina
    $(function()
    {
        setTimeout(function()
        {
            if(('#containerLogin').length)
            {
                $(document.getElementById("containerLogin")).remove();
            }

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

//Funciones que muestra todo la lista de productos
$(document).ready(function()
{
    $( "#Catalogo" ).click(function() 
    {

        //DIV - GENERAL
        let ContenedorGeneral = document.createElement('div');
        ContenedorGeneral.setAttribute('id', 'inicio');

        //DIV - CONTENEDOR
        let Contenedor = document.createElement('div');
        Contenedor.setAttribute('class', 'contenedor');

        //Titulo
        let Titulo = document.createElement('h2');
        Titulo.innerText = "Catalogo de productos\n";
        Titulo.setAttribute('class', 'Titulo');

        $.get(
        {
            url: 'Productos/Consulta.php',
            type: 'GET',
            success: function( response )
            {
                let tasks = JSON.parse(response);
                tasks.forEach(task => {
                    //DIV - Tarjeta del Producto
                    let TarjetaProducto = document.createElement('div');
                    TarjetaProducto.setAttribute('class', 'Tarjeta_producto');
                    
                    //Imagen
                    let ImagenTarjeta = document.createElement('img');
                    ImagenTarjeta.setAttribute('src', 'Images/00750100010630L.webp');
                    ImagenTarjeta.setAttribute('class', 'imagen');

                    //Separacion( Este apartado es meramente decorativo )
                    let Separador = document.createElement('hr');
                    
                    //DIV - NOMBRE
                    let Nombre = document.createElement('div');
                    Nombre.setAttribute('class', 'nombre');
                    Nombre.innerText = "Nombre: " + task.nombre_producto;

                    //DIV - DESCRIPCION
                    let Descripcion = document.createElement('div');
                    Descripcion.setAttribute('class', 'descripcion');
                    Descripcion.innerText = "Descripcion: "+ task.descripcion;
                    
                    //BOTON DE REVISION
                    let BotonRevision = document.createElement('button');
                    BotonRevision.setAttribute('onclick', 'RevisarProducto()');
                    BotonRevision.setAttribute('class', 'BtnProducto');
                    BotonRevision.innerText = "Revisar";

                    //Empaquetado
                    TarjetaProducto.appendChild(ImagenTarjeta);
                    TarjetaProducto.appendChild(Separador);
                    TarjetaProducto.appendChild(Nombre);
                    TarjetaProducto.appendChild(Descripcion);
                    TarjetaProducto.appendChild(BotonRevision);
                
                    Contenedor.appendChild(TarjetaProducto);
                });
                ContenedorGeneral.appendChild(Titulo);
                ContenedorGeneral.appendChild(Contenedor);
                document.body.appendChild(ContenedorGeneral);
            }
        })
    })
});

function AccesoCatalogo(){
    removedor();
}

//Funciones que muestra las ventas  realizadas por el usuario
$(document).ready(function()
{
    $('#ventas').click(function(){
        //DIV - GENERAL
        let ContenedorGeneral = document.createElement('div');
        ContenedorGeneral.setAttribute('id', 'inicio');

        //DIV - BARRAS
        let Contenedor = document.createElement('div');
        Contenedor.setAttribute('class', 'barras');

        //Titulo
        let Titulo = document.createElement('h2');
        Titulo.innerText = "Ventas\n";
        Titulo.setAttribute('class', 'Titulo');

        $.get(
        {
            url: 'Ventas/Consulta.php',
            type: 'GET',
            success: function( response )
            {
                let tasks = JSON.parse(response);
                tasks.forEach(task => {
                    // DIV - Barra de Ventas
                    let Barra_Ventas = document.createElement('div');
                    Barra_Ventas.setAttribute('class', 'barraVenta');
                    
                    // DIV - Texto de Relleno
                    let TextoRelleno = document.createElement('div');
                    TextoRelleno.setAttribute('class', 'TxtInterno');
                    TextoRelleno.innerText = "\nVenta no.: "+task.id_ventas+"\n";

                    // DIV - Texto de Relleno
                    let TextoTotal = document.createElement('div');
                    TextoTotal.setAttribute('class', 'TxtInterno');
                    TextoTotal.innerText = "Total de la venta: "+task.total_venta+"\n";

                    //Separacion( Este apartado es meramente decorativo )
                    let Separador = document.createElement('hr');

                    // BOTON - Revisar
                    let BotonRevisarVenta = document.createElement('Button');
                    BotonRevisarVenta.setAttribute('class', 'BtnRevisarVenta');
                    BotonRevisarVenta.innerText = "Revisar";

                    Barra_Ventas.appendChild(TextoRelleno);
                    Barra_Ventas.appendChild(Separador);
                    Barra_Ventas.appendChild(TextoTotal);
                    Barra_Ventas.appendChild(BotonRevisarVenta);
                    Contenedor.appendChild(Barra_Ventas);
                });
                ContenedorGeneral.appendChild(Titulo);
                ContenedorGeneral.appendChild(Contenedor);
                document.body.appendChild(ContenedorGeneral);
            }
        })
    })
});

function AccesoVentas()
{
    removedor();
}

//Funcion que muestra las compras realizadas por el usuario
$(document).ready(function()
{
    $('#compras').click(function(){
        //DIV - GENERAL
        let ContenedorGeneral = document.createElement('div');
        ContenedorGeneral.setAttribute('id', 'inicio');

        //DIV - BARRAS
        let Contenedor = document.createElement('div');
        Contenedor.setAttribute('class', 'barras');

        //Titulo
        let Titulo = document.createElement('h2');
        Titulo.innerText = "Compras\n";
        Titulo.setAttribute('class', 'Titulo');

        $.get(
        {
            url: 'Compras/Consulta.php',
            type: 'GET',
            success: function( response )
            {
                let tasks = JSON.parse(response);
                tasks.forEach(task => {
                    // DIV - Barra de Ventas
                    let Barra_Compra = document.createElement('div');
                    Barra_Compra.setAttribute('class', 'barraVenta');
                    
                    // DIV - Texto de Relleno
                    let TextoRelleno = document.createElement('div');
                    TextoRelleno.setAttribute('class', 'TxtInterno');
                    TextoRelleno.innerText = "\nCompra no.: "+task.id_compra+"\nVendedor: "+task.id_vendedor;

                    // DIV - Texto de Relleno
                    let TextoTotal = document.createElement('div');
                    TextoTotal.setAttribute('class', 'TxtInterno');
                    TextoTotal.innerText = "Total de la compra: "+task.total_compra+"\n";

                    //Separacion( Este apartado es meramente decorativo )
                    let Separador = document.createElement('hr');

                    // BOTON - Revisar
                    let BotonRevisarCompra = document.createElement('Button');
                    BotonRevisarCompra.setAttribute('class', 'BtnRevisarVenta');
                    BotonRevisarCompra.innerText = "Revisar";

                    Barra_Compra.appendChild(TextoRelleno);
                    Barra_Compra.appendChild(Separador);
                    Barra_Compra.appendChild(TextoTotal);
                    Barra_Compra.appendChild(BotonRevisarCompra);
                    Contenedor.appendChild(Barra_Compra);
                });
                ContenedorGeneral.appendChild(Titulo);
                ContenedorGeneral.appendChild(Contenedor);
                document.body.appendChild(ContenedorGeneral);
            }
        })
    })
});

function AccesoCompras()
{
    removedor();
}

//Funcion para Iniciar sesion
function AccesoInicioSesion()
{
    removedor();

    let ContainerLogin = document.createElement('div');
    ContainerLogin.setAttribute('id', 'containerLogin');

    let formulario = document.createElement('form');
    formulario.setAttribute('action', 'index.html');
    formulario.setAttribute('id', 'forma');
    formulario.setAttribute('class', 'tarjetaInicioSesion');

    let Nombre = document.createElement('input');
    Nombre.setAttribute('type', 'text');
    Nombre.setAttribute('id', 'username');

    let Password = document.createElement('input');
    Password.setAttribute('type', 'password');
    Password.setAttribute('id', 'contrasenia_cliente');
    Password.setAttribute('autocomplete', 'current-password');

    let boton_Iniciar = document.createElement('input');
    boton_Iniciar.setAttribute('type', 'submit');
    boton_Iniciar.setAttribute('value', 'Iniciar Sesion');

    let boton_Registrar = document.createElement('button');
    boton_Registrar.setAttribute('onclick', 'AccesoRegistroNuevo()');
    boton_Registrar.setAttribute('id', 'register');
    boton_Registrar.innerText = "Registrarse";

    formulario.appendChild(Nombre);
    formulario.appendChild(Password);
    formulario.appendChild(boton_Iniciar);
    formulario.appendChild(boton_Registrar);
    ContainerLogin.appendChild(formulario);
    document.body.appendChild(ContainerLogin);

    //Iniciar session - Boton
    $(document).ready(function()
    {
        $('#forma').submit(function(){
            let nombre = $('#username').val();
            let contrasenia = $('#contrasenia_cliente').val();
            $.ajax({
                url: 'Clientes/Iniciar_sesion.php',
                type: 'POST',
                data: { search: [nombre, contrasenia]},
                success: function( response ){
                    try {

                        /* Si el JSON está mal formado se generará una excepción */
                        let info = JSON.parse(response);
                        if (info.error == true) {
                        /* Si hemos enviado por JSON un error, lo notificamos */
                        console.log('ERROR detectado:', info);
                        return;
                        }

                        //  Trabajamos habitualmente con la respuesta
                        let template = '';
                        info.forEach(task => {
                            if(task.ref == 0)//Correo
                            {
                                console.log(response);
                                template += `<li>
                                Nombre: ${task.nombre}
                                </li>`
                            }
                            if(task.ref == 1)//Usuario
                            {
                                console.log(response);
                                template += `<li>
                                Nombre: ${task.nombre}
                                </li>`
                            }
                            if(task.ref == 2)//No existe
                            {
                                alert("No existe nada de lo que ingresaste");
                            }
                        });

                    } catch {
                        /* Si el JSON está mal, notificamos su contenido */
                        console.log('ERROR. Recibido:', response);
                    }
                    
                }
            })
        
        })
    });
}

$(document).ready(function(){
    $('#Login').submit(function(){
        if(('#containerLogin').length())
        {
            $(document.getElementById("containerLogin")).remove();
        }
    })
});

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
    //formulario.setAttribute('action', '');

    // INPUT - NOMBRE                 //
    let inputName = document.createElement('input');
    inputName.setAttribute('type', 'text');
    inputName.setAttribute('id', 'nombre');   
    inputName.setAttribute('class', 'inputForm');
    inputName.setAttribute('placeholder', 'Nombre');

    // INPUT - APELLIDO               //
    let inputApellido = document.createElement('input');
    inputApellido.setAttribute('type', 'text');
    inputApellido.setAttribute('id', 'apellido');     
    inputApellido.setAttribute('class', 'inputForm');
    inputApellido.setAttribute('placeholder', 'Apellido');

    // INPUT - CORREO                 //
    let inputCorreo = document.createElement('input');
    inputCorreo.setAttribute('type', 'text');
    inputCorreo.setAttribute('name', 'correo');     
    inputCorreo.setAttribute('id', 'correo');
    inputCorreo.setAttribute('class', 'inputForm');
    inputCorreo.setAttribute('placeholder', 'Correo');

    // INPUT - CONTRASEÑA             //
    let inputContrasenia = document.createElement('input');
    inputContrasenia.setAttribute('type', 'password');
    inputContrasenia.setAttribute('name', 'contrasenia');   
    inputContrasenia.setAttribute('id', 'contrasenia');  
    inputContrasenia.setAttribute('class', 'inputForm');
    inputContrasenia.setAttribute('placeholder', 'Contraseña');

    // INPUT - CONFIRMAR CONTRASEÑA   //
    let inputConfirmarContrasenia = document.createElement('input');
    inputConfirmarContrasenia.setAttribute('type', 'password');
    inputConfirmarContrasenia.setAttribute('name', 'confirmarcontrasenia');     
    inputConfirmarContrasenia.setAttribute('class', 'inputForm');
    inputConfirmarContrasenia.setAttribute('placeholder', 'Confirmar Contraseña');

    // BOTON - REGISTRAR //
    let btnRegistro = document.createElement('input');
    btnRegistro.setAttribute('type', 'submit');
    btnRegistro.setAttribute('id', 'registros');
    btnRegistro.setAttribute('value', 'Registrar');
    btnRegistro.setAttribute('class', 'btnRegistro');

    //  H1 - TITULO //
    let Titulo = document.createElement('h1');
    Titulo.innerText = "Registro";
    Titulo.setAttribute('class', 'Titulo');


    $(document).ready(function()
    {
        $("#registros").click(function()
        {
            let nombre = $('#nombre').val();
            let apellido = $('#apellido').val();
            let email = $('#correo').val();
            let contrasenia = $('#contrasenia').val();
            $.ajax({
                url: 'Clientes/Registro.php',
                type: 'POST',
                data: { search: [nombre, apellido, email, contrasenia] },
                success: function( response )
                {
                    try {

                        /* Si el JSON está mal formado se generará una excepción */
                        let info = JSON.parse(response);
                        if (info.error == true) {
                        /* Si hemos enviado por JSON un error, lo notificamos */
                        console.log('ERROR detectado:', info);
                        return;
                        }

                        //  Trabajamos habitualmente con la respuesta
                        console.log(response);
                        
                        //console.log(response);

                    } catch {
                        /* Si el JSON está mal, notificamos su contenido */
                        console.log('ERROR. Recibido:', response);
                    }
                    
                }
            })
        });
    })
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

//Metodo cerrado de Sesion
$(document).ready(function()
{
    let contenedor = document.createElement('div');
    contenedor.setAttribute('id', 'Close');

    let formulario = document.createElement('form');
    formulario.setAttribute('action', '#');
    formulario.setAttribute('id', 'formulario');

    let template = document.createElement('h1');
    $.ajax({
        url: 'Clientes/Sesion_iniciada.php',
        type: 'GET',
        success: function( response ){
            let tasks = JSON.parse(response);
            tasks.forEach(task => {
               template.innerText =  `Usuario: ${task.nombre}`
            });

        }
    })

    let boton_Cerrar = document.createElement('input');
    boton_Cerrar.setAttribute('type', 'submit');
    boton_Cerrar.setAttribute('id', 'cerrarSesion');
    boton_Cerrar.setAttribute('value', 'Cerrar Sesion');

    formulario.appendChild(template);
    formulario.appendChild(boton_Cerrar);
    contenedor.appendChild(formulario);
    document.body.appendChild(contenedor);

    //Cerrar sesion - Boton
    $(document).ready(function()
    {
        $('#formulario').submit(function(){
            $.ajax({
                url: 'Clientes/cerrar.php',
                type: 'GET',
                success: function( response ){
                    try {

                        /* Si el JSON está mal formado se generará una excepción */
                        let info = JSON.parse(response);
                        if (info.error == true) {
                        /* Si hemos enviado por JSON un error, lo notificamos */
                        console.log('ERROR detectado:', info);
                        return;
                        }

                        //  Trabajamos habitualmente con la respuesta
                        info.forEach(task => { 
                            alert(task.mensaje);                    
                        });
                        removedorBtnCerrar();

                    } catch {
                        /* Si el JSON está mal, notificamos su contenido */
                        console.log('ERROR. Recibido:', response);
                    }
                    
                }
            })
        })
    });
});