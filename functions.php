<?php
function getConnection() {
    try {
        $connection = new PDO("mysql:host=localhost;dbname=unn_w17004394",
            "unn_w17004394", "PASSWORDHERE");
        $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $connection;
    } catch (Exception $e) {
        throw new Exception("Connection error ". $e->getMessage(), 0, $e);
    }
}

function buildPage() {
    echo "
    <meta charset='UTF-8' />
    <link href='stylesheet.css' rel='stylesheet' type='text/css' />
    <link rel='shortcut icon' type='image/x-icon' href='favicon.ico' />
    ";
}

?>