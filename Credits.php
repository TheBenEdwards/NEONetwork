<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <link href="WebProject.css" rel="stylesheet" type="text/css" />
    <link rel='shortcut icon' type='image/x-icon' href='favicon.ico' />
    <title>premier choice holidays Credits Page</title>
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
        <div>
            <h2>Credits</h2>
            <p>Benjamin Edwards <br/>
                W17004394 <br/>
                ben.edwards@northumbria.ac.uk <br/>
                <a href="https://www.freelogodesign.org/index.html"> Source of Logo </a><br/>
                <a href="https://www.royalcaribbean.com/content/dam/royal/content/fleet-landing/grandeur-exterior-side-port-day-ship.jpg/jcr:content/renditions/316x250.jpg"> Cruise Image </a><br/>
                <a href="https://jambo-hqtneasuix7qyraoh6n.netdna-ssl.com/wp-content/uploads/private-classic-safari.jpg"> Safari Image </a><br/>
                <a href="https://www.eurail.com/sites/eurail.com/files/styles/asset_image_responsive_common_big_image/public/tgv_high-speed_train_france.jpg?itok=320JRKNt"> Train Image </a><br/>
                Just before the Security considerations, I found this incredibly fun to do as i had never played around with databases and my own website, so it was really hard at first.
                I really struggled with getting the data into the Database at first, which was by far the hardest part, but overcame it thanks to the help of the amazing lecturers and seminar tutors.
                Thanks guys!
            </p>

            <h2>Security considerations</h2>
            <p>One of the biggest security concern is that the admin page and so access to the database is completely free to access.
                The Website should also be kept as up-to-date as possible, to avoid hackers from taking advantage from the code being in an older language or the browser no longer supports the language.
                Therefore Regular maintenance should be normal for a website like this.
                SQL injections will need to looked out for, as the database could quickly become full of useless and malicious code. To avoid this, all that is needed is that only parametrised queries are expected.
                <br/>
                <br/>
                Error messages should also have their text reduced, so that hackers cant find weaknesses in the website by deliberately causing errors, allowing them access to confidential information.
                Also, HTTPS should be considered, as it guarantees to useres that they are talking to the server they expect, and that no other user or hacker can change/see the information they are transmitting.
                That part of the site with the wireframe would need a user to sign in in order to view them.</p>
            <a href="https://www.creativebloq.com/web-design/website-security-tips-protect-your-site-7122853"> Source </a><br/>
            <a href="https://www.tutorialspoint.com/internet_technologies/website_security.htm"> Source </a><br/>
            <a href="https://blog.sitelock.com/2014/06/new-website-security/"> Source </a><br/>
        </div>
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