<?php
ini_set("session.save_path", "/home/unn_w17004394/sessionData");
session_start();
require_once("functions.php");

$postID = $_SESSION['postID'];

$dbConn = getConnection();
$querySQL = ("SELECT geoLocation FROM neonPosts WHERE postID ='$postID'");
$queryResult = $dbConn->query($querySQL);
$results = $queryResult->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($results);
echo $json;
?>