function boise_airport_show(callback)
{
    $("#case_studies_hidden_container_2").fadeIn(250, function(){
        callback();
    });
}




$("#cs_sm_parking_view_case_study").click(function(){

    remove_case_studies();
    boise_airport_show(function()
    {
        $("#cs_parking_container").show();
    });
});


