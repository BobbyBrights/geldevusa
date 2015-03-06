function remove_case_studies(){
    var num_case_studies = 4;
    for (var i = 0; i < num_case_studies; i++) {
        var case_study = "#case_studies_hidden_container_" + i;
        $(case_study).fadeOut(250);
    }
}
