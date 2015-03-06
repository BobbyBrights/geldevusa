/**
 * Created by dasho_000 on 3/19/14.
 * Heavily modified by Adam Duskett on 1/30/2015.
 *
 * This js file is intended to be a service loader + a history tracker.
 *
 * THis website relies on the usages of the hash tag: #  , this allows
 * use to capture various links without refreshing the page.  We can
 * see where the user wants to navigate and capture that in JS.  Once
 * we have an even where there's a re-nav, we can parse the URI and
 * determine where the user wants to go.
 *
 * Typically each "resource" in the URI is separated by a  "/".  We will
 * use this to determine what resource they are accessing.  everything
 * before the "/" will be the resource and everything after the "/" will
 * be the parameter for the resource.  A resource may choose to load a sub
 * resource and pass on parameters that is has parsed, allowing nested loading
 * of various ajax stuff
 *
 * This method works great with browser history, as it is "stateless".  Meaning
 * you can copy and paste the URL into any browser and you will be shown
 * exactly what you were seeing before you copied the URL.  Also useful
 * if you want to email a client details on a specific product.
 *
 */




function get_hash(string)
{

    var split = string.split("/");
    var join = split.join();
    return join.replace(/,/g, "/");

}





function process_product_subdomain(product, page_info, service_array)
{
    var temp = service_array.slice(0);
    service_array.shift();
    page_info.url = service_array.slice(0);
    service_array.splice(0,0, "pages");
    service_array.splice(1,0, product);
    service_array.splice(2,0, "indepth");
    var sub_dir = service_array.join().replace(/,/g, "/");
    page_info.url[0] =  sub_dir + "/" + product + "_" + service_array[3] + ".php";
    if (page_info.url.length > 1)
    {

        switch (page_info.url[1])
        {
            case "specs":
                page_info.url[1] = sub_dir.split("/");
                page_info.url[1].pop();
                sub_dir = page_info.url[1].join().replace(/,/g, "/");
                page_info.url[0] = sub_dir + "/pdf/" + product + "_"  + service_array[3] + "_specs.pdf";
                break;
            case "instructions":
                page_info.url[1] = sub_dir.split("/");
                page_info.url[1].pop();
                sub_dir = page_info.url[1].join().replace(/,/g, "/");
                page_info.url[0] = sub_dir + "/pdf/" + product + "_"  + service_array[3] + "_instructions.pdf";
                break;

            default:
                page_info.url[0] = "/pages/errors/404.php";
                break;
        }

    }
    else
    {
        page_info.persistent_menu = 1;
        if (temp[0] === "led")
        {
            switch (temp[1])
            {
                case "floodlights":
                case "wallpacks":
                case "area_lighting":

                    page_info.scroll_on_load = 1;
                    page_info.scroll_to_div = "#led_grid_" + temp[1] + "_container";
                    page_info.url[0] =  "/pages/led/grid/led_grid.php";
                    page_info.persistent_menu = 0;
                    break;

                default:
                    break;
            }
        }
        if (temp[0] === "global_fixtures")
        {
            switch (temp[1])
            {
                case "floodlights":
                case "wallpacks":
                case "area_lighting":
                    page_info.persistent_menu = 0;
                    page_info.scroll_on_load = 1;
                    page_info.scroll_to_div = "#global_fixtures_" + temp[1] + "_container";
                    page_info.url[0] =  "/pages/global_fixtures/grid/global_fixtures_grid.php";
                    console.log(page_info.scroll_to_div);
                    break;

                default:
                    break;
            }
        }


    }
}





