<link rel="stylesheet" property="stylesheet" type="text/css" href="/pages/products_grid/css/products_grid.css" >

<!--  <script src="/pages/case_studies/js/case_study_functions.js"></script> -->


<?php define('S_ROOT', $_SERVER['DOCUMENT_ROOT']); ?>

<div id="products_grid_wrapper">
    <div id="products_grid_led_solutions_wrapper">
        <?php include ( S_ROOT . '/pages/products_grid/objects/led_solutions/products_led_solutions.php'); ?>
    </div>

    <div id="products_grid_ceramatek_wrapper">
        <?php include ( S_ROOT . '/pages/products_grid/objects/ceramatek/products_ceramatek.php'); ?>
    </div>


    <div id="products_grid_quartztek_wrapper">
        <?php include ( S_ROOT . '/pages/products_grid/objects/quartztek/products_quartztek.php'); ?>
    </div>


    <div id="products_grid_global_fixtures_wrapper">
        <?php include ( S_ROOT . '/pages/products_grid/objects/global_fixtures/products_global_fixtures.php'); ?>
    </div>


    <div id="products_grid_global_link_wrapper">
        <?php include ( S_ROOT . '/pages/products_grid/objects/global_link/products_global_link.php'); ?>
    </div>

    <div id="products_grid_global_advanced_wrapper">
        <?php include ( S_ROOT . '/pages/products_grid/objects/global_advance/products_global_advance.php'); ?>
    </div>
</div>
