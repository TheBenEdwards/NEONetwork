<?php
$dbConn = new mysqli('localhost', 'unn_w17004394', 'PASSWORDHERE', 'unn_w17004394'); // make db connection

if ($dbConn->connect_error) {
    echo "<p>Connection failed: ".$dbConn->connect_error."</p>\n";
    exit;
}
?>