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

$email = filter_has_var(INPUT_POST, 'email') ? $_POST['email']: null;
$email = trim($email);
$password = filter_has_var(INPUT_POST, 'password') ? $_POST['password']: null;
$password = trim($password);
$passwordrepeat = filter_has_var(INPUT_POST, 'passwordRepeat') ? $_POST['passwordRepeat']: null;
$passwordrepeat = trim($passwordrepeat);
$hashed_password = password_hash($password, PASSWORD_DEFAULT);
$date = date('Y-m-d H:i:s');

if($password!==$passwordrepeat){
  echo"<script type='text/javascript'>alert('Passwords not the same)</script>";
  sleep(3);
  header('Location: home.html');
}
else{
    
    require_once("functions.php");
    $dbConn = getConnection();

    $querySQL = "INSERT INTO neonUsers (email, passwordHash, userProfilePic, dateCreated, posts, links) VALUES ('$email', '$hashed_password', 'default_profile.jpg','$date', '0', '0')";
    $stmt = $dbConn->query($querySQL);
    if($stmt)
    {
        $querySQL1 = "SELECT userID FROM neonUsers WHERE email='$email'";
        $stmt1 = $dbConn->query($querySQL1);

        while($rowObj = $stmt1->fetchObject())
        {
            $userID = $rowObj->userID;

            $querySQL2 = "INSERT INTO neonLinks (userID, friendID, linkDate) VALUES ('$userID', '$userID','$date')";
            $stmt2 = $dbConn->query($querySQL2);

            header('Location: home.html');
        }
    }
}

?>

</body>
</html>