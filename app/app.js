var puntos1 = 0;
var puntos2 = 0;
var nombre1 = 'Equipo 1';
var nombre2 = 'Equipo 2';
var tipoJuego;
$(document).ready(function () {
    $('#pantalla-2').hide();
    $('#iniciar').on('click', function () {

        //asigna el nombre del equipo a la variable
        nombre1 = $('#nombre-equipo-1').val();
        nombre2 = $('#nombre-equipo-2').val();
        console.log(nombre1, nombre2);

        //asignar nombres a pantalla 2
        $('#titulo-1').text(nombre1);
        $('#titulo-2').text(nombre2);
       

        //ocultar pantalla 1 y mostrar pantalla 2
        $('#pantalla-1').hide();
        $('#pantalla-2').show();
    })
    //PANTALLA 1
     //seleccion de tipo de juego
     $('#tipojuego-24').on('click', function(){
        seleccionDeJuego(24);
    })
    $('#tipojuego-30').on('click', function(){
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
    })
    $('#suma-puntos-2').on('click', function () {
        puntos2++;
        sumaPuntos2();
    })

    function sumaPuntos1() {
        $('#puntos-actuales-1').text(puntos1);
    }
    function sumaPuntos2() {
        $('#puntos-actuales-2').text(puntos2);
    }

    // RESTAR PUNTOS
    $('#resta-puntos-1').on('click', function () {
        puntos1--;
        restaPuntos1();
    })
    $('#resta-puntos-2').on('click', function () {
        puntos2--;
        restaPuntos2();
    })

    function restaPuntos1() {
        $('#puntos-actuales-1').text(puntos1);
    }
    function restaPuntos2() {
        $('#puntos-actuales-2').text(puntos2);
    }
    //selecciond de modo de juego 
    function seleccionDeJuego(num){
        if(num == 30){
            tipoJuego = 30;
            $('#tipojuego-30').addClass('seleccionado');
            $('#tipojuego-24').removeClass('seleccionado');
            $('#tipo-de-juego').text('A 30');
        } else if(num == 24){
            tipoJuego = 24;
            $('#tipojuego-24').addClass('seleccionado');
            $('#tipojuego-30').removeClass('seleccionado');
            $('#tipo-de-juego').text('A 24');
        } else{
            tipoJuego = 30;
        }
        
    }
})