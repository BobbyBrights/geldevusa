function handle_resource_page(page_info, callback)
{

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
                if ($(page_info.persistent_menu_div).height() > 40) {
                    handle_resource_sort(page_info.url[1], function () {
                        callback();
                    });
                }
                else {
                    show_persistent_menu(page_info);
                    load_page(page_info, function () {
                        handle_resource_sort(page_info.url[1], function () {
                            callback();
                        });
                    });
                }
                break;

            default:
                page_info.url[0] = "/pages/resources/pdf/" + page_info.url[1] + ".pdf";
                handle_pdf(page_info, function(){

                });
                break;
        }
    }
    else
    {
        display_page(page_info, function(){
            callback();
        })
    }
}




function handle_resource_sort(call, callback) {

    if (call === "support_documents") {
        $(".resource_support_documents").slideDown(250, function () {
            $(".product_information").slideUp(150, function () {
                $(".press_articles").slideUp(150, function () {
                    if (callback)
                        callback();
                });
            });
        });
    }
    if (call === "product_information") {
        $(".product_information").slideDown(250, function () {
            $(".resource_support_documents").slideUp(150, function () {
                $(".press_articles").slideUp(150, function () {
                    if (callback)
                        callback();
                });

            });
        });
    }
    if (call === "press_articles") {

        $(".press_articles").slideDown(250, function () {
            $(".resource_support_documents").slideUp(150, function () {
                $(".product_information").slideUp(150, function () {
                    if (callback)
                        callback();
                });
            });
        });
    }

    if (call === "all") {
        $(".product_information").slideDown(150, function () {
            $(".press_articles").slideDown(150, function () {
                $(".resource_support_documents").slideDown(150, function () {
                    if (callback)
                        callback();
                });
            });

        });
    }
    if (call === "page1") {
        $("#resources_body_container_1").animate(
            {
                "margin-left": "652px"
            }, 500, function(){
                if (callback)
                    callback();
            });
    }


    if (call === "page2") {
        $("#resources_body_container_1").animate(
            {
                "margin-left": "-652px"
            }, 500, function(){
                if (callback)
                    callback();
            });
    }


    if (call === "page3") {
        $("#resources_body_container_1").animate(
            {
                "margin-left": "-1953px"
            }, 500, function() {
                if (callback)
                    callback();
            });
    }
}