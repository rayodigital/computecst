/*

function mymenu() {
    var intro = document.getElementById('menu2');
    intro.style.display = 'block';

}*/


$(document).ready(function()
{
    //$('.bxslider').bxSlider();

    //
    $('.bxslider').bxSlider({
        auto: true,
        autoControls: true,
        pause: 3000,
        slideMargin: 20
        });
    //


    $("#menu2-icon").on( "click", function() {
        $("#menu2").toggleClass("display_block");
    } );
});


