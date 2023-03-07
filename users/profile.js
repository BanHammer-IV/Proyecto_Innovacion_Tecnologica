$(document).ready(function()
{

    let formulario = document.createElement('form');
    formulario.setAttribute('action', '#');
    formulario.setAttribute('id', 'formulario');

    let texto = document.createElement('h4');
    $.ajax({
        url: '../Clientes/Sesion_iniciada.php',
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
                    nombre = task.nombre
                    permiso = task.permiso
                    correo = task.correo

                 });

            } catch {
                /* Si el JSON está mal, notificamos su contenido */
                console.log('ERROR. Recibido:', response);
            }
            texto.innerText = "Usuario: " + nombre + "\n(" + permiso + ")\n" + correo;
            if(permiso == "Administrador"){
                let texto_btn_uno = "Clientes";
                let texto_btn_dos = "Proveedores";
                let texto_btn_tres = "Productos";
                $('#btn_uno').html(texto_btn_uno);
                $('#btn_dos').html(texto_btn_dos);
                $('#btn_tres').html(texto_btn_tres);
            }

            if(permiso == "Cliente"){
                let texto_btn_uno = "Ventas";
                let texto_btn_dos = "Compras";
                let texto_btn_tres = "Inventario";
                $('#btn_uno').html(texto_btn_uno);
                $('#btn_dos').html(texto_btn_dos);
                $('#btn_tres').html(texto_btn_tres);
            }

        }
    })

    let boton_Cerrar = document.createElement('input');
    boton_Cerrar.setAttribute('type', 'submit');
    boton_Cerrar.setAttribute('id', 'cerrarSesion');
    boton_Cerrar.setAttribute('value', 'Cerrar Sesion');
    
    formulario.appendChild(texto);
    formulario.appendChild(boton_Cerrar);
    document.body.appendChild(formulario);
    $('#Profile').html(formulario);
    
});

