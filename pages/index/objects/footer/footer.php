
<link href="/pages/index/objects/footer/css/footer.css" property="stylesheet" type="text/css" rel="stylesheet" />


<div id="footer_container">

    <?php include ( S_ROOT . "/pages/index/objects/footer/footer_clientele.php"); ?>

    <div id="footer_content">
        <div id="footer_dividers_container">
            <img src="/pages/index/objects/footer/img/content/dividers.png" id="footer_dividers" alt="footer_dividers"/>
            <a href="#"><img  src="/pages/index/objects/footer/img/content/arrow.png" id="footer_arrow"  alt="footer_arrow"/> </a>
        </div>

        <!-- Featured product -->
        <?php include ( S_ROOT . "/pages/index/objects/footer/footer_featured_product.php"); ?>
        <div id="footer_contact_info_container">
            <div id="footer_contact_info_left_text_container">
                <div id="footer_contact_info_left_text_upper_container">
                    <span style="position:absolute; top:0;"> CONTACT US </span>
                    <span style="position:absolute; bottom:15px; color:#707679; font-family:gel_tablet_gothic_light;"> Global Energy & Lighting </span>
                </div>

                <div id="footer_contact_info_left_text_lower_container">
                    <span id="footer_contact_info_left_text_lower">
                        <span style="color: white;">Executive Offices:               <br></span>
                        439 East Shore Drive             <br>
                        Eagle, Idaho 83616               <br><br>

                        <span style="color: white;">R&amp;D:                             <br></span>
                        560 S. Winchester Blvd Suite 500 <br>
                        San Jose, California 95128
                    </span>
                </div>

            </div>
            <div id="footer_contact_info_right_text_container">
                <span id="footer_contact_info_right_text">
                    <span style="color:white">Toll Free:      <br> </span>
                    <span>1.800.992.7370 <br><br> </span>

                    <span style="color:white">Fax: <br></span>
                    <span> 1.408.355.9578 <br><br> </span>

                    <a class="contact_us_text_class" style="font-size:12px;color:white;text-decoration: none;" href="#/home" onclick="scroll_to_top()">
                        www.gel-usa.com <br>
                    </a>
                    <span>contact@gel-usa.com  <br><br> </span>
                </span>
            </div>
        </div>
        <div id="footer_about_us_container">
            <div id="footer_about_us_top_container">
                <span id="footer_about_us_top_text">
                    ABOUT US
                </span>
                <a href="#/home" style="border: 0;;" onclick="scroll_to_top()">
                    <img src="/pages/index/objects/footer/img/logo/15GEL_03_04_WhiteLogo.png" id="footer_gel_logo" alt="footer_gel_logo">
                </a>
            </div>
            <div id="footer_about_us_text_container">
                <p id="footer_about_us_text">
                    Global Energy & Lighting manufactures and distributes high-performance, energy-efficient
                    solutions for commercial applications. Each of our products combines quality performance
                    with state-of-the-art technology, so as to address the need for adaptable, sustainable
                    solutions in a world driving relentlessly toward energy-efficiency.
                </p>
            </div>
        </div>
        <div id="footer_lower_text_container">
            <div id="lower_text_copyright_container">
                <span> COPYRIGHT &copy; 2015 - GLOBAL ENERGY & LIGHTING </span>
            </div>
            <div id="footer_lower_text_links_container">
                <div class="footer_lower_text_links">
                    <a  class="footer_lower_text_links" id="footer_lower_text_links_products" href="#/products" onclick="scroll_to_top()">PRODUCTS </a>
                    &nbsp;&nbsp;&nbsp;
                    <a  class="footer_lower_text_links" id="footer_lower_text_links_order" href="#/order" onclick="scroll_to_top()">ORDER </a>
                    &nbsp;&nbsp;&nbsp;
                    <a  class="footer_lower_text_links" id="footer_lower_text_links_cs" href="#/case_studies" onclick="scroll_to_top()">CASE STUDIES  </a>
                    &nbsp;&nbsp;&nbsp;
                    <a  class="footer_lower_text_links" id="footer_lower_text_links_resources"  href="#/resources" onclick="scroll_to_top()">RESOURCES </a>
                </div>

            </div>
            <div id="footer_lower_text_rttop_container">
                <a href="#" style="text-decoration: none; color: #707679;">
                    <span>RETURN TO TOP OF PAGE </span>
                </a>
            </div>
        </div>
    </div>
</div>


<script> $(function(){ script_aload("/pages/index/objects/footer/js/footer.js"); }) </script>
