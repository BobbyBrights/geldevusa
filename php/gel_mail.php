<?php
if (is_ajax()) {
    if (isset($_POST["message"]) && !empty($_POST["message"])) { //Checks if action value exists
        $action = $_POST["message"];
        switch($action) { //Switch case for value of action
            case "Hello": test_function(); break;
        }
    }
}

//Function to check if the request is an AJAX request
function is_ajax() {
    return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
}

function test_function(){
    $return = $_POST;

    //Do what you need to do with the info. The following are some examples.
    //if ($return["favorite_beverage"] == ""){
    //  $return["favorite_beverage"] = "Coke";
    //}
    //$return["favorite_restaurant"] = "McDonald's";
    $return["message"] = "goodbye";
    $return["json"] = json_encode($return);
    echo json_encode($return);
}



require_once "swiftmailer/swift_required.php";




function GEL_SendMailX($array_from, $array_to, $array_cc, $array_bcc, $subject, $body, $attachment)
{

}




function GEL_SendMail($array_from, $array_to, $array_cc, $array_bcc, $subject, $body, $attachment)
{



}

