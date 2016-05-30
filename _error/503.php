<?php 
$uri = $_SERVER['REQUEST_URI'];
if (substr($uri, 0, 16) === '/service/grades/') {
	exec('sudo /var/www/html/restart_play.sh > /dev/null 2>/dev/null &');
	sleep(10);
	header("Refresh:0");
}
