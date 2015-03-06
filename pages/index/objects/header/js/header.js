

;(function($){
    $.fn.header_replace_background = function(header_background)
    {
        //alert(header_background);
        this.html(header_background);
        return this;
    };
})(jQuery);



$(document).ready(function () {

    $.getScript("/js/marque.js", function(){
        $('.tweets').marquee();
    });


});



$('#header_au_cu_gel_kids').on({
    mouseover: function(){
        $("#header_au_cu_gel_kids").attr("src", "/pages/index/objects/header/img/au_cu/gel_kids_color.png");
    },
    mouseout: function(){
        $("#header_au_cu_gel_kids").attr("src", "/pages/index/objects/header/img/au_cu/gel_kids_grey.png");
    }
});



$('#header_sub_menu_led_link').on({
    mouseover: function(){
        $("#header_sub_menu_rollover_led").show();
    },
    mouseout: function(){
        $("#header_sub_menu_rollover_led").hide();
    }
});


$('#header_sub_menu_ceramatek_link').on({
    mouseover: function(){
        $("#header_sub_menu_rollover_ceramatek").show();
    },
    mouseout: function(){
        $("#header_sub_menu_rollover_ceramatek").hide();
    }
});

$('#header_sub_menu_quartztek_link').on({
    mouseover: function(){
        $("#header_sub_menu_rollover_quartztek").show();
    },
    mouseout: function(){
        $("#header_sub_menu_rollover_quartztek").hide();
    }
});

$('#header_sub_menu_gl_link').on({
    mouseover: function(){
        $("#header_sub_menu_rollover_global_link").show();
    },
    mouseout: function(){
        $("#header_sub_menu_rollover_global_link").hide();
    }
});

$('#header_sub_menu_global_fixtures_link').on({
    mouseover: function(){
        $("#header_sub_menu_rollover_global_fixtures").show();
    },
    mouseout: function(){
        $("#header_sub_menu_rollover_global_fixtures").hide();
    }
});