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

    // DIV - Texto izquierda //
    let DivIzq = document.createElement('div');
    DivIzq.setAttribute('class', 'recuadroIzq');
    let textoIzq = document.createElement('p');
    textoIzq.setAttribute('class', 'texto');
    textoIzq.innerText = "What is Lorem Ipsum?\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

    // DIV - Texto derecha //
    let DivDer = document.createElement('div');
    DivDer.setAttribute('class', 'recuadroDer');
    let textoDer = document.createElement('p');
    textoDer.setAttribute('class', 'texto');
    textoDer.innerText = "What is Lorem Ipsum?\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

    //Fundiendo to'
    DivIzq.appendChild(textoIzq);
    DivDer.appendChild(textoDer);
    Noticia.appendChild(Titulo);
    Noticia.appendChild(DivIzq);
    Noticia.appendChild(DivDer);
    document.body.appendChild(Noticia);
}

//Funcion que muestra todo la lista de productos
function AccesoCatalogo()
{
    removedor();
    let textoh1 = document.createElement('h1');
    textoh1.innerText = "Catalogo de productos";
    textoh1.setAttribute('Id', 'inicio');
    textoh1.setAttribute('class', 'Titulo');
    document.body.appendChild(textoh1);
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

//funcion para sacar el texto de la etiqueta
function obtenerID()
{
    let opcion = document.getElementById("inicio").textContent;
    console.log(opcion);
}