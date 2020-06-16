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
    <meta charset="UTF-8" />
    <link href="stylesheet.css" rel="stylesheet" type="text/css" />
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
    <title>Creation Process</title>
</head>
<body>

<?php

$friendID = filter_has_var(INPUT_GET, 'friendID') ? $_GET['friendID'] : null;
$friendID = trim($friendID);

if(empty($friendID)){
  echo"Error";
}
else{
    echo"";

    require_once("functions.php");
    $dbConn = getConnection();

    $querySQL = "SELECT linkID FROM neonLinks WHERE friendID='$friendID' AND userID='$userID'";
    $stmt = $dbConn->query($querySQL);
    $stmt -> execute(array(':friendID'=>$friendID));
    $user = $stmt->fetchObject();

    if($user){
        
        $linkID = $user->linkID;
        require_once("functions.php");
        $dbConn = getConnection();

        $querySQL = "SELECT links FROM neonUsers WHERE userID='$userID'";
        $stmt = $dbConn->query($querySQL);
        $stmt -> execute(array(':userID'=>$userID));
        $user = $stmt->fetchObject();
        
        if($user){

            $links = $user->links;
            $linksAfter = $links - 1;

            $querySQL1 = "DELETE FROM neonLinks WHERE linkID ='$linkID'";
            $stmt = $dbConn->query($querySQL1);
            $querySQL2 = "UPDATE neonUsers SET links='$linksAfter' WHERE userID='$userID' ";
            $stmt = $dbConn->query($querySQL2);

            header('Location: links.php');
        }

    }
}

?>

</body>
</html>