/*

function mymenu() {
    var intro = document.getElementById('menu2');
    intro.style.display = 'block';

}*/


$(document).ready(function(){
    $("#menu2-icon").on( "click", function() {
        $("#menu2").toggleClass("display_block");
    } );
});


