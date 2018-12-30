
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
