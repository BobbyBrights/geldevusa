function oc_infiniti_show(callback)
{
    $("#case_studies_hidden_container_0").fadeIn(250, function(){
        callback();
    });
}




$("#cs_sm_oc_infiniti_view_case_study").click(function(){

    remove_case_studies();
    oc_infiniti_show(function()
    {
        $("#cs_oc_infiniti_container").show();
    });
});


