/* Si no detecta la sintaxis de jQuery $(document).ready(function($) {) */

$(document).ready(function() { 
    console.log('Hola mundo!');
    // Para que se vea usamos el método show() y para ocultar el método hide()
    $('button.mostrarContenedor').click(function() {
        $('div.contenedor').show();
        $(this).hide();
        $('button.ocultarContenedor').show();
    });

    $('button.ocultarContenedor').click(function() {
        $('div.contenedor').hide();
        $(this).hide();
        $('button.mostrarContenedor').show();
    });
});

// .CSS (parametro1, parametro2) Le puedes poner un valor al parametro ese.
// .CSS (parametro1) Lee el valor que tiene el CSS.

$('.contenedor').css('border', '2px solid #000').css('background-color', 'lightgrey'); // no aconsejable.

$('.contenedor').css({
    "background-color": "yellow",
    "border": "2px solid #111",
    "padding": '2%'
});