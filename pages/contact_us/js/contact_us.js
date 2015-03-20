function contact_us_submit()
{

    var contact_us = {
        "first_name": $("#contact_us_tb").val(),
        "last_name": $("#contact_us_lnb").val(),
        "phone_number": $("#contact_us_pnb").val(),
        "company_name": $("#contact_us_cnb").val(),
        "email_address": $("#contact_us_eb").val(),
        "website_address": $("#contact_us_wab").val(),
        "message": $("#contact_us_your_message_box").val()

    };


    contact_us = $(this).serialize() + "&" + $.param(contact_us);
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "/php/gel_mail.php", //Relative or absolute path to response.php file
        data: contact_us,
        success: function(contact_us) {
            alert("Form submitted successfully.\nReturned json: " + contact_us["json"]);
        }
    });
}



$('#contact_us_tb').click(function(){
    if ($("#contact_us_tb").val() == "First Name")
        $("#contact_us_tb").val("");


    if ($("#contact_us_tb").val() == "First name required!")
    {
        $("#contact_us_tb").val("");
        $("#contact_us_tb").css("color", "#5c6264");
    }
});


$('#contact_us_lnb').click(function(){
    if ($("#contact_us_lnb").val() == "Last Name")
        $("#contact_us_lnb").val("");


    if ($("#contact_us_lnb").val() == "Last name required!")
    {
        $("#contact_us_lnb").val("");
        $("#contact_us_lnb").css("color", "#5c6264");
    }
});


$('#contact_us_cnb').click(function(){
    if ($("#contact_us_cnb").val() == "Company Name")
        $("#contact_us_cnb").val("");
});


$('#contact_us_wab').click(function(){
    if ($("#contact_us_wab").val() == "Website Address")
        $("#contact_us_wab").val("");
});


$('#contact_us_your_message_box').click(function(){
    if ($("#contact_us_your_message_box").val() == "Your Message Here")
        $("#contact_us_your_message_box").val("");
});



$('#contact_us_pnb').click(function(){
    if ($("#contact_us_pnb").val() == "Phone Number")
        $("#contact_us_pnb").val("");

    if ($("#contact_us_pnb").val() == "Phone Number required!")
    {
        $("#contact_us_pnb").val("");
        $("#contact_us_pnb").css("color", "#5c6264");
    }
});


$('#contact_us_eb').click(function(){
    if ($("#contact_us_eb").val() == "E-Mail")
        $("#contact_us_eb").val("");

    if ($("#contact_us_eb").val() == "Email Address required!")
    {
        $("#contact_us_eb").val("");
        $("#contact_us_eb").css("color", "#5c6264");
    }
});