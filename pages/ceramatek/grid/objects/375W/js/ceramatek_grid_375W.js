$(function(){
    var container = document.getElementById('ceramatek_grid_375W_link');
    $(container).mouseenter(function(){
        $("#ceramatek_grid_375W_rollover_wrapper").fadeIn(250);
    });



});

$(function(){
    var container = document.getElementById('ceramatek_grid_375W_link');
    $(container).mouseleave(function(){
        $("#ceramatek_grid_375W_rollover_wrapper").fadeOut(250);
    })
});