$(function(){
    var container = document.getElementById('quartztek_grid_200W_link');
    $(container).mouseenter(function(){
        $("#quartztek_grid_200W_rollover_wrapper").fadeIn(250);
    });



});

$(function(){
    var container = document.getElementById('quartztek_grid_200W_link');
    $(container).mouseleave(function(){
        $("#quartztek_grid_200W_rollover_wrapper").fadeOut(250);
    })
});