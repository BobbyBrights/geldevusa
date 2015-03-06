
    $(function(){
        var initial_base = document.getElementById('cs_sm_case_study_initial_base');
        var hidden_container = document.getElementById('cs_sm_case_study_hidden_container');

        $(".cs_sm_view_more_cs_link").click(function(){
            var height = $(initial_base).height();

            if (height.toFixed(0) < 1000)
            {
                $(initial_base)

                    .animate({
                        height: 1566,
                        width: 419
                    }, 500, function(){
                        $(hidden_container).show();
                        $('.cs_sm_view_more_cs_link').html("VIEW LESS CASE STUDIES");
                    });


            }
            else
            {
                $(initial_base)

                    .animate({
                        height: 580,
                        width: 419
                    }, 500, function(){
                        $(hidden_container).hide();
                        $('.cs_sm_view_more_cs_link').html("VIEW MORE CASE STUDIES");
                    });
            }
        })
    });

