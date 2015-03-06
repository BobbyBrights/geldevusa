var my_video = document.getElementById("home_vfc_main_video_hd");

function playPause()
{
    if (my_video.paused)
        my_video.play();
    else
        my_video.pause();
}


$("#home_vfc_play_link").click(function(){
    $("#index_video_frame_container").fadeOut(500, function(){
        $("#home_vfc_main_video_hd").fadeIn(500, function(){
            playPause();
        });
    });
});

$(my_video).click(function(){
    playPause();
});


$(my_video).hover(function toggleControls() {
    if (this.hasAttribute("controls")) {
        this.removeAttribute("controls")
    } else {
        this.setAttribute("controls", "controls")
    }
});

my_video.onended = function(){

    $("#home_vfc_main_video_hd").fadeOut(250, function() {
        $("#index_video_frame_container").fadeIn(250);
    });
};
