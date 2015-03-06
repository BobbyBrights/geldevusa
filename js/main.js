String.prototype.filename=function(extension){
    var s= this.replace(/\\/g, '/');
    s= s.substring(s.lastIndexOf('/')+ 1);
    return extension? s.replace(/[?#].+$/, ''): s.split('.')[0];
};


function script_aload(location, callback) {
    var scriptTag = document.createElement('script');
    scriptTag.src = location;
    scriptTag.async = true;
    var headTag = document.getElementsByTagName('head')[0];
    headTag.appendChild(scriptTag);
    if (callback)
        callback();

}





function check_background_height(callback)
{
    var myhash = location.hash.replace(/^#/, '');
    var bookmark = myhash.substring(myhash.indexOf("/") + 1);
    if (bookmark == "global_link")
    {
        if (callback)
        {
            callback();
            return;
        }
    }
    var background_height = $(".background_image").height();
    if (background_height < 1800)
    {
        set_default_bg(function(){
            if (callback)
                callback();
        });
    }

    else
    {
        if (callback)
            callback();

    }

}
