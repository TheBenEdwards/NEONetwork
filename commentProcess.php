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
    <title>Comment Process</title>
</head>
<body>
    <script>
    function goBack() {
        window.history.back();
    }
    </script>
    <?php

    $postID = filter_has_var(INPUT_POST, 'postID') ? $_POST['postID']: null;
    $postID = trim($postID);
    $comment = filter_has_var(INPUT_POST, 'comment') ? $_POST['comment']: null;
    $comment = trim($comment);
    $date = date('Y-m-d H:i:s');
    
    if(empty($postID) || empty($comment)){
        echo "comment or postID is empty";
        echo"<script>goBack()</script>";
    } else {
        
        require_once("functions.php");
        $dbConn = getConnection();
        
        $querySQL1 = "SELECT email, comments FROM neonUsers WHERE userID = $userID";
        $queryResult1 = $dbConn->prepare($querySQL1);
        $queryResult1 -> execute(array(':userID'=>$userID));
        $stmt1 = $queryResult1->fetchObject();

        if ($stmt1) {
            
            $email = $stmt1->email;
            $comments = $stmt1->comments;
            $comments = $comments + 1;
            
            require_once("functions.php");
            $dbConn = getConnection();
            
            $querySQL2 = "SELECT comments FROM neonPosts WHERE postID ='$postID'";
            $queryResult2 = $dbConn->query($querySQL2);
            $queryResult2 -> execute(array(':postID'=>$postID));
            $stmt2 = $queryResult2->fetchObject();

            if($stmt2) {
                $postComments = $stmt2->comments;
                $postComments = $postComments + 1;

                $querySQL3 = "INSERT INTO neonComments (postID, commentText, email, dateCommented) VALUES ('$postID', '$comment','$email','$date')";
                $stmt3 = $dbConn->query($querySQL3);
                $querySQL4 = "UPDATE neonUsers SET comments='$comments' WHERE userID='$userID' ";
                $stmt4 = $dbConn->query($querySQL4);
                $querySQL5 = "UPDATE neonPosts SET comments='$postComments' WHERE postID='$postID' ";
                $stmt5 = $dbConn->query($querySQL5);

                echo"<script>goBack()</script>";

            }

        } else {
            echo "user is not true, $querySQL";
            header('Location: post.php');
        }
    }
    
    ?>

</body>
</html>