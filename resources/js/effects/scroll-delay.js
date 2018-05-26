$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    $('.scroll-delay').css({
        'transform' : 'translate(0px, '+ wScroll /4 +'%)'
    });

    // $('.back-bird').css({
    //     'transform' : 'translate(0px, '+ wScroll /4 +'%)'
    // });
    //
    // $('.fore-bird').css({
    //     'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
    // });
});


