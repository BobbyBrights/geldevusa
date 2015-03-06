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



date_default_timezone_set('America/Denver');
$data = get_data("https://graph.facebook.com/418744734915229/promotable_posts?access_token=CAACEdEose0cBAGOBCYsqcGEXujUuImV9kRNZA0o6TlYkgraDACIDzfALHS9RUPaOcFLZACtJTZC7kQbZA1sWaJHmOtnCLPR0wgvoH4o2fZAGTFQCZC0F1DQicMYbBC6AvvrkmDQou7gppQwj7LCRBC75Neighdq7OTzH92Yz9OUAMjaK2ZCrwNsA1YK7MWnXmNrjTMR23cdHGFvBiAtMjiBQty9cMO1LTMZD");

$result = json_decode($data);

$latest_post =  $result->data[0];
$latest_post_text = $latest_post->message;
$latest_post_content_description = $latest_post->description;
$latest_post_icon = $latest_post->picture;

$latest_post_time_temp = strtotime($latest_post->updated_time);


$latest_post_time = date("M d Y   -   h:ia",$latest_post_time_temp);