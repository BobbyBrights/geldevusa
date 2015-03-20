
    $(function(){
        var initial_base = document.getElementById('cs_sm_case_study_initial_base');
        var hidden_container = document.getElementById('cs_sm_case_study_hidden_container');

        $(".cs_sm_view_more_cs_link").click(function(){
            var height = $(initial_base).height();

            if (height.toFixed(0) < 1000)
            {
                $(initial_base)

                    .animate({
                        height: 1514,
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


    function load_case_study(file) {
        $("#case_studies_container").fadeOut(250, function () {
            $("#case_studies_container").load(file, function () {
                $("#case_studies_container").fadeIn(250);
            });
        });
    }


    $("#cs_sm_idoc_view_case_study").click(function(){
        load_case_study("/pages/case_studies/objects/idoc/idoc.php", function(){

        });
    });

    $("#cs_sm_oc_infiniti_view_case_study").click(function(){
        load_case_study("/pages/case_studies/objects/oc_infiniti/oc_infiniti.php", function(){

        });
    });

    $("#cs_sm_brandon_dodge_view_case_study").click(function(){
        load_case_study("/pages/case_studies/objects/brandon_dodge/brandon_dodge.php", function(){

        });
    });


    $("#cs_sm_boise_airport_view_case_study").click(function(){
        load_case_study("/pages/case_studies/objects/boise_airport/boise_airport.php", function(){

        });
    });

    $("#cs_sm_boise_airport_arrivals_view_case_study").click(function(){
        load_case_study("/pages/case_studies/objects/boise_airport_arrivals/boise_airport_arrivals.php", function(){

        });
    });

    $("#cs_sm_boise_airport_ticketing_view_case_study").click(function(){
        load_case_study("/pages/case_studies/objects/boise_airport_ticketing/boise_airport_ticketing.php", function(){

        });
    });

    $("#cs_sm_reese_view_case_study").click(function(){
        load_case_study("/pages/case_studies/objects/reese/reese.php", function(){

        });
    });

    $("#cs_sm_genco_view_case_study").click(function(){
        load_case_study("/pages/case_studies/objects/genco/genco.php", function(){

        });
    });

    $("#cs_sm_hazleton_view_case_study").click(function(){
        load_case_study("/pages/case_studies/objects/hazleton/hazleton.php", function(){

        });
    });

    $("#cs_sm_parking_view_case_study").click(function(){
        load_case_study("/pages/case_studies/objects/parking/parking.php", function(){

        });
    });

    $("#cs_sm_parkway_view_case_study").click(function(){
        load_case_study("/pages/case_studies/objects/parkway/parkway.php", function(){

        });
    });

