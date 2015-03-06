<?php


function get_data($url) {
    $ch = curl_init();
    $timeout = 5;
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
    $data = curl_exec($ch);
    curl_close($ch);
    return $data;
}


$google_plus_id = '113600773766639988408';
$appKey = 'AIzaSyBaK8-tYnhnh1cwyvtsNsav3N7TrwD8RV4';
$streams = json_decode(file_get_contents('https://www.googleapis.com/plus/v1/people/' . $google_plus_id . '/activities/public?key='. $appKey));


$data = get_data("'https://www.googleapis.com/plus/v1/people/' . $google_plus_id . '/activities/public?key='. $appKey");

$result = json_decode($data);

$latest_post =  $result->data[0];
$latest_post_text = $latest_post->message;
$latest_post_content_description = $latest_post->description;
$latest_post_icon = $latest_post->picture;

$latest_post_time_temp = strtotime($latest_post->updated_time);


$latest_post_time = date("M d Y   -   h:ia",$latest_post_time_temp);