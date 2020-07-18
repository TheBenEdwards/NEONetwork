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
            <div>
                <h1>Add a new holiday</h1>
                <form id="New Holiday" action="newHoliday.php" method="get">
                    <p>Please Enter the Title, the description, the duration and the price of the holiday</p>
                    <fieldset>
                        <label>
                            Holiday Title: <input type="text" name="HolidayTitle" required/><br/>
                            Description: <input type="text" name="Description" required/><br/>
                            Duration:<input type="text" name="Duration" required/><br/>
                            Price: <input type="text" name="Price" required/><br/>

                            Select A category:
                            <select name="catDesc" required>
                                <option value="Golf">Golf</option>
                                <option value="Luxury">Luxury</option>
                                <option value="Opera">Opera</option>
                                <option value="Safari">Safari</option>
                                <option value="Tour">Tour</option>
                                <option value="Walking">Walking</option>
                                <option value="Weddings">Weddings</option>
                            </select>

                            Select A Location:
                            <select name="locationName" required>
                                <option value="Algarve">Algarve</option>
                                <option value="Boston">Boston</option>
                                <option value="Milaidhoo Island">Milaidhoo Island</option>
                                <option value="Nairobi">Nairobi</option>
                                <option value="New York">New York</option>
                                <option value="Rangali Island">Rangali Island</option>
                                <option value="an Francsico">San Francsico</option>
                                <option value="Sorrento">Sorrento</option>
                                <option value="Verona">Verona</option>
                                <option value="Zanzibar">Zanzibar</option>
                            </select>
                        </label>
                    </fieldset>
            </div>
        </div>
        <div><input type="submit" value="Create Holiday" /></div>
        </form>
        </main>


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
