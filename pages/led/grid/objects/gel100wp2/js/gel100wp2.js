$(function(){
    var container = document.getElementById('led_grid_gel100wp2_link');
    $(container).mouseenter(function(){
        $("#led_grid_gel100wp2_rollover_wrapper").fadeIn(250);
    });



});

$(function(){
    var container = document.getElementById('led_grid_gel100wp2_link');
    $(container).mouseleave(function(){
        $("#led_grid_gel100wp2_rollover_wrapper").fadeOut(250);
    })
});