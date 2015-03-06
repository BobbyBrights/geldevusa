var background_file = "";
function display_background(background_directory, callback)
{
    var is_new = background_file != background_directory;
    background_file = background_directory;
    if (is_new)
    {
        $('#background_image_container').fadeOut(500, function(){
            $("#background_image_container").load(background_directory, function() {
                $("#background_image_container").fadeIn(500, function(){
                    $('.background_image').fadeIn(500, function () {
                        if (callback)
                            callback();
                    })

                });
            });
        });
    }
    else
    {
        if (callback)
            callback();
    }
}




function load_background(callback)
{
    var hash = location.hash.replace(/^#/, '');
    var bookmark = hash.substring(hash.indexOf("/") + 1);
    var split = bookmark.split("/");
    if (split[0] !== "global_link")
    {
        display_background("/pages/index/objects/background/background_image.php", function(){
            if (callback)
                callback();
        });
    }
    else
    {
        display_background("/pages/global_link/global_link_bg.php", function() {
        if (callback)
            callback();
        })
    }
}
