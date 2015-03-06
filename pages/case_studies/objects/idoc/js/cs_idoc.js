function idoc_show(callback)
{
    $("#case_studies_hidden_container_3").fadeIn(250, function(){
        callback();
    });
}



$("#cs_sm_idoc_view_case_study").click(function(){

    remove_case_studies();
    idoc_show(function()
    {
        $("#cs_idoc_container").show();
    });
});
