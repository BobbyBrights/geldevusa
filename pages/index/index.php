<head>
    <title>GlobalV2</title>
    <meta charset="utf-8" />
    <link rel="stylesheet"  property="stylesheet" type="text/css"  href="/css/default.css">
    <link rel="stylesheet"  property="stylesheet" type="text/css"  href="/css/fonts.css">
    <link rel="stylesheet"  property="stylesheet" type="text/css"  href="/pages/index/css/index.css">

    <script src="/js/main.js"></script>
    <script src="/js/vendor/jquery-1.11.0.min.js"></script>
    <script src="/js/vendor/modernizr-2.8.3.min.js"></script>
    <script src="/pages/index/objects/background/js/background.js"> </script>

    <script src="/js/animations.js"></script>
    <script src="/js/navigation.js"></script>
    <script src="/js/page_handling.js"></script>
    <script src="/js/owl-carousel/owl.carousel.js"></script>
</head>

<body>


    <div id="index_header_wrapper"> <?php include ( S_ROOT . '/pages/index/objects/header/header.php'); ?> </div>

    <div id="index_products_banner_absolute_wrapper">
        <div id="index_products_banner_wrapper">  </div>
        <div id="index_outer_body_wrapper">
            <div id="index_persistent_menu_wrapper"></div>

            <div id="index_inner_body_wrapper"></div>
            <div id="index_body_wrapper"></div>
        </div>
    </div>

    <div id="index_background_wrapper">
        <div id="index_hidden_background_wrapper">
            <?php include ( S_ROOT . '/pages/index/objects/background/background.php'); ?>
        </div>
        <div id="index_footer_wrapper"> <?php include ( S_ROOT . '/pages/index/objects/footer/footer.php'); ?>  </div>
    </div>


</body>
