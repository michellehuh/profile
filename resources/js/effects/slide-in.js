document.addEventListener("scroll", function() {
    $('.slide-in').each(function(){
        var elPosition  = $(this).offset().top;
        var elHeight    = $(this).height();
        var windowTop   = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (elPosition < windowTop + windowHeight - elHeight) {
            $(this).addClass("animation fade-in-right");
        }

        if (elPosition > windowTop + windowHeight ) {
            $(this).removeClass("animation fade-in-right");
        } else if (elPosition + elHeight < windowTop ) {
            $(this).removeClass("animation fade-in-right");
        }
    });
});