<?php
ini_set("session.save_path", "/home/unn_w17004394/sessionData");
session_start();

require_once("functions.php");

if (isset($_SESSION['userID'])){
  $userID = $_SESSION['userID'];
}
else if (!isset($_SESSION['userID'])){
  header('Location: home.html');
}
?>

<!doctype html>
<html lang="en">
<head>
    <?php
    require_once("functions.php");
    buildPage();
    ?>
    <title>Edit Post Process</title>
</head>
<body>

    <?php

    $postID = filter_has_var(INPUT_POST, 'postID') ? $_POST['postID']: null;
    $postID = trim($postID);
    $post = filter_has_var(INPUT_POST, 'post') ? $_POST['post']: null;
    $post = trim($post);
    $geoLocation = filter_has_var(INPUT_POST, 'geoLocation') ? $_POST['geoLocation']: null;
    $geoLocation = trim($geoLocation);
    
    if(empty($post)){
        echo "Post is empty";
    header('Location: post.php');
    } else {
        require_once("functions.php");
        $dbConn = getConnection();
            
        $querySQL = "UPDATE neonPosts SET post='$post', geoLocation='$geoLocation' WHERE postID='$postID'";
        $stmt = $dbConn->query($querySQL);
        
        header('Location: post.php');
    }
    
    ?>

</body>
</html>