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
  <title>Create a post</title>
</head>

<body>

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
  
  <div class="postManager">
    <h3>Create A Post</h3>
    <main>
        <div>
            <script>
            function goBack() {
              location.replace('feed.php');
            }
            </script>
            <form method="post" action="postProcess.php" class="createPost-container">
                
                <label for='post'><b>Your Post:</b></label>
                <br>
                <textarea rows='10' placeholder='What would you like to say?' name='post' cols='30'></textarea>
                <br>
                <input type='text' placeholder='Location' name='location' limit='280' autocomplete="off">
                <br>
                
                <button type="submit" class="btn" value="post">Post</button>
                <button type="button" class="btn cancel" onclick="goBack()">Close</button>
            </form>
        </div>
    </main>
    <hr>
    <h3>Or Edit a Post</h3>
    <main>
        <div>
        <?php
          $dbConn = getConnection();

          $preSQL = "SELECT email FROM neonUsers WHERE userID='$userID' ";
          $preResult = $dbConn->query($preSQL);
          $preObj = $preResult->fetchObject();
          $email = $preObj->email;
    
          $querySQL = "SELECT postID, email, post, dateCreated, comments FROM neonPosts WHERE email='$email' ORDER BY dateCreated DESC";
          $queryResult = $dbConn->query($querySQL);

          while($rowObj = $queryResult->fetchObject())
          {
            echo "<div class='posts'><p>{$rowObj->email}: <hr>{$rowObj->post} <hr>Posted At: {$rowObj->dateCreated} <a href='editPost.php?postID={$rowObj->postID}'>Edit Post</a></div>";
          }
        ?>
        </div>
    </main>
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
