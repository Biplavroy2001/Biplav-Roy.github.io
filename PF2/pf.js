$(document).ready(function() {
    $('#menu').click(function() {

        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');


    });

    $(window).on('scroll load', function() {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if ($(window).scrollTop() > 0) {
            $('.top').show();

        } else {
            $('.top').hide();

        }
    });

    // smooth scroll
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top,
            },
            500,
            'linear'
        );
    });
    var typed = new Typed(".input", {
        strings: ["Biplav Roy.", "frontend Developer.", "Youtuber.", "Photographer."],
        typeSpeed: 70,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".side", {
        strings: ["frontend Developer.", "Youtuber.", "Photographer."],
        typeSpeed: 70,
        backSpeed: 60,
        loop: true
    });

});