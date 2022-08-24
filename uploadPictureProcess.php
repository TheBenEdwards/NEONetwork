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
    <title>Update Profile Picture Process</title>
</head>
<body>

<?php
$target_dir = "profilePicture/";
$file = $userID .basename($_FILES["fileToUpload"]["name"]);
$target_file = $target_dir . $file;
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
        header('Location: editProfile.php');
    }
}

if ($_FILES["fileToUpload"]["size"] > 5000000) {
    echo "Sorry, your file is too large. Try Something smaller than 5mb";
    $uploadOk = 0;
    header('Location: editProfile.php');
}

if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
    header('Location: editProfile.php');
}

if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
    header('Location: editProfile.php');
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";

        $dbConn = getConnection();

        $querySQL = "UPDATE neonUsers SET userProfilePic='$file' WHERE userID='$userID'";
        $stmt = $dbConn->query($querySQL);

        header('Location: editProfile.php');

    } else {
        echo "Sorry, there was an error uploading your file.";
        header('Location: editProfile.php');
    }
}
?>

</body>
</html>