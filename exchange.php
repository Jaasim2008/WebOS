<?php
//Send 0 for Success, 1 for notIsset
header("Referrer-Policy: \"no-referrer\";");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: OPTIONS, GET, POST");
header("Access-Control-Allow-Headers: Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control");
if(isset($_POST['ip']) && isset($_POST['date'])){
    $writetext = $_POST['ip'] + '@' + $_POST['date']
    $file = fopen('log.txt', 'a')
    fwrite($file, $writetext)
    fclose($file)
    echo 0;
}
?>