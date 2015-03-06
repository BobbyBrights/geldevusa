function handle_resource_page(page_info, callback)
{
    var index_body = document.getElementById('index_body_wrapper');
    var error_page = "/pages/errors/404.php";
    show_persistent_menu(page_info.persistent_menu_file);
    replace_header_image(page_info.header_file);
    if (page_info.url.length > 1)
    {
        switch (page_info.url[1])
        {
            case "support_documents":
            case "product_information":
            case "press_articles":
            case "all":
            case "page1":
            case "page2":
            case "page3":
                replace_header_image(page_info.header_file);
                if ($(page_info.persistent_menu_div).height() > 2) {
                    handle_resource_sort(page_info.url[1], function () {
                        callback();
                    });
                }
                else {
                    load_page(page_info, function () {
                        handle_resource_sort(page_info.url[1], function () {
                            callback();
                        });
                    });
                }
            break;

            default:
                $(index_body).fadeOut(500, function () {
                    hide_products_sub_menu(function () {
                        hide_persistent_menu(function () {
                            check_background_height(function () {
                                load_page(error_page, function () {
                                    if (callback)
                                        callback();
                                });
                            });
                        });
                    });
                });
            break;
        }
    }
    else
    {
        $(index_body).fadeOut(500, function ()
        {
            display_background("/pages/index/objects/background/background_image.php", function () {
                hide_products_sub_menu();
                show_products_banner();
                load_page(page_info, function () {
                    $(index_body).fadeIn(500, function () {
                        callback();
                    });
                });
            });
        });
    }
}



function handle_resource_sort(call, callback)
{

    if (call === "support_documents")
    {
        $(".resource_support_documents").slideDown(250, function() {
            $(".product_information").slideUp(150, function () {
                $(".press_articles").slideUp(150, function(){
                    if (callback)
                    callback();
                });
            });
        });
    }
    if (call === "product_information")
    {
        $(".product_information").slideDown(250, function(){
            $(".resource_support_documents").slideUp(150, function(){
                $(".press_articles").slideUp(150, function(){
                    if (callback)
                        callback();
                });

            });
        });
    }
    if (call === "press_articles")
    {

        $(".press_articles").slideDown(250, function(){
            $(".resource_support_documents").slideUp(150, function(){
                $(".product_information").slideUp(150, function(){
                    if (callback)
                        callback();
                });
            });
        });
    }

    if (call === "all")
    {
        $(".product_information").slideDown(150, function(){
            $(".press_articles").slideDown(150, function(){
                $(".resource_support_documents").slideDown(150, function(){
                    if (callback)
                        callback();
                });
            });

        });
    }
    if (call === "page1")
    {
        $('.resources_item').slideDown(150, function(){
            if (callback)
                callback();
        });
    }


    if (call === "page2")
    {
        $('.resources_item').slideDown(150);
        $('.resources_item:lt(7)').slideUp(150, function(){
            if (callback)
                callback();
        });
    }

    if (call === "page3")
    {
        $('.resources_item').slideDown(150);
        $('.resources_item:lt(14)').slideUp(150, function(){
            if (callback)
                callback();
        });
    }
}