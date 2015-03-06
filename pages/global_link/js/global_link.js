var background_dot = $('.gl_background_dot');


$(background_dot).mouseenter(function(){
    var split = this.id.split("_");
    var dot = $(this).attr('id');
    var mydot = "#" + dot;
    var info_container = "#gl_" + split[2] + "_info_container";
    var background = "#gl_background_" + split[2] + "_color";

    $('.gl_background_color').not($(background)).fadeOut(300, function(){
        $('.gl_info_box').not($(info_container)).fadeOut(300, function(){
            $('.gl_background_dot').not($(mydot)).fadeOut(300);
            $('.gl_info_box').not($(info_container)).css("z-index", "-1");
            $(info_container).css("z-index", "2");
            $(background).fadeIn(150, function(){
                $(info_container).fadeIn(300);
            });
        });

    });
});


$(background_dot).mouseleave(function() {
    var dot = $(this).attr('id');
    $('.gl_background_color').fadeOut(300, function(){
        $('.gl_info_box').fadeOut(300, function(){
            $('.gl_background_dot').not($(dot)).fadeIn(300);
        });
    });
});