function Service_Root(bookmark, callback)
{
    //console.log("Service_Root");
    var service = get_hash(bookmark);
    var service_array = service.split("/");

    //  save service
    var page_info = {
        "after_page_load_service": "",
        "sub_menu_show": 0,
        "products_banner_hide": 0,
        "persistent_menu": 0,
        "persistent_menu_div": "",
        "persistent_menu_file": "",
        "url": service_array.slice(0),
        "header_file": "/pages/index/objects/header/header_backgrounds.php",
        "background_file": "/pages/index/objects/background/background_image.php",
        "change_bg": 0,
        "scroll_on_load": 0,
        "scroll_to_div": ""
    };


    for (var i = 0; i < 1; i++)
    {
        switch (service_array[i])
        {
            case "ceramatek":
                page_info.url[0] = "/pages/ceramatek/grid/ceramatek_grid.php";
                page_info.sub_menu_show = 1;
                page_info.products_banner_hide = 1;
                page_info.persistent_menu_div = "#ceramatek_indepth_top_menu_bar";
                page_info.persistent_menu_file = "/pages/ceramatek/indepth/ceramatek_indepth.php";
                if (service_array.length > 1)
                    process_product_subdomain("ceramatek", page_info, service_array);
                break;


            case "quartztek":
                page_info.url[0] = "/pages/quartztek/grid/quartztek_grid.php";
                page_info.sub_menu_show = 1;
                page_info.products_banner_hide = 1;
                page_info.persistent_menu_div = "#quartztek_indepth_top_menu_bar";
                page_info.persistent_menu_file = "/pages/quartztek/indepth/quartztek_indepth.php";
                if (service_array.length > 1)
                    process_product_subdomain("quartztek", page_info, service_array);
                break;


            case "led":
                page_info.url[0] = "/pages/led/grid/led_grid.php";
                page_info.sub_menu_show = 1;
                page_info.products_banner_hide = 1;
                page_info.persistent_menu_div = "#led_indepth_top_menu_bar";
                page_info.persistent_menu_file = "/pages/led/indepth/led_indepth.php";
                if (service_array.length > 1)
                    process_product_subdomain("led", page_info, service_array);
                break;


            case "global_fixtures":
                page_info.url[0] = "/pages/global_fixtures/grid/global_fixtures_grid.php";
                page_info.sub_menu_show = 1;
                page_info.products_banner_hide = 1;
                page_info.persistent_menu_div = "#global_fixtures_indepth_top_menu_bar";
                page_info.persistent_menu_file = "/pages/global_fixtures/indepth/global_fixtures_indepth.php";
                if (service_array.length > 1)
                    process_product_subdomain("global_fixtures", page_info, service_array);
                break;




            case "resources":
                page_info.header_file = "/pages/resources/resources_header.php";
                page_info.sub_menu_show = 0;
                page_info.persistent_menu_div = "#resources_menu_header";
                page_info.persistent_menu_file = "/pages/resources/resources_menu.php";
                page_info.persistent_menu = 1;
                page_info.url[0] = "/pages/resources/resources.php";

                break;



            case "global_link":
                page_info.url[0] = "/pages/global_link/global_link.php";
                page_info.sub_menu_show = 1;
                page_info.products_banner_hide = 1;
                page_info.change_bg = 1;
                page_info.background_file = "/pages/global_link/global_link_bg.php";
                break;






            case "global_advance":
                page_info.url[0] = "/pages/global_advance/global_advance.php";
                page_info.sub_menu_show = 1;
                page_info.products_banner_hide = 1;
                break;



            case "products":

                page_info.url[0] = "/pages/products_grid/products_grid.php";
                page_info.products_banner_hide = 1;
                page_info.sub_menu_show = 0;

                break;



            case "home":
                page_info.url[0] = "/pages/home/home.php";
                break;

            case "about_us":
                page_info.header_file = "/pages/about_us/about_us_header.php";
                page_info.url[0] = "/pages/about_us/about_us.php";
                break;

            case "contact_us":
                page_info.header_file = "/pages/contact_us/contact_us_header.php";
                page_info.url[0] = "/pages/contact_us/contact_us.php";
                break;


            case "case_studies":
                page_info.url[0] = "/pages/case_studies/case_studies.php";
                break;



            case "order":
                page_info.url[0] = "/pages/order/order.php";
                break;



            default:
                page_info.url[0] = "/pages/errors/404.php";
                break;

        }
    }

    if (page_info.url[0] === "/pages/resources/resources.php")
    {
        $.getScript("/pages/resources/js/resources.js", function(){
            handle_resource_page(page_info, function() {
                if (callback)
                    callback();
            });
        });
    }
    else
    {
        display_page(page_info, function() {
            if (callback)
                callback();
        });
    }


}





//  this is part of the history
function ChangedURI(callback)
{
    //console.log("ChangedURI");

    //  identify new link
    var hash = location.hash.replace(/^#/, '');
    if(hash == "")
    {
        window.location.href = "/#/home";
        return;
    }
    var bookmark = hash.substring(hash.indexOf("/") + 1);
    //console.log("ChangedURI bookmark = " + bookmark);
    //  find first level parameter

    if (bookmark == "")
        bookmark = "home";

    //  call first level API
    Service_Root(bookmark, function(){
        if (callback)
            callback();
    });

}



$( window ).load(function()
{

    //  identify new link
    var hash = get_hash(location.hash);
    var new_hash = hash.substring(hash.indexOf("/") + 1);

    $(window).on('hashchange', function()
    {
        var hash = get_hash(location.hash);
        var new_hash = hash.substring(hash.indexOf("/") + 1);
        //console.log("");
        ChangedURI(function(){
            if (new_hash === "home")
                $("#banner_products_led_banner").fadeIn(500);
            else
                $("#banner_products_led_banner").fadeOut(500);
        });
    });
    load_background(function(){
    ChangedURI(function(){
        if (new_hash === "home")
            $("#banner_products_led_banner").fadeIn(500);
        })
    });
});
