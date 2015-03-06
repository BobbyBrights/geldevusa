// Boutique Carousel; 5-item image-only "Lazy Susan"
function initLazySusan5(e, total_w, front_img_w, front_img_h, duration, front_tm, behind_tm, back_tm, behind_o, back_o, behind_s, back_s, behind_d, autop, autop_time, stop_autop, frames){
    $(e).boutique({
        container_width: total_w,
        front_img_width: front_img_w,
        front_img_height: front_img_h,
        speed: duration,
        front_topmargin: front_tm,
        behind_topmargin: behind_tm,
        back_topmargin:	back_tm,
        behind_opacity:	behind_o,
        back_opacity: back_o,
        behind_size: behind_s,
        back_size: back_s,
        behind_distance: behind_d,
        autoplay: autop,
        autoplay_interval: autop_time,
        stop_autoplay_on_click: stop_autop,
        frames: frames
    });
}