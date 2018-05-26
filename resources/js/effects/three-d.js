$(function() {
    $('.three-d').mousemove(function(e){
        $(this).removeClass("animation");
        var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
        var rYP = (e.pageY - this.offsetTop-$(this).height()/2);

        $('.three-d').css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(227,6,19,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
    });
});

document.addEventListener("scroll", function() {
    $('.three-d').each(function(){
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