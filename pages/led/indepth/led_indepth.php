<link rel="stylesheet" property="stylesheet" type="text/css" href="/pages/led/indepth/css/led_indepth.css" >
<?php define('S_ROOT', $_SERVER['DOCUMENT_ROOT']); ?>

<div id="led_indepth_top_menu_bar">



    <?php include ( S_ROOT . '/pages/led/indepth/highbay_menu.php'); ?>
    <?php include(S_ROOT . '/pages/led/indepth/interior_menu.php'); ?>
    <?php include(S_ROOT . '/pages/led/indepth/exterior_menu.php'); ?>


    <div id="led_indepth_top_menu_right_bar">
        <img src="/pages/led/indepth/img/place_order.png"
             id="led_indepth_place_order" alt="led_indepth_place_order">
        <a href="#" id="led_indepth_place_order_link">
            <span class="led_indepth_top_menu_bar_text" id="led_indepth_top_menu_bar_place_order">
                PLACE YOUR ORDER
            </span>
        </a>

        <img src="/pages/led/indepth/img/dl_spec_sheet.png"
             id="led_indepth_dl_spec_sheet" alt="led_indepth_dl_spec_sheet">

        <a href="#" id="led_indepth_spec_sheet_link">
            <span class="led_indepth_top_menu_bar_text" id="led_indepth_top_menu_bar_spec_sheet">
                DOWNLOAD SPEC SHEET
            </span>
        </a>


        <img src="/pages/led/indepth/img/install_instructions.png"
             id="led_indepth_install_instructions" alt="led_indepth_install_instructions">
        <a href="#" id="led_indepth_install_instructions_link">
            <span class="led_indepth_top_menu_bar_text" id="led_indepth_top_menu_bar_install_instructions">
                INSTALL INSTRUCTIONS
            </span>
        </a>
    </div>
</div>

<script> $(function(){ script_aload("/pages/led/indepth/js/led_indepth.js"); }) </script>
