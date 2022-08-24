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
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script type="text/javascript" src="mapAPI.js"></script>
    <title>Comments</title>
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
  
  <div class="postsContainer">
    <h3>Comment on this post</h3>
    <main>
        <div>
        <script>
        function goBack() {
          location.replace('feed.php');
        }
        </script>
        <?php
        $postID = filter_has_var(INPUT_GET, 'postID') ? $_GET['postID'] : null;
        $postID = trim($postID);
        $date = date('Y-m-d H:i:s');
        $_SESSION['postID'] = $postID;

        $querySQL = "SELECT email, post, dateCreated, geoLocation FROM neonPosts WHERE postID='$postID'";
        $queryResult = $dbConn->query($querySQL);
        
        while($rowObj = $queryResult->fetchObject())
        {
            echo "
            <div class='posts'>
              <p>{$rowObj->email}: <hr>{$rowObj->post} <hr>Posted At: {$rowObj->dateCreated}</p>
              ";
              if($rowObj->geoLocation !== '')
              {
                echo"
                <div id=\"map\"></div>
                <script async defer src=\"https://maps.googleapis.com/maps/api/js?key=APIKEYHERE&callback=initMap\"></script>
                ";
              }
              echo"
              </div>
            ";
        }

        echo"
        <div class='comment'>
          <form method='post' action='commentProcess.php' class='createComment-container'>
          <input type='hidden' value='$postID' READONLY name='postID'>
          <input type='text' placeholder='What would you like to comment?' name='comment' limit='100' autocomplete='off'>
          <button type='submit' class='btn' value='comment'>Comment</button>
          <button type='button' class='btn cancel' onclick='goBack()'>Close</button>   
          </form>
        </div>
        ";

        echo"<h3>Comments: </h3>";
        $querySQL = "SELECT commentText, email, dateCommented FROM neonComments WHERE postID = '$postID' ORDER BY dateCommented DESC";
        $queryResult = $dbConn->query($querySQL);

        if($queryResult === false)
          {
            echo "<p>Query failed: ".$dbConn->error."</p>\n</body>\n</html>";
          }
          else
          {
            while($rowObj = $queryResult->fetchObject())
            {
              echo "<div class='comments'><p>{$rowObj->email}: <hr>{$rowObj->commentText} <hr>Commented At: {$rowObj->dateCommented}</p></div>";
            }
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

</body>
</html>