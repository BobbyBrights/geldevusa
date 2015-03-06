<link href="/pages/index/objects/products_banner/css/products_banner.css" property="stylesheet" type="text/css" rel="stylesheet" />

<?php define('S_ROOT', $_SERVER['DOCUMENT_ROOT']); ?>



<div id="product_banner_container">
    <div id="product_banner_content">
        <div id="product_banner_led_solutions_wrapper">
            <?php include ( S_ROOT . "/pages/index/objects/products_banner/objects/led_solutions/led_solutions.php"); ?>
        </div>
        <div id="product_banner_ceramatek_wrapper">
            <?php include ( S_ROOT . "/pages/index/objects/products_banner/objects/ceramatek/ceramatek.php"); ?>
        </div>
        <div id="product_banner_quartztek_wrapper">
            <?php include ( S_ROOT . "/pages/index/objects/products_banner/objects/quartztek/quartztek.php"); ?>
        </div>

        <div id="product_banner_global_fixtures_wrapper">
            <?php include ( S_ROOT . "/pages/index/objects/products_banner/objects/global_fixtures/global_fixtures.php"); ?>
        </div>

        <div id="product_banner_global_link_wrapper">
            <?php include ( S_ROOT . "/pages/index/objects/products_banner/objects/global_link/global_link.php"); ?>
        </div>
    </div>



</div>

 <?php //include("./pages/index/objects/products_banner/led_solutions/led_solutions.php"); ?>