$(document).ready(function(){

    $('.next').click(function(){

        var img_attuale = $('img.active');

        var img_successiva = img_attuale.next('img');

        img_attuale.removeClass('active');

        if (img_successiva.length == 0) {
            img_successiva = $('img.first');
        }


        img_successiva.addClass('active')


    })




});
