var hold = 4000;  // 4 seconds
var $background_images_slider = $('.home_fcs_upper_images'); // class or id of carousel slider
var $button_slider = $('.home_fcs_radio_images'); // class for radio buttons;
var $images = 'img'; // could also use 'img' if you're not using a ul
var $transition_time = 1000; // 1 second
var $time_between_slides = hold;
var hover_ndx = 0;
var clicked = 0;
var $background_image = 0;
var $radio_button = 0;




function background_slides()
{
    return $background_images_slider.find($images);
}

function radio_slides()
{
    return $button_slider.find($images);
}


background_slides().fadeOut();
// set active classes
background_slides().first().addClass('background_active');
background_slides().first().fadeIn($transition_time);


radio_slides().first().addClass('radio_active');
radio_slides().first().fadeIn($transition_time);

// auto scroll
$image_terval = setInterval(
    function()
    {
        if ( clicked != 1)
        {
            $background_image = $background_images_slider.find($images + '.background_active').index();
            $radio_button = $button_slider.find($images + '.radio_active').index();

            //console.log($radio_button);
            background_slides().eq($background_image).removeClass('background_active');
            radio_slides().eq($radio_button).removeClass('radio_active');


            background_slides().eq($background_image).fadeOut($transition_time);
            //radio_slides().eq($radio_button).fadeOut($transition_time);



            if (background_slides().length == $background_image + 1)
                $background_image = -1; // loop to start

            if (radio_slides().length == $radio_button + 1)
                $radio_button = -1; // loop to start


            background_slides().eq($background_image + 1).fadeIn($transition_time);
            radio_slides().eq($radio_button).attr("src", "pages/home/objects/fcs/img/dot_rollover.png");

            radio_slides().eq($radio_button - 1).attr("src", "pages/home/objects/fcs/img/dot.png");

            background_slides().eq($background_image + 1).addClass('background_active');
            radio_slides().eq($radio_button + 1).addClass('radio_active');
        }


    }, $transition_time +  $time_between_slides
);



$(function(){
    $(".home_fcs_dot").mouseover(function(){
        var hover_num = $(this).attr('id');
        hover_ndx = hover_num.substr(hover_num.length - 1);
        for (var i = 0; i < 5; i++)
            $("#home_fcs_dot_" + i).attr("src", "pages/home/objects/fcs/img/dot.png");
        $(this).attr("src", "pages/home/objects/fcs/img/dot_rollover.png");
    })


});

$(function(){
    $(".home_fcs_dot").click(function(){

        var myid = $(this).attr('id');
        var photo_num = myid.substr(myid.length - 1);
        background_slides().fadeOut();
        background_slides().eq(photo_num - 1).fadeIn($transition_time);
        clicked = 1;

    })
});
