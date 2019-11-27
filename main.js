$(document).ready(function(){


// SLIDER VERSO DESTRA
    $('.next').click(function(){

        var img_attuale = $('img.active');
        var pal_attuale = $('span.active');

        var img_successiva = img_attuale.next('img');
        var pal_successivo = pal_attuale.next('span');

        img_attuale.removeClass('active');

        pal_attuale.removeClass('active');

        if (img_successiva.length == 0) {
            img_successiva = $('img.first');

            pal_successivo = $('span.first');
        }


        img_successiva.addClass('active');
        pal_successivo.addClass('active');


    })


// SLIDER VERSO SINISTRA
    $('.prev').click(function(){

        var img_attuale = $('img.active');
        var pal_attuale = $('span.active');

        var img_successiva = img_attuale.prev('img');
        var pal_successivo = pal_attuale.prev('span');

        img_attuale.removeClass('active');

        pal_attuale.removeClass('active');

        if (img_successiva.length == 0) {
            img_successiva = $('img.last');
            pal_successivo = $('span.last');
        }


        img_successiva.addClass('active');
        pal_successivo.addClass('active');


    })








});
