
function show_products_sub_menu(callback)
{
    var sub_menu = $("#header_sub_menu_container");

    if (sub_menu.height() < 5) {
        sub_menu.animate({
            height: 83
        }, 500, function () {
            $("#header_sub_menu_container").slideDown(500, function () {
                if (callback)
                    callback();

            });
        })
    }
    if (callback)
    callback();
}




function hide_products_sub_menu(callback)
{
    var sub_menu = $('#header_sub_menu_container');

    if (sub_menu.height() > 5)
    {

        sub_menu.animate({
            height: 0
        }, 500, function()
        {
            sub_menu.slideUp(500, function()
            {
                if (callback)
                    callback();

            });
        })
    }
    else
     if(callback)
        callback();
}



function scroll_to_top()
{
    $("html, body").animate
    ({
        scrollTop: 540
    }, 800);
}


function show_products_banner(callback)
{
    var container = $('#index_products_banner_wrapper');
    var myhash = location.hash.replace(/^#/, '');
    var bookmark = myhash.substring(myhash.indexOf("/") + 1);
    var split = bookmark.split("/");

    if (container.height() < 5) {
        container.load('/pages/index/objects/products_banner/products_banner.php', function () {
            if (split[0] !== "products") {
                $(container).animate({
                    height: 250
                }, 500, function () {
                    $(container).css("overflow", "visible");
                    if (callback)
                        callback();
                });

            }
        });
    }
    else
    if (callback)
        callback();
}





/*
 *@Brief:  Hides the product banner if not already hidden.
 *@Params: Optional callback.
 *@Retval: None.
 */
function hide_products_banner(callback)
{
    var container = $('#index_products_banner_wrapper');

    if ($(container).height() > 5)
    {
        $(container).animate({
            height: 0
        }, 500, function(){
            $(container).css("overflow", "hidden");
            if (callback)
                callback();
        });
    }
    else
    if (callback)
        callback();
}


function change_index_outer_height(height, callback)
{
    var index_outer = document.getElementById('index_outer_body_wrapper');
    var background_lower = document.getElementById('background_lower_image_container');
    var hidden_height = height - 2800;

    $(index_outer).animate({
        height: height
    }, 500);
    $(background_lower).animate({
        height: hidden_height
    }, 500, function() {
            callback();
        })
}



function change_index_inner_position(position, callback)
{
    var index_outer = document.getElementById('index_body_wrapper');

    $(index_outer).animate({
        top: position
    }, 500, function(){
        if (callback)
        callback();
    });

}




function show_persistent_menu(file, callback)
{
    var menu_wrapper = document.getElementById('index_persistent_menu_wrapper');
    if ( $(menu_wrapper).height() < 5)
    {
        $(menu_wrapper).fadeOut(250, function() {
            $("#index_persistent_menu_wrapper").css("top", "-250");
            $(menu_wrapper).load(file, function() {
                $(menu_wrapper).animate({
                    height: 36
                }, 300, function() {
                    $(menu_wrapper).fadeIn(500, function() {
                        if(callback)
                            callback();
                    })
                });
            });
        });
    }
    if ( $(menu_wrapper).height() > 40)
    {
        $(menu_wrapper).fadeOut(250, function() {
            $("#index_persistent_menu_wrapper").css("top", "-250");
            $(menu_wrapper).load(file, function() {
                $(menu_wrapper).animate({
                    height: 36
                }, 300, function() {
                    $(menu_wrapper).fadeIn(500, function() {
                        if(callback)
                            callback();
                    })
                });
            });
        });
    }
    else
    if (callback)
        callback();
}




function hide_persistent_menu(callback)
{
    var menu_wrapper = document.getElementById('index_persistent_menu_wrapper');
    if ( $(menu_wrapper).height() > 5)
    {
        $(menu_wrapper).fadeOut(250, function() {
            $(menu_wrapper).animate({
                height: 0
            }, 0, function(){
                if(callback)
                callback();
            });
        });
    }
    else
    if (callback)
        callback();

}




function set_default_bg(callback)
{
    $("#background_gradient_coverup").animate({
        height: 1823
    }, 500, function(){
    $(".background_image").fadeOut(500,function(){
        $("#background_image_container").fadeOut(0,function(){
            $("#background_image_container").load("/pages/index/objects/background/background_image.php", function(){
                $("#background_image_container").fadeIn(0, function() {
                    $(".background_image").fadeIn(500, function(){
                            if (callback)
                            callback();
                        })
                    })
                });
            });
        });
    });
}



var header_file = "";
function replace_header_image(path, callback)
{
    var is_new = header_file != path;
    header_file = path;
    if (is_new)
    {
        var container = document.getElementById('header_background_images_wrapper');

        $(container).fadeOut(500, function(){
            $("#header_background_images_wrapper").load(path);
        });
        $(container).fadeIn(500, function(){
            if (callback)
                callback();
        });
    }
    else
    if (callback)
        callback();


}
