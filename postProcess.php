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
    <title>Post Process</title>
</head>
<body>

    <?php
    
    $post = filter_has_var(INPUT_POST, 'post') ? $_POST['post']: null;
    $post = trim($post);
    $location = filter_has_var(INPUT_POST, 'location') ? $_POST['location']: null;
    $location = trim($location);
    $date = date('Y-m-d H:i:s');
    
    if(empty($post)){
        echo "Post is empty";
    header('Location: post.php');
    } else {
        
        require_once("functions.php");
        $dbConn = getConnection();
        
        $querySQL = "SELECT email, posts FROM neonUsers WHERE userID = $userID";
        $stmt = $dbConn->prepare($querySQL);
        $stmt -> execute(array(':userID'=>$userID));
        $user = $stmt->fetchObject();

        if ($user) {
            
            $email = $user->email;
            $posts = $user->posts;
            $posts = $posts + 1;
            
            require_once("functions.php");
            $dbConn = getConnection();
            
            $querySQL1 = "INSERT INTO neonPosts (email, post, dateCreated, geoLocation) VALUES ('$email', '$post','$date','$location')";
            $stmt = $dbConn->query($querySQL1);
            $querySQL2 = "UPDATE neonUsers SET posts='$posts' WHERE userID='$userID' ";
            $stmt = $dbConn->query($querySQL2);

            header('Location: feed.php');

        } else {
            echo "user is not true, $querySQL";
            header('Location: post.php');
        }
    }
    
    ?>

</body>
</html>