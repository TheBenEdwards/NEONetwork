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
    <title>Send Message Process</title>
</head>
<body>

    <script>
    function goBack() {
        window.history.back();
    }
    </script>

    <?php
    
    $friendID = filter_has_var(INPUT_POST, 'friendID') ? $_POST['friendID']: null;
    $friendID = trim($friendID);
    $message = filter_has_var(INPUT_POST, 'message') ? $_POST['message']: null;
    $message = trim($message);
    $new_message = filter_var($message, FILTER_SANITIZE_STRING);
    $date = date('Y-m-d H:i:s');
    
    if(empty($message)){
        echo "message is empty";
    } else {
        $dbConn = getConnection();
        $querySQL1 = "INSERT INTO neonMessages (sentByID, sentToID, messageText, sentDate) VALUES ('$userID', '$friendID','$new_message','$date')";
        $stmt = $dbConn->query($querySQL1);
        $querySQL2 = "UPDATE neonLinks SET lastMessageRecieved='$date' WHERE userID='$friendID' AND friendID='$userID'";
        $stmt2 = $dbConn->query($querySQL2);
        ?>
        <script>
        goBack();
        </script>
        <?php
    }
    
    ?>

</body>
</html>