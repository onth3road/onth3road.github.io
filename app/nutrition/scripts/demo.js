$(document).ready(function(){
    $('.sliders-container').slick({
        dots: true,
        arrows: false
    });

    $('.image-container').css({ height: $(window).innerHeight() * 0.8 });
    $(window).resize(function(){
        $('.image-container').css({ height: $(window).innerHeight() * 0.8});
    });
})