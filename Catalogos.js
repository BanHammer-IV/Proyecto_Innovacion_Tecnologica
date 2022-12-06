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
            url: 'Productos/buscar.php',
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
                
                $('#task-result').show();
                $('#container').html(template);
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
        // Variables independientes
        let separador = document.createElement('hr');
        let salto = document.createElement('br');

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
                    TextoRelleno.appendChild(separador);
                    TextoRelleno.innerText = "\nDescripcion: "+task.descripcion+"\n";
                    TextoRelleno.appendChild(separador);
                    // BOTON - Revisar
                    let BotonRevisarVenta = document.createElement('Button');
                    BotonRevisarVenta.setAttribute('class', 'BtnRevisarVenta');
                    BotonRevisarVenta.innerText = "Revisar";

                    Barra_Ventas.appendChild(TextoRelleno);
                    Barra_Ventas.appendChild(BotonRevisarVenta);
                    Contenedor.appendChild(Barra_Ventas);
                });
                ContenedorGeneral.appendChild(Titulo);
                ContenedorGeneral.appendChild(Contenedor);
                document.body.appendChild(ContenedorGeneral);
                
                $('#task-result').show();
                $('#container').html(template);
            }
        })
    })
});

function AccesoVentas()
{
    removedor();
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
    removedor();

    $('#inicio').keyup(function(){
        let resultado = $('#inicio').val();
        $.ajax({
            url: 'buscar.php',
            type: 'POST',
            data: { resultado },
            success: function( response ){
                let producto = JSON.parse(response);
                let template = ' ';
                producto.forEach(producto =>{
                    template += `<li>
                    ${producto.nombre}
                    </li>`
                });
            }
        })
    });
}

$(document).ready(function()
{
    $('#search').keyup(function(e){
        let search = $('#search').val();
        $.ajax({
            url: 'buscar.php',
            type: 'POST',
            data: { search },
            success: function( response ){
                let tasks = JSON.parse(response);
                let template = '';
                tasks.forEach(task => {
                    template += `<li>
                    ${task.nombre_producto}
                    ${task.existencias}
                    </li>`
                });
                $('#task-result').show();
                $('#container').html(template);
            }
        })
    })
});


