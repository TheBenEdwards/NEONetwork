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
  <title>Edit Process</title>
</head>
<body>

<?php

$email = filter_has_var(INPUT_POST, 'email') ? $_POST['email']: null;
$email = trim($email);
$password = filter_has_var(INPUT_POST, 'password') ? $_POST['password']: null;
$password = trim($password);
$hashed_password = password_hash($password, PASSWORD_DEFAULT);
$userBio = filter_has_var(INPUT_POST, 'userBio') ? $_POST['userBio']: null;
$userBio = trim($userBio);

if(empty($password) or empty($email)){
  require_once("functions.php");
  $dbConn = getConnection();

  $querySQL = "UPDATE neonUsers SET userBio='$userBio' WHERE userID='$userID'";
  $stmt = $dbConn->query($querySQL);

  header('Location: editProfile.php');
}
else{
    require_once("functions.php");
    $dbConn = getConnection();

    $querySQL = "UPDATE neonUsers SET email='$email', passwordHash='$hashed_password', userBio='$userBio' WHERE userID='$userID'";
    $stmt = $dbConn->query($querySQL);

    unset($_SESSION['logged-in']);
    unset($_SESSION['userID']); 

    header('Location: home.html');
}

?>

</body>
</html>