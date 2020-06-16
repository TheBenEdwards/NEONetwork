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
    <title>Link Creation Process</title>
</head>
<body>

<?php
$friendID = filter_has_var(INPUT_GET, 'friendID') ? $_GET['friendID'] : null;
$friendID = trim($friendID);
$date = date('Y-m-d H:i:s');

if(empty($friendID)){
  echo"Error";
}
else
{
  $dbConn = getConnection();
  $querySQL = "SELECT friendID FROM neonLinks WHERE userID='$userID' AND friendID='$friendID'";
  $stmt = $dbConn->query($querySQL);
  
  if($rowObj = $stmt->fetchObject())
  {
    if($friendID == $rowObj->friendID)
    {
      header('Location: links.php');
    }
  }
  else
  {
    echo"Processing new Friend";
    $dbConn = getConnection();

    $querySQL = "SELECT links FROM neonUsers WHERE userID='$userID'";
    $stmt = $dbConn->query($querySQL);
    $stmt -> execute(array(':userID'=>$userID));
    $user = $stmt->fetchObject();

    if($user){
        
      $links = $user->links;
      $links = $links + 1;

      require_once("functions.php");
      $dbConn = getConnection();

      $querySQL1 = "INSERT INTO neonLinks (userID, friendID, linkDate, lastMessageRecieved) VALUES ('$userID', '$friendID','$date','$date')";
      $stmt = $dbConn->query($querySQL1);
      $querySQL2 = "UPDATE neonUsers SET links='$links' WHERE userID='$userID' ";
      $stmt = $dbConn->query($querySQL2);

      header('Location: links.php');
    }
  }
}

?>

</body>
</html>