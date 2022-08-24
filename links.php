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
  <title>Your Links</title>
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
  
  <script>
        function openViewYourLinks() {
            document.getElementById("yourLinks").style.display = "block";
            document.getElementById("addLinks").style.display = "none";
        }
        function closeViewYourLinks() {
            document.getElementById("yourLinks").style.display = "none";
        }

        function openViewOtherLinks() {
            document.getElementById("otherLinks").style.display = "block";
            document.getElementById("addLinks").style.display = "none";
        }
        function closeViewOtherLinks() {
            document.getElementById("otherLinks").style.display = "none";
        }

        function openViewAddLinks() {
            document.getElementById("addLinks").style.display = "block";
            document.getElementById("yourLinks").style.display = "none";
            document.getElementById("otherLinks").style.display = "none";
        }
        function closeViewAddLinks() {
            document.getElementById("addLinks").style.display = "none";
        }

        function closeLinks() {
          window.location.replace("feed.php");
        }
  </script>
  <div class="linksContainer">
    <h3>Links</h3>
    <button class="Button" onclick="openViewYourLinks()">Links</button>
    <button class="Button" onclick="openViewOtherLinks()">Others</button>
    <button class="Button" onclick="openViewAddLinks()">Add</button>
    <button class="Button" onclick="closeLinks()">Close</button>
    <hr>
    <div class ="yourLinks" id="yourLinks">
      <h3>Your Links</h3>
      <?php
      require_once("functions.php");
      $dbConn = getConnection();
    
      $querySQL1 = "SELECT friendID, linkDate FROM neonLinks WHERE userID='$userID'";
      $stmt1 = $dbConn->prepare($querySQL1);
      $stmt1 -> execute(array(':userID'=>$userID));

      while($rowObj1 = $stmt1->fetchObject())
      {
        $friendID = $rowObj1->friendID;
        $linkDate = $rowObj1->linkDate;

        $dbConn = getConnection();
    
        $querySQL2 = "SELECT email FROM neonUsers WHERE userID='$friendID'";
        $stmt2 = $dbConn->prepare($querySQL2);
        $stmt2 -> execute(array(':userID'=>$friendID));

        while($rowObj2 = $stmt2->fetchObject())
        {
          if($friendID == $userID)
          {
            //Dont display current user
          }
          else
          {
            $email = $rowObj2->email;
            echo"
            <div class='link1'>
              <p>Link: <a href='viewProfile.php?friendID={$friendID}'>$email</a>, Linked on: $linkDate.</p>
              <table>
                <tr>
                  <th>
                    <a href='removeLinkProcess.php?friendID={$friendID}'>Remove Link</a>
                  </th>
                </tr>
              </table>
            </div>";
          }
        }
      }
      ?>
      <button class="Button" onclick="closeViewYourLinks()">Close Your Links</button>
    </div>
    <div class="otherLinks" id="otherLinks">
    <h3>Links who have added you</h3>
      <?php
      require_once("functions.php");
      $dbConn = getConnection();

      $querySQL1 = "SELECT userID, linkDate FROM neonLinks WHERE friendID='$userID'";
      $stmt1 = $dbConn->prepare($querySQL1);
      $stmt1 -> execute(array(':userID'=>$userID));

      while($rowObj1 = $stmt1->fetchObject())
      {
        
        $friendID = $rowObj1->userID;
        $linkDate = $rowObj1->linkDate;

        $dbConn = getConnection();
    
        $querySQL2 = "SELECT email FROM neonUsers WHERE userID='$friendID'";
        $stmt2 = $dbConn->prepare($querySQL2);
        $stmt2 -> execute(array(':userID'=>$friendID));


        while($rowObj2 = $stmt2->fetchObject())
        {
          if($friendID == $userID)
          {
            //Dont display current user
          }
          else
          {
            $email = $rowObj2->email;
            echo"<div class='link2'><p>Link: <a href='viewProfile.php?friendID={$friendID}'>$email</a>, Linked on: $linkDate.</p></div>";
          }
        }
      }
      ?>
      <button class="Button" onclick="closeViewOtherLinks()">Close Other Links</button>
    </div>
    <div class="addLinks" id="addLinks">
      <h3>Add A Link</h3>
        <?php

        $dbConn = getConnection();
        $querySQL = "SELECT userID, email, posts, links FROM neonUsers";
        $queryResult = $dbConn->query($querySQL);

        echo "
          <table>
            <tr>
              <th>Email</th>
              <th>Posts</th>
              <th>Links</th>
              <th> + </th>
            </tr>
        ";

        while($rowObj = $queryResult->fetchObject())
        {
          if($rowObj->userID == $userID)
          {
            //Current User is hidden
          }
          else
          {
            echo "
              <tr>
                <th><a href='viewProfile.php?friendID={$rowObj->userID}'>$rowObj->email</a></th>
                <th>$rowObj->posts</th>
                <th>$rowObj->links</th>
                <th><a href='addLinkProcess.php?friendID={$rowObj->userID}'>Add Link</a></th>
              </tr>
            ";
          }
        }                  
        echo"
          </table>
        ";
        ?>
        <button class="Button" onclick="closeViewAddLinks()">Close Add Links</button>
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