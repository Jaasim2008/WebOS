<?php
header("Access-Control-Allow-Origin: *");
if(isset($_GET['version'])) {
    $myfile = fopen("version.txt", "r") or die("Unable to open file!");
    echo fread($myfile,filesize("version.txt"));
    fclose($myfile);
}
?>