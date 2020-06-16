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
  <title>Your Messages</title>
</head>

<body>

  <script>
    function goBack() {
      location.replace('feed.php');
    }
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
  
  <div class="linksContainer">
    <h3>Your Contacts</h3>
    <button type='button' class='btn cancel' onclick='goBack()'>Close</button>
    <div>
      <?php
      $linkSQL = "SELECT friendID, linkDate, lastMessageRecieved FROM neonLinks WHERE userID='$userID' ORDER BY lastMessageRecieved DESC";
      $queryResult1 = $dbConn->prepare($linkSQL);
      $queryResult1 -> execute(array(':userID'=>$userID));

      $otherSQL = "SELECT userID, linkDate, lastMessageRecieved FROM neonLinks WHERE friendID='$userID' ORDER BY lastMessageRecieved DESC";
      $queryResult2 = $dbConn->prepare($otherSQL);
      $queryResult2 -> execute(array(':userID'=>$userID));

      while(($rowObj1 = $queryResult1->fetchObject()) && ($rowObj2 = $queryResult2->fetchObject()))
      {
        $mutual = $rowObj1->friendID;

        $querySQL = "SELECT email FROM neonUsers WHERE userID='$mutual'";
        $queryResult3 = $dbConn->prepare($querySQL);
        $queryResult3->execute(array(':userID'=>$mutual));
        $user = $queryResult3->fetchObject();

        $email = $user->email;

        if($mutual == $userID)
        {
          //Hides current User
        }
        else
        {
          echo"
          <div class='link2'>
            <p>Link: $email</p>
            <p>Last Message Recived: $rowObj1->lastMessageRecieved</p>
            <table>
                <tr>
                  <th>
                    <a href='messengerService.php?friendID={$mutual}'>Message</a>
                  </th>
                </tr>
              </table>
          </div>";
        }
      }
      ?>
    </div>
  </div>

  <div class="Hashtag">
    <h3>Twitter Data</h3>
    <div>
      <a class="twitter-timeline" data-width="220" data-theme="dark" href="https://twitter.com/foodpovertyNET?ref_src=twsrc%5Etfw">Tweets by foodpovertyNET</a> 
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
  </div>

</body>
</html>