function AccesoCatalogo()
{
    removedor();
}

function removedor()
{
    //Funcion que borra lo que se esta mostrando
    //actualmente en la pagina
    $(function()
    {
        setTimeout(function()
        {
            $('#inicio').remove();
        })
    });
}