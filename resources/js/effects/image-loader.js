document.addEventListener("scroll", function() {
    $('.image-loader .hidden').each(function(){
        var elPosition  = $(this).offset().top;
        var elHeight    = $(this).height();
        var windowTop   = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (elPosition < windowTop + windowHeight - elHeight) {
            var i = 0;
            $('.image-loader figure').each(function(el){
                setTimeout(function(){
                    console.log('load');
                    $('.image-loader figure').eq(el).removeClass('hidden');
                }, (150 * (i)));
                i++;
            });
        }
    });
});
