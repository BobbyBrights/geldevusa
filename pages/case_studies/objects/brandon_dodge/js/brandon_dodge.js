function brandon_dodge_show(callback)
{
    $("#case_studies_hidden_container_1").fadeIn(250, function(){
        callback();
    });
}




$("#cs_sm_brandon_dodge_view_case_study").click(function(){

    remove_case_studies();
    brandon_dodge_show(function()
    {
        $("#cs_brandon_dodge_container").show();
    });
});


