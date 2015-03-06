<link href="/pages/home/objects/smc/css/social_media_center.css" type="text/css" property="stylesheet" rel="stylesheet" />
<?php //include ( S_ROOT . '/php/facebook/fb.php'); ?>
<?php include ( S_ROOT . '/php/smc_tweets/tweets.php'); ?>

<div id="home_social_media_center_container">
    <img src="/pages/home/objects/smc/img/bg.png"
         id="home_smc_bg" alt="">
    <span id="home_smc_header_text">
        Recent Social Headlines
    </span>
    <div id="home_social_media_center_content">
        <img src="/pages/home/objects/smc/img/dotted_lines.png"
             id="home_smc_dotted_lines_1" alt="home_smc_dotted_lines_1">
        <img src="/pages/home/objects/smc/img/dotted_lines.png"
             id="home_smc_dotted_lines_2" alt="home_smc_dotted_lines_2">




        <div id="home_smc_facebook_wrapper">
            <img src="/pages/home/objects/smc/img/facebook/f_logo.png"
                 id="home_smc_f_logo" alt="home_smc_f_logo" >

            <div id="home_smc_fb_header">
                <div id="home_smc_fb_header_text_container">
                    <span id="home_smc_fb_header_text">
                        <a href="<?php //echo $latest_post_link ?>"><?php //echo $latest_post_text ?></a>
                    </span>
                </div>

                <span id="home_scm_fb_posted_text"> Posted: </span>
                <span id="home_smc_fb_posted_time_text"> <?php //echo $latest_post_time ?></span>
            </div>

            <div id="home_smc_fb_content">
                <img src="<?php //echo $latest_post_icon ?>" alt="latest_fb_post_icon" id="latest_fb_post_icon">
                <span id="home_smc_fb_content_text">
                    <?php //echo $latest_post_content_description ?>
                </span>
            </div>
        </div>

        <div id="home_smc_google_plus_wrapper">
            <img src="/pages/home/objects/smc/img/google_plus/logo.png"
                 id="home_smc_g_logo" alt="home_smc_g_logo" >
        </div>





        <div id="home_smc_twitter_wrapper">
            <img src="/pages/home/objects/smc/img/twitter/twitter.png"
                 id="home_smc_t_logo" alt="home_smc_t_logo" >

            <div id="home_smc_twitter_header">
                <div id="home_smc_twitter_header_text_container">
                    <span id="home_smc_twitter_header_text">
                        <a href="<?php //echo $latest_twitter_post_link ?>">
                            <?php //echo $latest_post_text ?></a>
                    </span>
                </div>

                <span id="home_scm_twitter_posted_text"> Posted: </span>
                <span id="home_smc_twitter_posted_time_text"> <?php echo $display_time ?></span>
            </div>

            <div id="home_smc_twitter_content">
                <a href=<?php echo $twitter_link; ?>
                <span id="home_smc_twitter_content_text">
                    <?php echo cleaner($tweet_desc);?>
                </span>
                </a>
            </div>
        </div>

    </div>
</div>