<?php

	function generateBanners($priority = 0, $masktype = 'lite') {
		$out = '<div id="carouselwrap">' . "\n";
		$out .= "\t" . '<div class="mask-' . $masktype . '"></div>' . "\n";
		$out .= "\t" . '<section id="carousel">' . "\n";
		$out .= "\t\t" . '<ul>' . "\n";


		$banners = array(
			'img/carousels/home/backgrounds/background-1.png',
			'img/carousels/home/backgrounds/background-2.png',
			'img/carousels/home/backgrounds/background-3.png',
			'img/carousels/home/backgrounds/background-4.png',
			'img/carousels/home/backgrounds/background-5.png',
			'img/carousels/home/backgrounds/background-6.png',
//			'img/carousels/home/backgrounds/background-7.jpg',
//			'img/carousels/home/backgrounds/background-8.jpg',
//			'img/carousels/home/backgrounds/background-9.jpg',
//			'img/carousels/home/backgrounds/background-10.jpg',
//			'img/carousels/home/backgrounds/background-11.jpg',
//			'img/carousels/home/backgrounds/background-12.jpg'
		);

        //  check for valid index
        if($priority >=  sizeof($banners)) $priority = 0;

        $out .= '<li><img src="/' . $banners[$priority] . '" alt="banner" /></li>' . "\n";

//        if (is_string($priority)) { # override the first slide with one that we choose
//            $priority = trim($priority);
//            $out .= '<li><img src="/' . $priority . '" alt="banner" /></li>' . "\n";
//        }


        shuffle($banners); # the real star of the show

		foreach ($banners as $banner) {
			if ($banner != $priority) $out .= '<li><img src="/'. $banner . '" alt="banner" /></li>' . "\n";
		}

		$out .= "\t\t" . '</ul>' . "\n";
		$out .= "\t" . '</section>' . "\n";
		$out .= '</div>' . "\n";		

		echo $out;
	}
	
	function retProductFamilies() {
		return '<section id="families">
			<h1 style="margin-bottom: -15px;"><img src="/img/h2-pdtfamilies.png" alt="heading_pdtfamilies" /></h1>
			<ol>
				<li>
					<h2>CeramaTek</h2>
					<small>Highest quality light coupled with the highest energy savings!</small>
				</li>
				<li>
					<h2>QuartzTek</h2>
					<small>Much like our CeramaTek line only built for high-wattage applications</small>
				</li>
				<li>
					<h2>QuartzTek EXT</h2>
					<small>Our QuartzTek line manufactured to last longer and save you more!</small>
				</li>
			</ol>
		</section>';
	}

	function generateRGRdataRows(array $watts, array $gradStopsLED = NULL, array $gradStopsIND = NULL, array $gradStopsMH, array $gradStopsHPS) {
		$count = count($watts);
		$out = '<table id="ch-watts">';

		if ($gradStopsLED != NULL) {
			$styleLED = '
				background: -moz-linear-gradient(left, #ff0000 ' . $gradStopsLED[0] . '%, #00ff00 ' . $gradStopsLED[1] . '%, #ff0000 ' . $gradStopsLED[2] . '%);
				background: -webkit-gradient(linear, left top, right top, color-stop(' . $gradStopsLED[0] . '%,#ff0000), color-stop(' . $gradStopsLED[1] . '%,#00ff00), color-stop(' . $gradStopsLED[2] . '%,#ff0000));
				background: -webkit-linear-gradient(left, #ff0000 ' . $gradStopsLED[0] . '%, #00ff00 ' . $gradStopsLED[1] . '%, #ff0000 ' . $gradStopsLED[2] . '%);
				background: -o-linear-gradient(left, #ff0000 ' . $gradStopsLED[0] . '%, #00ff00 ' . $gradStopsLED[1] . '%, #ff0000 ' . $gradStopsLED[2] . '%);
				background: -ms-linear-gradient(left, #ff0000 ' . $gradStopsLED[0] . '%, #00ff00 ' . $gradStopsLED[1] . '%, #ff0000 ' . $gradStopsLED[2] . '%);
				background: linear-gradient(to right, #ff0000 ' . $gradStopsLED[0] . '%, #00ff00 ' . $gradStopsLED[1] . '%, #ff0000 ' . $gradStopsLED[2] . '%);
			';
			$out .= '<tr>
						<td class="ch-y">LED</td>
						<td class="ch-bar" colspan="' . $count . '"><span style="' . $styleLED . '"></span></td>
					</tr>';
		}

		if ($gradStopsIND != NULL) {
			$styleIND = '
				background: -moz-linear-gradient(left, #ff0000 ' . $gradStopsIND[0] . '%, #00ff00 ' . $gradStopsIND[1] . '%, #ff0000 ' . $gradStopsIND[2] . '%);
				background: -webkit-gradient(linear, left top, right top, color-stop(' . $gradStopsIND[0] . '%,#ff0000), color-stop(' . $gradStopsIND[1] . '%,#00ff00), color-stop(' . $gradStopsIND[2] . '%,#ff0000));
				background: -webkit-linear-gradient(left, #ff0000 ' . $gradStopsIND[0] . '%, #00ff00 ' . $gradStopsIND[1] . '%, #ff0000 ' . $gradStopsIND[2] . '%);
				background: -o-linear-gradient(left, #ff0000 ' . $gradStopsIND[0] . '%, #00ff00 ' . $gradStopsIND[1] . '%, #ff0000 ' . $gradStopsIND[2] . '%);
				background: -ms-linear-gradient(left, #ff0000 ' . $gradStopsIND[0] . '%, #00ff00 ' . $gradStopsIND[1] . '%, #ff0000 ' . $gradStopsIND[2] . '%);
				background: linear-gradient(to right, #ff0000 ' . $gradStopsIND[0] . '%, #00ff00 ' . $gradStopsIND[1] . '%, #ff0000 ' . $gradStopsIND[2] . '%);
			';
			$out .= '<tr>
						<td class="ch-y">IND</td>
						<td class="ch-bar" colspan="' . $count . '"><span style="' . $styleIND . '"></span></td>
					</tr>';
		}

		$styleMH = '
			background: -moz-linear-gradient(left, #ff0000 ' . $gradStopsMH[0] . '%, #00ff00 ' . $gradStopsMH[1] . '%, #ff0000 ' . $gradStopsMH[2] . '%);
			background: -webkit-gradient(linear, left top, right top, color-stop(' . $gradStopsMH[0] . '%,#ff0000), color-stop(' . $gradStopsMH[1] . '%,#00ff00), color-stop(' . $gradStopsMH[2] . '%,#ff0000));
			background: -webkit-linear-gradient(left, #ff0000 ' . $gradStopsMH[0] . '%, #00ff00 ' . $gradStopsMH[1] . '%, #ff0000 ' . $gradStopsMH[2] . '%);
			background: -o-linear-gradient(left, #ff0000 ' . $gradStopsMH[0] . '%, #00ff00 ' . $gradStopsMH[1] . '%, #ff0000 ' . $gradStopsMH[2] . '%);
			background: -ms-linear-gradient(left, #ff0000 ' . $gradStopsMH[0] . '%, #00ff00 ' . $gradStopsMH[1] . '%, #ff0000 ' . $gradStopsMH[2] . '%);
			background: linear-gradient(to right, #ff0000 ' . $gradStopsMH[0] . '%, #00ff00 ' . $gradStopsMH[1] . '%, #ff0000 ' . $gradStopsMH[2] . '%);
		';

		$styleHPS = '
			background: -moz-linear-gradient(left, #ff0000 ' . $gradStopsHPS[0] . '%, #00ff00 ' . $gradStopsHPS[1] . '%, #ff0000 ' . $gradStopsHPS[2] . '%);
			background: -webkit-gradient(linear, left top, right top, color-stop(' . $gradStopsHPS[0] . '%,#ff0000), color-stop(' . $gradStopsHPS[1] . '%,#00ff00), color-stop(' . $gradStopsHPS[2] . '%,#ff0000));
			background: -webkit-linear-gradient(left, #ff0000 ' . $gradStopsHPS[0] . '%, #00ff00 ' . $gradStopsHPS[1] . '%, #ff0000 ' . $gradStopsHPS[2] . '%);
			background: -o-linear-gradient(left, #ff0000 ' . $gradStopsHPS[0] . '%, #00ff00 ' . $gradStopsHPS[1] . '%, #ff0000 ' . $gradStopsHPS[2] . '%);
			background: -ms-linear-gradient(left, #ff0000 ' . $gradStopsHPS[0] . '%, #00ff00 ' . $gradStopsHPS[1] . '%, #ff0000 ' . $gradStopsHPS[2] . '%);
			background: linear-gradient(to right, #ff0000 ' . $gradStopsHPS[0] . '%, #00ff00 ' . $gradStopsHPS[1] . '%, #ff0000 ' . $gradStopsHPS[2] . '%);
		';

		$out .= '<tr>
					<td class="ch-y">MH</td>
					<td class="ch-bar" colspan="' . $count . '"><span style="' . $styleMH . '"></span></td>
				</tr>
				<tr>
					<td class="ch-y">HPS</td>
					<td class="ch-bar" colspan="' . $count . '"><span style="' . $styleHPS . '"></span></td>
				</tr>
				<tr>
					<td class="ch-x">&nbsp;</td>';

		foreach ($watts as $value) {
			$out .= '<td class="ch-x">' . $value . 'W</td>';
		}

		$out .= '</tr>
			</table>';

		echo $out;
	}

	/*

	function lastMod($path) {
		if (!file_exists($path)) return false;

		$extension = end(explode(".", $path));
		$valid = array('js', 'css', 'png', 'jpg', 'webp', 'gif');

		if (is_file($path) && in_array($extension, $valid)) return filemtime($path);

	    $out = false;
	    
		foreach (glob($path . '/*') as $fn) {
			if (lastMod($fn) > $out) $out = lastMod($fn); // this will return a timestamp; will have to use date()
		}

	    return $out;    
	}

	function smartImg($src, $alt = '', $attr = '') {
		if (file_exists($src)) {
			$lmod = filemtime($src);
			echo '<img src="' . $src . '?lmod=' . $lmod . '" alt="' . $alt . '" ' . $attr . ' />';
		}
	}

	*/

	function br2nl($string) {
    	return preg_replace('/\<br(\s*)?\/?\>/i', "\n", $string);
	}

?>