$(document).ready(function()
{

    let formulario = document.createElement('form');
    formulario.setAttribute('action', '#');
    formulario.setAttribute('id', 'formulario');

    let template = '';
    let texto = document.createElement('h2');
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
                    template = task.nombre
                 });

            } catch {
                /* Si el JSON está mal, notificamos su contenido */
                console.log('ERROR. Recibido:', response);
            }
            texto.innerText = "Usuario: " + template;
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