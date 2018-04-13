<?php 
  $method = $_SERVER['REQUEST_METHOD'];
  if ($method === 'POST') {
    var_dump($_POST);
  } else {
    echo 'METHOD: ' . $method;
  }
?>
