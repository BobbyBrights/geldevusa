<link rel="stylesheet" property="stylesheet" type="text/css" href="/pages/led/grid/css/led_grid.css" >

<?php define('S_ROOT', $_SERVER['DOCUMENT_ROOT']); ?>



<div id="led_grid_container">

    <div id="led_grid_highbays_container">
        <span class="led_grid_header_text" id="led_grid_high_bay_text">
            High Bay
        </span>
        <div id="led_grid_gel40wfl1_wrapper">
            <?php include ( S_ROOT . '/pages/led/grid/objects/gel40wfl1/gel40wfl1.php'); ?>
        </div>


        <div id="led_grid_gel40wfl2_wrapper">
            <?php include ( S_ROOT . '/pages/led/grid/objects/gel40wfl2/gel40wfl2.php'); ?>
        </div>


        <div id="led_grid_gel80wfl1_wrapper">
            <?php include ( S_ROOT . '/pages/led/grid/objects/gel80wfl1/gel80wfl1.php'); ?>
        </div>

        <div id="led_grid_gel80wfl2_wrapper">
            <?php include ( S_ROOT . '/pages/led/grid/objects/gel80wfl2/gel80wfl2.php'); ?>
        </div>
    </div>


    <div id="led_grid_wallpacks_container">
        <img src="/pages/led/grid/img/divider.png" class="led_grid_divider" alt="led_grid_divider_1">



         <span class="led_grid_header_text" id="led_grid_wall_pack_text">
            Wall Packs
        </span>
        <div id="led_grid_gel150wp1_wrapper">
            <?php include ( S_ROOT . '/pages/led/grid/objects/gel150wp1/gel150wp1.php'); ?>
        </div>


        <div id="led_grid_gel50wp2_wrapper">
            <?php include ( S_ROOT . '/pages/led/grid/objects/gel150wp2/gel150wp2.php'); ?>
        </div>

        <div id="led_grid_gel100wp1_wrapper">
            <?php include ( S_ROOT . '/pages/led/grid/objects/gel100wp1/gel100wp1.php'); ?>
        </div>

        <div id="led_grid_gel100wp2_wrapper">
            <?php include ( S_ROOT . '/pages/led/grid/objects/gel100wp2/gel100wp2.php'); ?>
        </div>

        <div id="led_grid_gledmwp18_wrapper">
            <?php include ( S_ROOT . '/pages/led/grid/objects/gledmwp18/gledmwp18.php'); ?>
        </div>

        <div id="led_grid_gledmwp25_wrapper">
            <?php include ( S_ROOT . '/pages/led/grid/objects/gledmwp25/gledmwp25.php'); ?>
        </div>
    </div>



    <div id="led_grid_canopy_container">
        <img src="/pages/led/grid/img/divider.png" class="led_grid_divider" alt="led_grid_divider">



         <span class="led_grid_header_text" id="led_grid_canopy_text">
            Canopy Lighting
        </span>
        <div id="led_grid_gel150al1_wrapper">
            <?php include ( S_ROOT . '/pages/led/grid/objects/gel150al1/gel150al1.php'); ?>
        </div>


        <div id="led_grid_gel50al2_wrapper">
            <?php include ( S_ROOT . '/pages/led/grid/objects/gel150al2/gel150al2.php'); ?>
        </div>


        <div id="led_grid_gel100al1_wrapper">
            <?php include ( S_ROOT . '/pages/led/grid/objects/gel100al1/gel100al1.php'); ?>
        </div>

        <div id="led_grid_gel100al2_wrapper">
            <?php include ( S_ROOT . '/pages/led/grid/objects/gel100al2/gel100al2.php'); ?>
        </div>


    </div>


</div>
