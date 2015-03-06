function load_error_page(callback)
{
    var index_body = document.getElementById('index_body_wrapper');

    $(index_body).fadeOut(250, function(){
            hide_persistent_menu(function(){
                hide_products_sub_menu(function(){
                    check_background_height(function(){
                    show_products_banner(function(){
                            $(index_body).load("/pages/errors/404.php", function(){
                            $(index_body).fadeIn(500, function () {
                                callback();
                            });
                        })
                    });
                });
            });
        })
    });
}


/*
 *@Brief:  Loads a page.
 *@Params:
 *          @page_info: Page info object.
 *          @callback: optional callback.
 *@Retval:  None.
 */
function load_page(page_info, callback) {
    var index_body = document.getElementById('index_body_wrapper');
    $.ajax({
        url: page_info.url[0],
        type: 'HEAD',
        error: function() {
            load_error_page(function(){
                callback();
            })

        },
        success: function () {
                $(index_body).load(page_info.url[0], function () {
                    if (page_info.products_banner_hide == 0)
                    {
                        show_products_banner(function(){
                            $(index_body).fadeIn(500, function () {
                                if (page_info.scroll_on_load == 1) {
                                    $('html, body').animate({
                                        scrollTop: $(page_info.scroll_to_div).offset().top
                                    }, 700, function () {
                                        $(index_body).fadeIn(500, function () {
                                            callback();
                                        })
                                    });
                                }
                                callback();
                            });
                        });
                    }
                    else
                    {
                        $(index_body).fadeIn(500, function () {
                            if (page_info.scroll_on_load == 1) {
                                $('html, body').animate({
                                    scrollTop: $(page_info.scroll_to_div).offset().top
                                }, 700, function () {
                                    $(index_body).fadeIn(500, function () {
                                        callback();
                                    })
                                });
                            }
                            callback();
                        });
                    }

                });
        }
    })
}


function handle_pdf(page_info, callback)
{

    $.ajax({
        url: page_info.url[0],
        type:'HEAD',
        error: function()
        {
            load_error_page(function(){
                callback();
            });
        },
        success: function()
        {
            window.open(page_info.url[0], "_blank");
            callback();
        }
    });

}


/*
 *@Brief:  Displays a specified page.
 *@Params: page_info: Page info object.
 *@Retval: None.
 */

function display_page(page_info, callback)
{
    var index_body = document.getElementById('index_body_wrapper');

    if (page_info.url[0].indexOf("pdf") != -1)
    {
        handle_pdf(page_info, function(){
            callback();
        });
    }
    else
    {
        if (page_info.persistent_menu == 0)
            hide_persistent_menu();
        if (page_info.sub_menu_show == 0)
            hide_products_sub_menu();
        if (page_info.products_banner_hide == 1)
            hide_products_banner();
        if (page_info.change_bg == 1) {
            replace_header_image(page_info.header_file);
            $(index_body).fadeOut(500, function () {
                display_background(page_info.background_file, function () {
                    if (page_info.products_banner_hide == 0)
                        show_products_banner();
                    if (page_info.sub_menu_show == 1)
                        show_products_sub_menu();
                    if (page_info.persistent_menu == 1)
                        show_persistent_menu(page_info.persistent_menu_file);
                    load_page(page_info, function () {
                        callback();
                    });
                });
            });
        }
        else
        {
            replace_header_image(page_info.header_file);
            $(index_body).fadeOut(500, function () {
                display_background("/pages/index/objects/background/background_image.php", function () {
                    if (page_info.sub_menu_show == 1)
                        show_products_sub_menu();
                    if (page_info.persistent_menu == 1)
                        show_persistent_menu(page_info.persistent_menu_file);
                    load_page(page_info, function () {

                        callback();
                    });

                });
            });
        }
    }

}
