<?php
ini_set("session.save_path", "/home/unn_w17004394/sessionData");
session_start();
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Login Process</title>
</head>
<body>

<?php

$email = filter_has_var(INPUT_POST, 'email') ? $_POST['email']: null;
$email = trim($email);
$password = filter_has_var(INPUT_POST, 'password') ? $_POST['password']: null;
$password = trim($password);

if(empty($email) || empty($password)){
  echo"email or password is empty";
}
else {
  require_once("functions.php");
  $dbConn = getConnection();

  $querySQL = "SELECT * FROM neonUsers WHERE email = '$email'";
  $stmt = $dbConn->prepare($querySQL);
  $stmt->execute(array(':email'=>$email));
  $user = $stmt->fetchObject();

  if($user)
  {
    $passwordHash = $user->passwordHash;
    if(password_verify($password, $passwordHash))
    //if($password == $passwordHash)
    {
      $userID = $user->userID;

      $_SESSION['logged-in']=true;
      $_SESSION['userID']=$userID;

      header('Location: feed.php');
    }
    else
    {
      header('Location: home.html');
    }
  }
  else
  {
    header('Location: home.html');
  }
}

?>

</body>
</html>