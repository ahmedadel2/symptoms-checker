jQuery(document).ready(function () {
    jQuery('.skillbar').each(function () {
        jQuery(this).find('.skillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
        }, 1000);
    });
});

new WOW().init();



$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 1) {
            $(".changeX").css("background", "#fff");
        } else {
            $(".changeX").css("background", "rgba(0,0,0,0.0)");
        }
    })
})






