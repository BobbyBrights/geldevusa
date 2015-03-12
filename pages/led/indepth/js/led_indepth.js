$('.led_indepth_top_menu_test').on({
    mouseover: function(){
        $(".led_indepth_grid_view").attr("src", "/pages/led/indepth/img/grid_view_rollover.png");
    },
    mouseout: function(){
        $(".led_indepth_grid_view").attr("src", "/pages/led/indepth/img/grid_view.png");
    }
});