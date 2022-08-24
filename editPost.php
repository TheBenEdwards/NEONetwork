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
  <title>Edit Post</title>
</head>

<body>
    <?php
    $postID = filter_has_var(INPUT_GET, 'postID') ? $_GET['postID'] : null;
    $postID = trim($postID);
    
    ?>

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
  function goBack() {
    location.replace('post.php');
  }
  </script>
  <div class="editPostContainer">
    <h3>Edit Post <?php echo"$postID"; ?></h3>
    <main>
        <div>
            <?php
            $dbConn = getConnection();

            $querySQL = "SELECT postID, email, post, dateCreated, geoLocation FROM neonPosts WHERE postID='$postID'";
            $queryResult = $dbConn->query($querySQL);

            while($rowObj = $queryResult->fetchObject())
            {
                $postID = $rowObj->postID;
                $email = $rowObj->email;
                $post = $rowObj->post;
                $dateCreated = $rowObj->dateCreated;
                $geoLocation = $rowObj->geoLocation;

                echo"
                <div class='posts'>
                    <form method='post' action='editPostProcess.php'>
                    <input type='text' HIDDEN value='$postID' name='postID' limit='280'>
                    <p>$email:</p>
                    <hr>
                    <p><textarea rows='10' name='post' cols='30'>$post</textarea></p>
                    <hr>
                    <p><input type='text' value= '$geoLocation' name='geoLocation'><p>
                    <hr>
                    <p>Posted At:</p>
                    <p>$dateCreated</p>
                    <hr>
                    <button type='submit' class='btn' value='post'>Save</button>
                    <button type='button' class='btn cancel' onclick='goBack()'>Close</button>
                    </form>
                </div>
                ";
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