//Funcion que muestra las ventas realizadas por el usuario
$(document).ready(function()
{
    $('#btn_uno').click(function(){
        let permiso =
        $.ajax({
            url: '../Clientes/Sesion_iniciada.php',
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
                    info.forEach(task => { permiso = task.permiso });
    
                } catch {
                    /* Si el JSON está mal, notificamos su contenido */
                    console.log('ERROR. Recibido:', response);
                }
                let texto_btn_uno;
                let texto_btn_dos;
                let texto_btn_tres;

                if(permiso == "Administrador"){
                    texto_btn_uno = "Clientes";
                    texto_btn_dos = "Proveedores";
                    texto_btn_tres = "Productos";
                    $('#btn_uno').html(texto_btn_uno);
                    $('#btn_dos').html(texto_btn_dos);
                    $('#btn_tres').html(texto_btn_tres);

                    //Clientes
                    $(document).ready(function()
                    {
                        $( "#btn_uno" ).click(function() 
                        {

                            //DIV - GENERAL
                            let ContenedorGeneral = document.createElement('div');
                            ContenedorGeneral.setAttribute('id', 'inicio');

                            //DIV - CONTENEDOR
                            let Contenedor = document.createElement('div');
                            Contenedor.setAttribute('class', 'contenedor');

                            //Titulo
                            let Titulo = document.createElement('h2');
                            Titulo.innerText = "Cartera de Clientes\n";
                            Titulo.setAttribute('class', 'Titulo');

                            $.ajax(
                            {
                                url: '../Clientes/Cartera_Clientes.php',
                                type: 'GET',
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

                                        info.forEach(task => {
                                        //DIV - Tarjeta del Producto
                                        let TarjetaProducto = document.createElement('div');
                                        TarjetaProducto.setAttribute('class', 'Tarjeta_producto');
                                        
                                        //Separacion( Este apartado es meramente decorativo )
                                        let Separador = document.createElement('hr');
                                        
                                        //DIV - NOMBRE
                                        let Nombre = document.createElement('div');
                                        Nombre.setAttribute('class', 'nombre');
                                        Nombre.innerText = "Nombre: " + task.nombre;

                                        //DIV - DESCRIPCION
                                        let Apellido = document.createElement('div');
                                        Apellido.setAttribute('class', 'apellido');
                                        Apellido.innerText = "Apellido: "+ task.apellido;

                                        //DIV - DESCRIPCION
                                        let Correo = document.createElement('div');
                                        Correo.setAttribute('class', 'apellido');
                                        Correo.innerText = "Apellido: "+ task.correo;

                                        //Empaquetado
                                        //TarjetaProducto.appendChild(ImagenTarjeta);
                                        TarjetaProducto.appendChild(Separador);
                                        TarjetaProducto.appendChild(Nombre);
                                        TarjetaProducto.appendChild(Apellido);
                                        TarjetaProducto.appendChild(Correo);

                                        Contenedor.appendChild(TarjetaProducto);
                                        });
                                        ContenedorGeneral.appendChild(Titulo);
                                        ContenedorGeneral.appendChild(Contenedor);
                                        $('#info').html(ContenedorGeneral);
                                    } catch {
                                        /* Si el JSON está mal, notificamos su contenido */
                                        console.log('ERROR. Recibido:', response);
                                    }
                                }
                            })
                        })
                    });

                    //Proveedores
                    $(document).ready(function()
                    {
                        $( "#btn_dos" ).click(function() 
                        {

                            //DIV - GENERAL
                            let ContenedorGeneral = document.createElement('div');
                            ContenedorGeneral.setAttribute('id', 'inicio');

                            //DIV - CONTENEDOR
                            let Contenedor = document.createElement('div');
                            Contenedor.setAttribute('class', 'contenedor');

                            //Titulo
                            let Titulo = document.createElement('h2');
                            Titulo.innerText = "Proveedores\n";
                            Titulo.setAttribute('class', 'Titulo');

                            $.ajax(
                            {
                                url: '../Proveedores/Consulta.php',
                                type: 'GET',
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

                                        info.forEach(task => {
                                        //DIV - Tarjeta del Producto
                                        let TarjetaProducto = document.createElement('div');
                                        TarjetaProducto.setAttribute('class', 'Tarjeta_producto');
                                        
                                        //Separacion( Este apartado es meramente decorativo )
                                        let Separador = document.createElement('hr');
                                        
                                        //DIV - NOMBRE
                                        let Nombre = document.createElement('div');
                                        Nombre.setAttribute('class', 'nombre');
                                        Nombre.innerText = "Nombre: " + task.nombre;

                                        //Empaquetado
                                        //TarjetaProducto.appendChild(ImagenTarjeta);
                                        TarjetaProducto.appendChild(Separador);
                                        TarjetaProducto.appendChild(Nombre);

                                        Contenedor.appendChild(TarjetaProducto);
                                        });
                                        ContenedorGeneral.appendChild(Titulo);
                                        ContenedorGeneral.appendChild(Contenedor);
                                        $('#info').html(ContenedorGeneral);
                                    } catch {
                                        /* Si el JSON está mal, notificamos su contenido */
                                        console.log('ERROR. Recibido:', response);
                                    }
                                }
                            })
                        })
                    });

                    //Productos
                    $(document).ready(function()
                    {
                        $( "#btn_tres" ).click(function() 
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

                            $.ajax(
                            {
                                url: '../Productos/Consulta.php',
                                type: 'GET',
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

                                        info.forEach(task => {
                                        //DIV - Tarjeta del Producto
                                        let TarjetaProducto = document.createElement('div');
                                        TarjetaProducto.setAttribute('class', 'Tarjeta_producto');
                                        
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

                                        //Empaquetado
                                        //TarjetaProducto.appendChild(ImagenTarjeta);
                                        TarjetaProducto.appendChild(Separador);
                                        TarjetaProducto.appendChild(Nombre);
                                        TarjetaProducto.appendChild(Descripcion);

                                        Contenedor.appendChild(TarjetaProducto);
                                        });
                                        ContenedorGeneral.appendChild(Titulo);
                                        ContenedorGeneral.appendChild(Contenedor);
                                        $('#info').html(ContenedorGeneral);
                                    } catch {
                                        /* Si el JSON está mal, notificamos su contenido */
                                        console.log('ERROR. Recibido:', response);
                                    }
                                }
                            })
                        })
                    });
                }
    
                if(permiso == "Cliente"){
                    texto_btn_uno = "Ventas";
                    texto_btn_dos = "Compras";
                    texto_btn_tres = "Inventario";
                    $('#btn_uno').html(texto_btn_uno);
                    $('#btn_dos').html(texto_btn_dos);
                    $('#btn_tres').html(texto_btn_tres);

                    $(document).ready(function()
                    {
                        $('#btn_uno').click(function(){
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
                        url: '../Ventas/Consulta.php',
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
                            $('#info').html(ContenedorGeneral);
                        }
                    })
                })
            })

                    //Funcion que muestra las compras realizadas por el usuario
                    $(document).ready(function()
                    {
                        $('#btn_dos').click(function(){
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

                            $.ajax(
                            {
                                url: '../Compras/Consulta.php',
                                type: 'GET',
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

                                        info.forEach(task => {
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
                                        $('#info').html(ContenedorGeneral);


                                    } catch {
                                        /* Si el JSON está mal, notificamos su contenido */
                                        console.log('ERROR. Recibido:', response);
                                    }            
                                }
                            })
                        })
                    });

                    //Funciones que muestra todo la lista de productos
                    $(document).ready(function()
                    {
                        $( "#btn_tres" ).click(function() 
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

                            $.ajax(
                            {
                                url: '../Productos/Consulta.php',
                                type: 'GET',
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

                                        info.forEach(task => {
                                        //DIV - Tarjeta del Producto
                                        let TarjetaProducto = document.createElement('div');
                                        TarjetaProducto.setAttribute('class', 'Tarjeta_producto');
                                        
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

                                        //DIV - Existencias
                                        let Existencias = document.createElement('div');
                                        Existencias.setAttribute('class', 'existencias');
                                        Existencias.innerText = "Existencias: "+ task.existencias;

                                        //Empaquetado
                                        //TarjetaProducto.appendChild(ImagenTarjeta);
                                        TarjetaProducto.appendChild(Separador);
                                        TarjetaProducto.appendChild(Nombre);
                                        TarjetaProducto.appendChild(Descripcion);
                                        TarjetaProducto.appendChild(Existencias);

                                        Contenedor.appendChild(TarjetaProducto);
                                        });
                                        ContenedorGeneral.appendChild(Titulo);
                                        ContenedorGeneral.appendChild(Contenedor);
                                        $('#info').html(ContenedorGeneral);
                                    } catch {
                                        /* Si el JSON está mal, notificamos su contenido */
                                        console.log('ERROR. Recibido:', response);
                                    }
                                }
                            })
                        })
                    });

                }
    
            }
        })
    })
});

$(document).ready(function()
    {
        $('#formulario').submit(function(){
            if(("#infoClient").length)
            {
                 $(document.getElementById("formulario")).remove();
            }
            $.ajax({
                url: '../Clientes/cerrar.php',
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
                    } catch {
                        /* Si el JSON está mal, notificamos su contenido */
                        console.log('ERROR. Recibido:', response);
                    }
                    
                }
            })
        })
});