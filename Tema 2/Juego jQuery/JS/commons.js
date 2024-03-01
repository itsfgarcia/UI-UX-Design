var contador = 0;
var tiempoIni, tiempoFin, tiempo;
var contadorPartidas = 0;

function numRandom() {
    var maxWidth = $('.tablero').width() - 100;
    var maxHeight = $('.tablero').height() - 100;
    var x = Math.random() * maxWidth;
    var y = Math.random() * maxHeight;
    return { x: x, y: y };
}

$(document).ready(function() {
    function comenzarJuego() {
        reiniciarJuego();
        $('.pnj').show();
        $('.boton').hide();
        $('.pnj').on("mouseenter", moverImagen);
    }

    $('.boton').click(comenzarJuego);

    function moverImagen(e) {
        if (contador < 10) {
            var coordenadas = numRandom();
            $(this).css({
                top: coordenadas.y + "px",
                left: coordenadas.x + "px",
            });
            contador++;
            if (contador === 1) {
                tiempoIni = e.timeStamp;
            } else if (contador === 10) {
                tiempoFin = e.timeStamp;
                tiempo = ((tiempoFin - tiempoIni) / 1000).toFixed(2);
                $('#tiempo').text(tiempo + " segundos");
                agregarTiempoATabla(tiempo);
                setTimeout(reiniciarJuego, 1200);
            }
        }
    }

    function reiniciarJuego() {
        contador = 0;
        tiempoIni = null;
        tiempoFin = null;
        tiempo = null;
        $('.pnj').off("mouseenter").hide();
        $('.boton').show();

        if (contadorPartidas >= 10) {
            reiniciarMarcadorPuntuacion();
            contadorPartidas = 0;
        } else {
            contadorPartidas++;
        }
    }

    function agregarTiempoATabla(tiempo) {
        $('<tr><td class="tabla">' + tiempo + ' segundos</td></tr>').prependTo('.tabla-puntuacion tbody');
    }

    function reiniciarMarcadorPuntuacion() {
        $('.tabla-puntuacion tbody').empty();
    }
});
