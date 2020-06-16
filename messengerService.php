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
    <script src="http://code.jquery.com/jquery-latest.js"></script>
    <title>Your Feed</title>
</head>

<body>
    <script>
    $(document).ready(function(){
        setInterval(function(){
            $("#messagesContainer").load(window.location.href + " #messagesContainer" );
        }, 3000);
    });
    </script>

  <div class="NavBar">
    <ul>
      <li><a href="editProfile.php">Profile</a></li>
      <li><a href="post.php">Add to Feed</a></li>
      <li><a href="links.php">Links</a></li>
      <li><a href="messaging.php">Messages</a></li>
      <li><a href="logoutProcess.php">Log out</a></li>
    </ul>
  </div>

  <div class="Profile">
    <h3>Your Profile</h3>
    <main>
      <div>
          <?php
          $dbConn = getConnection();
            
          $querySQL = "SELECT email, dateCreated, userProfilePic, userBio, posts, links FROM neonUsers WHERE userID = '$userID'";
          $queryResult = $dbConn->query($querySQL);
        
          if($queryResult === false)
          {
            echo "<p>Query failed: ".$dbConn->error."</p>\n</body>\n</html>";
          }
          else
          {
            while($rowObj = $queryResult->fetchObject())
            {
              echo "
              <div class='profilePicture'><img class ='view' src = 'profilePicture/$rowObj->userProfilePic'  style='width:100%'></div>
              <div class='ProfileList'><p>User:<br>{$rowObj->email}</p></div>
              <div class='ProfileList'><p>Bio:<br>{$rowObj->userBio}</p></div>
              <div class='ProfileList'><p>Member Since:<br>{$rowObj->dateCreated}</p></div>
              <div class='ProfileList'><p>Posts:<br>{$rowObj->posts}</p></div>
              <div class='ProfileList'><p>Links:<br>{$rowObj->links}</p></div>
              ";
            }
          }
          ?>
        </div>
    </main>
  </div>
  
  <div class="postsContainer" id="postsContainer">
      <?php
      $friendID = filter_has_var(INPUT_GET, 'friendID') ? $_GET['friendID'] : null;
      $friendID = trim($friendID);

      $dbConn = getConnection();
      $querySQL = "SELECT email FROM neonUsers WHERE userID='$friendID'";
      $queryResult = $dbConn->query($querySQL);
      $queryResult->execute(array(':userID'=>$friendID));
      $user = $queryResult->fetchObject();
      ?>
    <main>
        <div class="contactContainer">
          <?php
          if($user)
          {
              $contact = $user->email;

              echo"
              <h3>Messages With:</h3>
              <h3>$contact</h3>
              ";
          }
          ?>
        </div>
        <div class="messagesContainer">
            <div id="messagesContainer">
            <?php
            $messageSQL = "SELECT messageID, sentByID, sentToID, messageText, sentDate FROM neonMessages WHERE sentByID='$userID' AND sentToID='$friendID' OR sentByID='$friendID' AND sentToID='$userID' ORDER BY sentDate DESC";
            $stmt = $dbConn->query($messageSQL);
            while($rowObj = $stmt->fetchObject())
            {
                if($rowObj->sentByID == $userID) //Message Sent By User
                {
                    echo"
                    <div class='messageFromUser'>
                        <p>$rowObj->messageText</p>
                        <p1>$rowObj->sentDate<p1>
                    </div>
                    ";
                }
                else if ($rowObj->sentByID == $friendID)//Message Sent By Friend
                {
                    echo"
                    <div class='messageFromFriend'>
                        <p>$rowObj->messageText</p>
                        <p1>$rowObj->sentDate<p1>
                    </div>
                    ";
                }
            }
            echo"
            <div class='introMessage'>
                <p>This is the start of your converstion</p>
            </div>
            ";
            ?>
            </div>
        </div>
        <div class="sendMessageContainer">
            <?php
            echo"
            <form method='post' action='sendMessageProcess.php'>
                <input type='hidden' value=$friendID name='friendID'>
                <input autocomplete='off' type='text' placeholder='Send Message' name='message'>
                <button type='submit' class='btn' value='comment'>Send</button>
            </form>
            ";
            ?>
        </div>
    </main>
  </div>

  <div class="FriendProfile">
    <h3>Contact Details</h3>
      <div>
          <?php
          
          $friendID = filter_has_var(INPUT_GET, 'friendID') ? $_GET['friendID'] : null;
          $friendID = trim($friendID);

          $dbConn = getConnection();
            
          $querySQL = "SELECT email, dateCreated, userProfilePic, userBio, posts, links FROM neonUsers WHERE userID = '$friendID'";
          $queryResult = $dbConn->query($querySQL);
        
          if($queryResult === false)
          {
            echo "<p>Query failed: ".$dbConn->error."</p>\n</body>\n</html>";
          }
          else
          {
            while($rowObj = $queryResult->fetchObject())
            {
              echo "
              <div class='profilePicture'><img class ='view' src = 'profilePicture/$rowObj->userProfilePic'  style='width:100%'></div>
              <div class='ProfileList'><p>User:<br>{$rowObj->email}</p></div>
              <div class='ProfileList'><p>Bio:<br>{$rowObj->userBio}</p></div>
              <div class='ProfileList'><p>Member Since:<br>{$rowObj->dateCreated}</p></div>
              <div class='ProfileList'><p>Posts:<br>{$rowObj->posts}</p></div>
              <div class='ProfileList'><p>Links:<br>{$rowObj->links}</p></div>
              ";
            }
          }
          ?>
        </div>
  </div>

</body>
</html>
