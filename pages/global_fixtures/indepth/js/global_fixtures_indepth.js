$('.global_fixtures_indepth_top_menu_test').on({
    mouseover: function(){
        console.log("stuff");
        $(".global_fixtures_indepth_grid_view").attr("src", "/pages/global_fixtures/indepth/img/grid_view_rollover.png");
    },
    mouseout: function(){
        $(".global_fixtures_indepth_grid_view").attr("src", "/pages/global_fixtures/indepth/img/grid_view.png");
    }
});