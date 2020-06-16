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
  <title>Edit Your Profile</title>
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
  
  <div class="editProfileContainer">
    <h3>Your Profile</h3>
    <main>
        <div>
          <?php
          $dbConn = getConnection();
    
          $querySQL = "SELECT * FROM neonUsers WHERE userID = '$userID'";
          $queryResult = $dbConn->query($querySQL);

          $picSQL = "SELECT userProfilePic FROM neonUsers WHERE userID = '$userID'";
          $picResult = $dbConn->query($picSQL);
          $user = $picResult->fetchObject();
        
          if($queryResult === false)
          {
            echo "<p>Query failed: ".$dbConn->error."</p>\n</body>\n</html>";
          }
          else
          {
              echo "
              <div class='editProfileForm' id='editForm'>
              <div class='profilePicture'>
                <img class ='view' src = 'profilePicture/$user->userProfilePic'  style='width:100%'>
              </div>
              <div class='profilePictureSelector'>
                <form action='uploadPictureProcess.php' method='post' enctype='multipart/form-data'>
                <p>Update Profile Picture: <input type='file' name='fileToUpload' id='fileToUpload'><input type='submit' value='Save' name='submit'></p>
                </form>
              </div>
              <form method='post' action='editProfileProcess.php' class='edit-container'>
              <table>
              ";
              while($rowObj = $queryResult->fetchObject())
              {
                echo "

                <tr>
                    <input type='hidden' value='$userID' READONLY name='userID'>
                    <th>Email</th>
                    <th><input type='text' value='$rowObj->email' name='email'</th>
                </tr>
                <tr>
                    <th>Password</th>
                    <th><input type='password' placeholder='Change Password' name='password'></th>
                </tr>
              </table>
              <br>
              <table>
                <tr> 
                  <th>Bio</th>
                  <th><textarea rows='10' name='userBio' cols='30'>$rowObj->userBio</textarea></th>
              </table>
              <br>
              <table>
                <tr>
                    <th>Creation Date</th>
                    <th>$rowObj->dateCreated</th>
                </tr>
                <tr>
                    <th>Number of Posts</th>
                    <th>$rowObj->posts</th>
                </tr>
                    <th>Number of Links</th>
                    <th>$rowObj->links</th>
                </tr>

                ";
              }
            echo"
                </table>
                <script>
                function goBack() {
                  location.replace('feed.php');
                }
                </script>

                <button type='submit' class='btn' value='logon'>Save</button>
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
