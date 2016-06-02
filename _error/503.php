<?php 
$uri = $_SERVER['REQUEST_URI'];
if (substr($uri, 0, 16) === '/service/grades/') {
	exec('sudo /var/www/html/restart_play.sh > /dev/null 2>/dev/null &');
	while(!(bool)fsockopen('127.0.0.1', 9000, $errno, $errstr, 1)) {
		sleep(1);
	}
	sleep(2);
	header("Refresh:0");
} else {
	header("location:$uri.");
}
