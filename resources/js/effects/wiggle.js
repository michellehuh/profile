document.addEventListener("scroll", function() {
    $('.wiggle').each(function(){
        var elPosition = $(this).offset().top;
        var elHeight = $(this).height();
        var windowTop = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (elPosition < windowTop + windowHeight - elHeight) {
            $(this).addClass("animation");
        }

        if (elPosition > windowTop + windowHeight ) {
            $(this).removeClass("animation");
        } else if (elPosition + elHeight < windowTop ) {
            $(this).removeClass("animation");
        }
    });
});