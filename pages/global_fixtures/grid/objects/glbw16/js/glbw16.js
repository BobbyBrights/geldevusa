$(function(){
    var container = document.getElementById('global_fixtures_grid_glbw16_link');
    $(container).mouseenter(function(){
        $("#global_fixtures_grid_glbw16_rollover_wrapper").fadeIn(250);
    });



});

$(function(){
    var container = document.getElementById('global_fixtures_grid_glbw16_link');
    $(container).mouseleave(function(){
        $("#global_fixtures_grid_glbw16_rollover_wrapper").fadeOut(250);
    })
});