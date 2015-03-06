    $(document).ready(function ()
    {

        $(window).scroll(function ()
        {
            if ($(this).scrollTop() > 100)
            {
                $('#footer_arrow').fadeIn();
                $('#footer_lower_text_rttop_container').fadeIn();
            }
            else
            {
                $('.v').fadeOut();
            }
        });
        $('#footer_lower_text_rttop_container').click(function ()
        {
            $("html, body").animate
            ({
                scrollTop: 0
            }, 500);
            return false;
        });

        $('#footer_arrow').click(function ()
        {
            $("html, body").animate
            ({
                scrollTop: 0
            }, 500);
            return false;
        });
    });
