$(function(){

    // Esta parte del script hace que el menú se despliegue al pulsar el boton "Ver menú"
    $(".icono-menu").click(function() {

        $(".cont-menu .menu ul").toggleClass("mostrar");

        if(".cont-menu .menu ul".hasClass("mostrar") ) {

            $(".cont-menu .menu ul").css("display","none");

        } else {

            $(".cont-menu .menu ul").css("display","block");

        }

    });


    // Esta parte se encarga de cambiar los colores del fondo y de los bloques de contenido al hacer click en tema
    $("#tema").click(function(){
        $("body").toggleClass("oscuro");

        $("div.bloque-cont").toggleClass("bloque-cont-color-dark");

        $("span.span-titulo").toggleClass("span-titulo-oscuro");

    });


});


