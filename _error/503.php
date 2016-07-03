<?php 
$uri = $_SERVER['REQUEST_URI'];
if (substr($uri, 0, 16) === '/service/grades/') {
	exec('sudo /srv/legat.ml/scripts/restart_play.sh > /dev/null 2> /dev/null &');
	while(!(bool)fsockopen('127.0.0.1', 9000, $errno, $errstr, 1)) {
		sleep(1);
	}
	sleep(2);
	header("Refresh:0");
} else if (substr($uri, 0, 16) === '/service/todo/') {
	exec('sudo /srv/legat.ml/scripts/restart_meteor.sh > /dev/null 2> /dev/null &');
	while(!(bool)fsockopen('127.0.0.1', 3000, $errno, $errstr, 2)) {
		sleep(2);
	}
	sleep(20);
	header("Refresh:0");
} else {
	echo file_get_contents('503.html');
}
