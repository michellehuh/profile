document.addEventListener("scroll", function() {
    $('.typewriter').each(function(){
        var elPosition  = $(this).offset().top;
        var elHeight    = $(this).height();
        var windowTop   = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (elPosition < windowTop + windowHeight - elHeight) {
            $(this).addClass("line-1 animation");
        }

        if (elPosition > windowTop + windowHeight ) {
            $(this).removeClass("line-1 animation");
        } else if (elPosition + elHeight < windowTop ) {
            $(this).removeClass("line-1 animation");
        }
    });
});