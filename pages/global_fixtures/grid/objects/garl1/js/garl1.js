$(function(){
    var container = document.getElementById('global_fixtures_grid_garl1_link');
    $(container).mouseenter(function(){
        $("#global_fixtures_grid_garl1_rollover_wrapper").fadeIn(250);
    });



});

$(function(){
    var container = document.getElementById('global_fixtures_grid_garl1_link');
    $(container).mouseleave(function(){
        $("#global_fixtures_grid_garl1_rollover_wrapper").fadeOut(250);
    })
});