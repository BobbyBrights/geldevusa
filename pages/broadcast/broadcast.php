<?php

if(!function_exists ('generateBanners'))
{
    define('S_ROOT', $_SERVER['DOCUMENT_ROOT']);
    define('C_ROOT', '/');
    require S_ROOT . '/php/functions.php';
}
generateBanners(2); // San Francisco, USA priority

    $uri = $_SERVER["REQUEST_URI"];
    $resource = explode('?', $uri);
    $client_get = "";
    if(count($resource) > 0)
        $client_get  = $resource[count($resource)-1];
	//$client_get = trim(preg_replace('/[^0-9a-z-]/i', '', strtolower($_GET['client']))); # client's name appears after /broadcast/
    //echo "<div>Client found: ".$client_get."</div>";
	if (!empty($client_get))
    { # if a client is specified in the address bar...
		$fh = @fopen(S_ROOT . '/broadcast-whitelist.txt', 'r'); # read client name and stream path from text file...

		if ($fh) { # whitelist successfully opened and read from
			while (!feof($fh)) {
				$line = trim(fgets($fh));

				if (!empty($line) && $line[0] != '#') { # line isn't blank or a comment...
					$argument = explode(',', $line);
					$client_whitelist = str_replace(array(' ', '_'), '-', strtolower(trim($argument[0])));
					$source = trim($argument[1]);

					if (!empty($client_whitelist) && !empty($source) && $client_get === $client_whitelist) { # client name found in the whitelist!
						echo '<div id="streams-src" style="display: none;">', $source, '</div>';

?>
    <div id="broadcast_main">
        <section id="featured" class="clearfix" style="text-align: center;">

            <div id="jp_container_1" class="jp-video">
                <div class="jp-type-single">
                    <div id="gel-broadcast" class="jp-jplayer"></div>
                    <div class="jp-gui">
                        <div class="jp-video-play">
                            <a href="javascript:;" class="jp-video-play-icon no-ajaxy" tabindex="1">play</a>
                        </div>
                        <div class="jp-interface">
                            <div class="jp-progress">
                                <div class="jp-seek-bar">
                                    <div class="jp-play-bar"></div>
                                </div>
                            </div>
                            <div class="jp-current-time"></div>
                            <div class="jp-duration"></div>
                            <div class="jp-controls-holder">
                                <ul class="jp-controls">
                                    <li><a href="javascript:;" class="jp-play no-ajaxy" tabindex="1">play</a></li>
                                    <li><a href="javascript:;" class="jp-pause no-ajaxy" tabindex="1">pause</a></li>
                                    <li><a href="javascript:;" class="jp-stop no-ajaxy" tabindex="1">stop</a></li>
                                    <li><a href="javascript:;" class="jp-mute no-ajaxy" tabindex="1" title="mute">mute</a></li>
                                    <li><a href="javascript:;" class="jp-unmute no-ajaxy" tabindex="1" title="unmute">unmute</a></li>
                                    <li><a href="javascript:;" class="jp-volume-max no-ajaxy" tabindex="1" title="max volume">max volume</a></li>
                                </ul>
                                <div class="jp-volume-bar">
                                    <div class="jp-volume-bar-value"></div>
                                </div>
                                <ul class="jp-toggles">
                                    <li><a href="javascript:;" class="jp-full-screen no-ajaxy" tabindex="1" title="full screen">full screen</a></li>
                                    <li><a href="javascript:;" class="jp-restore-screen no-ajaxy" tabindex="1" title="restore screen">restore screen</a></li>
                                    <li><a href="javascript:;" class="jp-repeat no-ajaxy" tabindex="1" title="repeat">repeat</a></li>
                                    <li><a href="javascript:;" class="jp-repeat-off no-ajaxy" tabindex="1" title="repeat off">repeat off</a></li>
                                </ul>
                            </div>
                            <div class="jp-title">
                                <ul>
                                    <li>Global Energy &amp; Lighting Live Broadcast</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="jp-no-solution">
                        <span>Update Required</span>
                        To play the media you will need to either update your browser to a recent version or update your <a href="http://get.adobe.com/flashplayer/">Flash plugin</a>.
                    </div>
                </div>
            </div>

        </section>
    </div>
<?php

						break; # break out of the loop prematurely if we already have a match; no point in continuing the search!
					}
				}
			}

			if (feof($fh))
            {
                echo "Failed to find client";
                return;
                # client name didn't match any of the entries in the whitelist
				fclose($fh);
				ob_clean(); # discard any leading output
				header($_SERVER['SERVER_PROTOCOL'] . ' 403 Forbidden', true, 403);
				include $_SERVER['DOCUMENT_ROOT'] . '/403.html';
				die();
			}
		}
        else
        {
			echo 'ERROR: Could not successfully open or read from broadcast whitelist!';
		}
	} else
    {
		# echo 'Default broadcast landing page!';
		header('location: ' . C_ROOT); # temp. redirect back to root
	}

?>
