$(document).ready(function(){
    $('.productos-section-button').click(function(e) {
        e.preventDefault();
        $('.productos-section-button').removeClass('productos-section-active');
        $(this).addClass('productos-section-active');
    });
});