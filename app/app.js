var puntos1 = 0;
var puntos2 = 0;
var nombre1 = 'Equipo 1';
var nombre2 = 'Equipo 2';
var tipoJuego = 30;
var control1, control2, control3, control4, control5, control6, control7;
$(document).ready(function () {
    $('#pantalla-2').hide();
    // $('#pantalla-1').hide();
    $('#pantalla-3').hide();
    $('#iniciar').on('click', function () {

        //asigna el nombre del equipo a la variable        
        nombre1 = $('#nombre-equipo-1').val();
        nombre2 = $('#nombre-equipo-2').val();

        //control de que hayan puesto nombre al reiniciar
        if (nombre1.length == 0) {
            nombre1 = 'Equipo 1';
        };
        if (nombre2.length == 0) {
            nombre2 = 'Equipo 2';
        };

        //asignar nombres a pantalla 2
        $('#titulo-1').text(nombre1);
        $('#titulo-2').text(nombre2);

        //deshabilitar botones de resta
        $('#resta-puntos-2').prop('disabled', true);
        $('#resta-puntos-1').prop('disabled', true);

        //ocultar pantalla 1 y mostrar pantalla 2
        $('#pantalla-1').hide();
        $('#pantalla-2').show();
    })

    //PANTALLA 1

    //seleccion de tipo de juego
    $('#tipojuego-24').on('click', function () {
        seleccionDeJuego(24);
    })
    $('#tipojuego-30').on('click', function () {
        seleccionDeJuego(30);
    })

    //OBTENIENDO NOMBRES DE EQUIPOS
    $('#tipojuego-24').on('click', function () {
    })

    //se asegura de que el nombre del equipo cambie 
    $('#nombre-equipo-1').on('click', function () {
        $('#nombre-equipo-1').val('');
    })

    $('#nombre-equipo-2').on('click', function () {
        $('#nombre-equipo-2').val('')
    })



    // SUMAR PUNTOS
    $('#suma-puntos-1').on('click', function () {
        puntos1++;
        sumaPuntos1();
        if (tipoJuego == 30) {
            pintarPuntosSuma();
        } else {
            pintarPuntosSuma24();
        }

        revisarPuntos(0);
        if (puntos1 > 0) {
            habilitarRestarPuntos('primero');
        }

    })

    $('#suma-puntos-2').on('click', function () {
        puntos2++;
        sumaPuntos2();

        if (tipoJuego == 30) {
            pintarPuntosSumaDos();
        } else {
            pintarPuntosSuma24E2();
        }
        revisarPuntos(1);
        if (puntos2 > 0) {
            habilitarRestarPuntos('segundo');
        }
    })

    function sumaPuntos1() {
        $('#puntos-equipo-1').text(puntos1);
    }

    function sumaPuntos2() {
        $('#puntos-equipo-2').text(puntos2);
    }

    // RESTAR PUNTOS
    $('#resta-puntos-1').on('click', function () {

        if (tipoJuego == 30) {
            pintarPuntosResta();
        } else {
            pintarPuntosResta24();
        }
        puntos1--;
        restaPuntos1();
        if (puntos1 < tipoJuego) {
            habilitarSumarPuntos('primero');
        };
        revisarPuntosResta(0);
    })

    $('#resta-puntos-2').on('click', function () {
        if (tipoJuego == 30) {
            pintarPuntosRestaDos();
        } else {
            pintarPuntosResta24E2();
        }

        puntos2--;
        restaPuntos2();
        if (puntos2 < tipoJuego) {
            habilitarSumarPuntos('segundo');
        };
        revisarPuntosResta(1);
    })

    function restaPuntos1() {
        $('#puntos-equipo-1').text(puntos1);
    }

    function restaPuntos2() {
        $('#puntos-equipo-2').text(puntos2);
    }
    //selecciond de modo de juego 
    function seleccionDeJuego(num) {
        if (num == 30) {
            tipoJuego = 30;
            $('#tipojuego-30').addClass('seleccionado');
            $('#tipojuego-24').removeClass('seleccionado');
            $('#tipo-de-juego').text('A 30');
        } else if (num == 24) {
            tipoJuego = 24;
            $('#tipojuego-24').addClass('seleccionado');
            $('#tipojuego-30').removeClass('seleccionado');
            $('#tipo-de-juego').text('A 24');
        } else {
            tipoJuego = 30;
        }
    }


    //Pintar puntos con palitos
    //DEL EQUIPO 1

    //PARA 30 PUNTOS
    function pintarPuntosSuma() {
        control1 = puntos1;
        control2 = puntos1 - 5;
        control3 = puntos1 - 10;
        control4 = puntos1 - 15;
        control5 = puntos1 - 20;
        control6 = puntos1 - 25;

        if (puntos1 <= 5) {
            $('#primer-cuadrado-1').addClass('palitos-' + control1);
        } else if (puntos1 <= 10) {
            $('#segundo-cuadrado-1').addClass('palitos-' + control2);
        } else if (puntos1 <= 15) {
            $('#tercer-cuadrado-1').addClass('palitos-' + control3);
        } else if (puntos1 <= 20) {
            $('#cuarto-cuadrado-1').addClass('palitos-' + control4);
        } else if (puntos1 <= 25) {
            $('#quinto-cuadrado-1').addClass('palitos-' + control5);
        } else if (puntos1 <= 30) {
            $('#sexto-cuadrado-1').addClass('palitos-' + control6);
        }
    }

    //PARA 24 PUNTOS SUMA
    function pintarPuntosSuma24() {
        control1 = puntos1;
        control2 = puntos1 - 5;
        control3 = puntos1 - 10;
        control4 = puntos1 - 12;
        control5 = puntos1 - 17;
        control6 = puntos1 - 22;

        if (puntos1 <= 5) {
            $('#primer-cuadrado-1').addClass('palitos-' + control1);
        } else if (puntos1 <= 10) {
            $('#segundo-cuadrado-1').addClass('palitos-' + control2);
        } else if (puntos1 <= 12) {
            $('#tercer-cuadrado-1').addClass('palitos-' + control3);
        } else if (puntos1 <= 17) {
            $('#cuarto-cuadrado-1').addClass('palitos-' + control4);
        } else if (puntos1 <= 22) {
            $('#quinto-cuadrado-1').addClass('palitos-' + control5);
        } else if (puntos1 <= 24) {
            $('#sexto-cuadrado-1').addClass('palitos-' + control6);
        }
    }

    //PARA 24 PUNTOS RESTA
    function pintarPuntosResta24() {
        control1 = puntos1;
        control2 = puntos1 - 5;
        control3 = puntos1 - 10;
        control4 = puntos1 - 12;
        control5 = puntos1 - 17;
        control6 = puntos1 - 22;

        if (puntos1 <= 5) {
            $('#primer-cuadrado-1').removeClass('palitos-' + control1);
        } else if (puntos1 <= 10) {
            $('#segundo-cuadrado-1').removeClass('palitos-' + control2);
        } else if (puntos1 <= 12) {
            $('#tercer-cuadrado-1').removeClass('palitos-' + control3);
        }
        else if (puntos1 <= 17) {
            $('#cuarto-cuadrado-1').removeClass('palitos-' + control4);
        } else if (puntos1 <= 22) {
            $('#quinto-cuadrado-1').removeClass('palitos-' + control5);
        } else if (puntos1 <= 24) {
            $('#sexto-cuadrado-1').removeClass('palitos-' + control6);
        }
    }


    // PINTAR PUNTOS RESTA MODO 30
    function pintarPuntosResta() {
        control1 = puntos1;
        control2 = puntos1 - 5;
        control3 = puntos1 - 10;
        control4 = puntos1 - 15;
        control5 = puntos1 - 20;
        control6 = puntos1 - 25;

        if (puntos1 <= 5) {
            $('#primer-cuadrado-1').removeClass('palitos-' + control1);
        } else if (puntos1 <= 10) {
            $('#segundo-cuadrado-1').removeClass('palitos-' + control2);
        } else if (puntos1 <= 15) {
            $('#tercer-cuadrado-1').removeClass('palitos-' + control3);
        } else if (puntos1 <= 20) {
            $('#cuarto-cuadrado-1').removeClass('palitos-' + control4);
        } else if (puntos1 <= 25) {
            $('#quinto-cuadrado-1').removeClass('palitos-' + control5);
        } else if (puntos1 <= 30) {
            $('#sexto-cuadrado-1').removeClass('palitos-' + control6);
        }
    }

    //DEL EQUIPO 2
    function pintarPuntosSumaDos() {
        control1 = puntos2;
        control2 = puntos2 - 5;
        control3 = puntos2 - 10;
        control4 = puntos2 - 15;
        control5 = puntos2 - 20;
        control6 = puntos2 - 25;

        if (puntos2 <= 5) {
            $('#primer-cuadrado-2').addClass('palitos-' + control1);
        } else if (puntos2 <= 10) {
            $('#segundo-cuadrado-2').addClass('palitos-' + control2);
        } else if (puntos2 <= 15) {
            $('#tercer-cuadrado-2').addClass('palitos-' + control3);
        } else if (puntos2 <= 20) {
            $('#cuarto-cuadrado-2').addClass('palitos-' + control4);
        } else if (puntos2 <= 25) {
            $('#quinto-cuadrado-2').addClass('palitos-' + control5);
        } else if (puntos2 <= 30) {
            $('#sexto-cuadrado-2').addClass('palitos-' + control6);
        }
    }
    function pintarPuntosRestaDos() {
        control1 = puntos2;
        control2 = puntos2 - 5;
        control3 = puntos2 - 10;
        control4 = puntos2 - 15;
        control5 = puntos2 - 20;
        control6 = puntos2 - 25;

        if (puntos2 <= 5) {
            $('#primer-cuadrado-2').removeClass('palitos-' + control1);
        } else if (puntos2 <= 10) {
            $('#segundo-cuadrado-2').removeClass('palitos-' + control2);
        } else if (puntos2 <= 15) {
            $('#tercer-cuadrado-2').removeClass('palitos-' + control3);
        } else if (puntos2 <= 20) {
            $('#cuarto-cuadrado-2').removeClass('palitos-' + control4);
        } else if (puntos2 <= 25) {
            $('#quinto-cuadrado-2').removeClass('palitos-' + control5);
        } else if (puntos2 <= 30) {
            $('#sexto-cuadrado-2').removeClass('palitos-' + control6);
        }
    }

    //PARA 24 PUNTOS SUMA
    function pintarPuntosSuma24E2() {
        control1 = puntos2;
        control2 = puntos2 - 5;
        control3 = puntos2 - 10;
        control4 = puntos2 - 12;
        control5 = puntos2 - 17;
        control6 = puntos2 - 22;

        if (puntos2 <= 5) {
            $('#primer-cuadrado-2').addClass('palitos-' + control1);
        } else if (puntos2 <= 10) {
            $('#segundo-cuadrado-2').addClass('palitos-' + control2);
        } else if (puntos2 <= 12) {
            $('#tercer-cuadrado-2').addClass('palitos-' + control3);
        } else if (puntos2 <= 17) {
            $('#cuarto-cuadrado-2').addClass('palitos-' + control4);
        } else if (puntos2 <= 22) {
            $('#quinto-cuadrado-2').addClass('palitos-' + control5);
        } else if (puntos2 <= 24) {
            $('#sexto-cuadrado-2').addClass('palitos-' + control6);
        }
    }

    //PARA 24 PUNTOS RESTA
    function pintarPuntosResta24E2() {
        control1 = puntos2;
        control2 = puntos2 - 5;
        control3 = puntos2 - 10;
        control4 = puntos2 - 12;
        control5 = puntos2 - 17;
        control6 = puntos2 - 22;

        if (puntos2 <= 5) {
            $('#primer-cuadrado-2').removeClass('palitos-' + control1);
        } else if (puntos2 <= 10) {
            $('#segundo-cuadrado-2').removeClass('palitos-' + control2);
        } else if (puntos2 <= 12) {
            $('#tercer-cuadrado-2').removeClass('palitos-' + control3);
        }
        else if (puntos2 <= 17) {
            $('#cuarto-cuadrado-2').removeClass('palitos-' + control4);
        } else if (puntos2 <= 22) {
            $('#quinto-cuadrado-2').removeClass('palitos-' + control5);
        } else if (puntos2 <= 24) {
            $('#sexto-cuadrado-2').removeClass('palitos-' + control6);
        }
    }
    // ----SECCION DEL REINICIAR JUEGO-------

    //para reiniciar juego
    $('#reiniciar-juego').on('click', function () {
        reiniciarJuego();
    })

    function reiniciarJuego() {
        $('#pantalla-2').hide();
        $('#pantalla-1').show();
        puntos1 = 0;
        puntos2 = 0;
        nombre1 = 'Equipo 1';
        nombre2 = 'Equipo 2';
        tipoJuego;
        despintarReinicio();
        depintarPuntosPantalla();
        habilitarSumarPuntos('primero');
        habilitarSumarPuntos('segundo');
    }

    //DESPINTAR TODO PARA REINICIAR
    function despintarReinicio() {
        for (let i = 1; i <= 5; i++) {
            $('#primer-cuadrado-1').removeClass('palitos-' + i);
            $('#segundo-cuadrado-1').removeClass('palitos-' + i);
            $('#tercer-cuadrado-1').removeClass('palitos-' + i);
            $('#cuarto-cuadrado-1').removeClass('palitos-' + i);
            $('#quinto-cuadrado-1').removeClass('palitos-' + i);
            $('#sexto-cuadrado-1').removeClass('palitos-' + i);
        }
        for (let i = 1; i <= 5; i++) {
            $('#primer-cuadrado-2').removeClass('palitos-' + i);
            $('#segundo-cuadrado-2').removeClass('palitos-' + i);
            $('#tercer-cuadrado-2').removeClass('palitos-' + i);
            $('#cuarto-cuadrado-2').removeClass('palitos-' + i);
            $('#quinto-cuadrado-2').removeClass('palitos-' + i);
            $('#sexto-cuadrado-2').removeClass('palitos-' + i);
        }
    }
    // DESPINTAR PUNTOS EN PANTALLA 2
    function depintarPuntosPantalla() {
        $('#puntos-equipo-1').text('0');
        $('#puntos-equipo-2').text('0');
    }

    // -------SECCION PARA LIMITAR LOS PUNTOS----------
    //deshabilita boton de suma al tope y muestra ganador
    function revisarPuntos(num) {
        if (num) {
            if (puntos2 == tipoJuego) {
                $('#suma-puntos-2').prop('disabled', true);
                mostarGanador();
            }
        } else {
            if (puntos1 == tipoJuego) {
                $('#suma-puntos-1').prop('disabled', true);
                mostarGanador();
            }
        };
    }
    //habilitar sumar puntos
    function habilitarSumarPuntos(boton) {
        if (boton == 'primero') {
            $('#suma-puntos-1').prop('disabled', false);
        };
        if (boton == 'segundo') {
            $('#suma-puntos-2').prop('disabled', false);
        }
    }
    //deshabilita boton de resta al tope
    function revisarPuntosResta(num) {
        if (num) {
            if (puntos2 < 1) {
                $('#resta-puntos-2').prop('disabled', true);
            }
        } else {
            if (puntos1 < 1) {
                $('#resta-puntos-1').prop('disabled', true);
            }
        };
    }
    //habilitar sumar puntos
    function habilitarRestarPuntos(boton) {
        if (boton == 'primero') {
            $('#resta-puntos-1').prop('disabled', false);
        };
        if (boton == 'segundo') {
            $('#resta-puntos-2').prop('disabled', false);
        }
    }

    //PANTALLA 3
    //MOSTRAR PANTALLA GANADOR

    function mostarGanador(){
        if(puntos1 ==  tipoJuego){
            $('#equipo-ganador').text(nombre1);
            $('#pantalla-2').hide();
            $('#pantalla-3').show();
        };
        if(puntos2 ==  tipoJuego){
            $('#equipo-ganador').text(nombre2)
            $('#pantalla-2').hide();
            $('#pantalla-3').show();
        };
    }

    //REINICIO PANTALLA DE GANADOR
    $('#reinicio-final').on('click', function (){
        reinicioTodo();
    })
    function reinicioTodo() {
        $('#pantalla-3').hide();
        reiniciarJuego();
    }
})