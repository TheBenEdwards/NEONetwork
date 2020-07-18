<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <link href="WebProject.css" rel="stylesheet" type="text/css" />
    <link rel='shortcut icon' type='image/x-icon' href='favicon.ico' />
    <title>premier choice holidays Holidays Page</title>
</head>

<body>

<header>
    <img src="premier%20choice%20holidays%20logo.png" alt="Premier Choice Holidays logo" id="logo"/>
    <h1>Premier Choice Holidays
        <label>
            <input type="text" size="20" required/>
        </label>
        <label>
            <input type="submit" value="search our website" />
        </label>
    </h1>
</header>

<div id="wrapper">

    <main>
        <div id="holidays">
            <?php
            $HolidayTitle = isset($_REQUEST['HolidayTitle']) ? $_REQUEST['HolidayTitle'] : null;
            $Description = isset($_REQUEST['Description']) ? $_REQUEST['Description'] : null;
            $Duration = isset($_REQUEST['Duration']) ? $_REQUEST['Duration'] : null;
            $Price = isset($_REQUEST['Price']) ? $_REQUEST['Price'] : null;
            $catDesc = isset($_REQUEST['catDesc']) ? $_REQUEST['catDesc'] : null;
            $locationName = isset($_REQUEST['locationName']) ? $_REQUEST['locationName'] : null; //All these receive the data entered in Holidays.php and allow them to be entered into the db

            $errors = false;
            ?>
            <h1>Your Holiday</h1>

            <?php   //this is simply error testing and outputting the choices at the same time.
            if(!empty($HolidayTitle) || !empty($Description) || !empty($Duration)) {
                echo "<h2>Your Holiday</h2>\n";
            }

            if (!empty($HolidayTitle)) {
                echo "<p>Holiday Title: $HolidayTitle</p>\n";
            }
            if (!empty($Description)) {
                echo "<p>Description: $Description</p>\n";
            }
            if (!empty($Duration)) {
                echo "<P>Duration: $Duration</p>\n";
            }
            ?>

            <h2>Holiday Location</h2>
            <?php   //again, the same here
            if (!empty($locationName)) {
                echo "<p>$locationName</p>\n";
            }
            else {
                echo "<p>You have not selected location. Please try again.</p>\n";
                $errors = true;
            }
            ?>
            <h2>Category</h2>
            <?php   //here as well, except this is where the data gets entered into the tables
            if (!empty($catDesc)) {
                echo "<p>Category Selected: $catDesc</p>\n";
            }
            else {
                echo "<p>You have not chosen a Category. Please try again.</p>\n";
                $errors = true;
            }
            if ($errors == false) {
                include 'database_conn.php';		         // make db connection

                $HolidayTitle = $dbConn->real_escape_string($HolidayTitle);
                $Description = $dbConn->real_escape_string($Description);
                $Duration = $dbConn->real_escape_string($Duration);
                $Price = $dbConn->real_escape_string($Price);
                $catDesc = $dbConn->real_escape_string($catDesc);
                $locationName = $dbConn->real_escape_string($locationName); //This allows for all the entries to be entered into the database

                $sql = "INSERT INTO PCH_holidays (holidayTitle, holidayDescription, holidayDuration, holidayPrice) values('$HolidayTitle', '$Description', '$Duration','$Price')"; //this query actually enters the values of the title etc int the database on phpmyadmin
                $result = $dbConn->query($sql);

                if($result === false) {
                    echo "<p>Problem when saving: ".$dbConn->error.". Try again</p>\n</body>\n</html>";
                    exit;
                }
                else {
                    echo "<p>New Holiday Created</p>\n";
                }
                $dbConn->close(); //Closes the db connection
            }
            ?>
        </div>
    </main>

    <nav>
        <nav>
            <ul>
                <li><a href="webproject.html">Home</a></li>
                <li><a href="webproject.html">News</a></li>
                <li><a href="Holidays.php">Holidays</a></li>
                <li><a href="webproject.html">Q and A</a></li>
                <li><a href="webproject.html">About Us</a></li>
                <li><a href="webproject.html">Contact Us</a></li>
                <li><a href="admin.php">Admin</a></li>
                <li><a href="Wireframe.pdf">Wireframe</a></li>
                <li><a href="Credits.php">Credits</a></li>
            </ul>
        </nav>
    </nav>

    <aside>
        <h2>Latest News</h2>
        <section>
            <h3>Account</h3>
            <p><a href="#">Sign up</a> to book holidays, recieve special offers and more</p>
            <p>Or <a href="#">Sign in</a> if you already have an account</p>
        </section>
        <section>
            <h3>News</h3>
            <ul>
                <li><a href="#">Premier Choice Holidays</a> are adding new Holiday functions! Click here for more Information</li>
                <li><a href="#">We responded to YOU!</a> We were having a live Q and A on our website to answer questions that our customers had asked us. To watch a recording of this, follow the link!</li>
                <li>Got a Question? <a href="#">Send it to us!</a> We are always keen to answer any questions you have for us!</li>
            </ul>
            <p>To find out more follow us on <a href = "#">Twitter</a> or join us on <a href="#">Facebook</a></p>
        </section>
    </aside>

</div>

<footer>
    <p>Premier Choice Holidays ©</p>
</footer>

</body>
</html>
