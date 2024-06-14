$(function(){
    $("#header").load("header.html", function() {
        const currentPath = window.location.pathname;
        $('nav ul li a').each(function() {
            if ($(this).attr('href') === currentPath) {
                $(this).addClass('active-nav-menu');
            }
        });
    });
    $("#footer").load("footer.html");
});