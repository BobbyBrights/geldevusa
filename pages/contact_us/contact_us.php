<link rel="stylesheet" property="stylesheet" type="text/css" href="/pages/contact_us/css/contact_us.css" >
<?php define('S_ROOT', $_SERVER['DOCUMENT_ROOT']); ?>
<?php include ( S_ROOT . '/php/gel_mail.php'); ?>


<div class="contact_us_text_header">
    <span id="contact_us_header_text"> Contact Us</span>

</div>

<div id="contact_us_first_name_container">
    
        <textarea class="contact_us_text_box" id="contact_us_tb">First Name</textarea>
</div>

<div id="contact_us_last_name_container">

    <textarea class="contact_us_text_box" id="contact_us_lnb">Last Name</textarea>
</div>


<div id="contact_us_phone_number_container">

    <textarea class="contact_us_text_box" id="contact_us_pnb">Phone Number</textarea>
</div>


<div id="contact_us_company_name_container">

    <textarea class="contact_us_text_box" id="contact_us_cnb">Company Name</textarea>
</div>


<div id="contact_us_email_container">

    <textarea class="contact_us_text_box" id="contact_us_eb">E-Mail</textarea>
</div>


<div id="contact_us_website_address_container">

    <textarea class="contact_us_text_box" id="contact_us_wab">Website Address</textarea>
</div>

<div id="contact_us_bottom_container">

    <textarea id="contact_us_your_message_box">Your Message Here</textarea>
    <div id="submit_button_container">
        <img src="/pages/contact_us/img/submit.png" id="contact_us_submit_button" alt="contact_us_submit" onclick="contact_us_submit()">
    </div>

    <div id="contact_us_office_container">
        <div id="offices_lower_container">
            <img src="/pages/contact_us/img/office_left.png" id="contact_us_office_left" alt="contact_us_office_left">
            <span class="contact_us_text_header" id="contact_us_office_left_header_text">
                EXECUTIVE OFFICES
            </span>
            <span id="contact_us_office_left_address">
                439 East Shore Drive, Suite #225 - Eagle, Idaho 83616
            </span>

             <span class="contact_us_text_header" id="contact_us_office_right_header_text">
                RESEARCH & DEVELOPMENT
            </span>
            <span id="contact_us_office_right_address">
                560 South Winchester Boulevard, Suite 500 - San Jose, California 95128
            </span>
            <img src="/pages/contact_us/img/office_right.png" id="contact_us_office_right" alt="contact_us_office_right">
        </div>
    </div>
</div>





<script> $(function(){ script_aload("/pages/contact_us/js/contact_us.js"); }) </script>



































