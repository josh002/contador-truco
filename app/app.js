var puntos1 = 0;
var puntos2 = 0;
$(document).ready(function(){
    $('#pantalla-2').hide();
     $('#iniciar').on('click', function(){
        $('#pantalla-1').hide();
        $('#pantalla-2').show();
     })
    // SUMAR PUNTOS
    $('#suma-puntos-1').on('click', function(){
        puntos1++;
        sumaPuntos1();
    })
    $('#suma-puntos-2').on('click', function(){
        puntos2++;
        sumaPuntos2();
    })

    function sumaPuntos1(){
        $('#puntos-actuales-1').text(puntos1);
    }
    function sumaPuntos2(){
        $('#puntos-actuales-2').text(puntos2);
    }

    // RESTAR PUNTOS
    $('#resta-puntos-1').on('click', function(){
        puntos1--;
        restaPuntos1();
    })
    $('#resta-puntos-2').on('click', function(){
        puntos2--;
        restaPuntos2();
    })

    function restaPuntos1(){
        $('#puntos-actuales-1').text(puntos1);
    }
    function restaPuntos2(){
        $('#puntos-actuales-2').text(puntos2);
    }
})