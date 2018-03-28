<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="x-ua-compatible" content="ie=edge">

  <title>StreetScene | Spots</title>
  <link rel="shortcut icon" href=".ico">
  <link rel="stylesheet" href="css/style.css">

  <link rel="stylesheet" href="animate.cs">

</head>

<body style="overflow-x:hidden">
  <!--Page background-->
  <div class="reg-background"></div>

  <!--Side pannel-->
  <aside class="pannel mainPannel">
    <div class="inner">
      <header class="smaller">
        <div id="logoAnim-pannel" class="logoWrap">
          <div class="logo">
            <img src="img/icons/logo.png" alt="StreetScene">
          </div>
        </div>
        <button type="button" name="profile"></button>
      </header>
      <!--Navigation-->
      <div class="account">
        <!--<div class="details">
          <div class="usrName">John Doe</div>
          <button type="button" name="log-out">Log out</button>
        </div>-->
        <div class="register">
          <div class="signupWrap hide">
            <div class="head">
              <h2>sign up</h2>
            </div>
            <form class="signup" action="#" method="post">
              <input class="name" type="text" name="name" placeholder="Your Name" required>
              <input class="email" type="text" name="email" placeholder="Your Email" required>
              <input class="password" type="password" name="password" placeholder="Password" required>
              <input class="password" type="password" name="password" placeholder="Confirm Password" required>
              <button type="submit" name="submit">SIGN UP</button>
            </form>
            <button id="switch" type="button" name="logbtn">Already have an account?</button>
          </div>
          <div class="loginWrap">
            <div class="head">
              <h2>login</h2>
            </div>
            <form class="login" action="#" method="post">
              <input class="email" type="text" name="email" placeholder="Email" required>
              <input class="password" type="password" name="password" placeholder="Password" required>
              <button type="submit" name="submit">LOGIN</button>
            </form>
            <div id="breakerAnim" class="breaker">Or</div>
            <div class="socialTabs">
              <button class="facebookTab" type="button" name="button"><span class="facebookBtn"></span>Login with Facebook</button>
              <button class="googleTab" type="button" name="button"><span class="googleBtn"></span>Login with Google</button>
            </div>
            <button id="switch" type="button" name="regbtn">Register</button>
          </div>
        </div>-->
      </div>
      <nav>
        <ul>
          <li><a href="index.php">home<span><img src="img/icons/home.png" alt="home"></span></a></li>
          <li><a class="category">category<span><img src="img/icons/category.png" alt="category"></span></a></li>
          <!--Dropdown-->
          <ul class="categoryDropdown hide">
            <li><a href="spots.php#skateparks">skateboarder <span><img src="img/icons/skateboard.png" alt="skateboard"></span></a></li>
            <li><a href="spots.php#skateparks">bmx rider <span><img src="img/icons/bmx.png" alt="bmx"></span></a></li>
            <li><a href="spots.php#mtb">trail rider <span><img src="img/icons/trail-bike.png" alt="tail bike"></span></a></li>
          </ul>
          <li><a href="spots.php" class="spot">spots <span><img src="img/icons/pin.png" alt="locations"></span></a></li>
          <!--Dropdown-->
          <!--<ul class="spotDropdown hide">
            <li><a href="#">find spot <span><img src="img/icons/search.png" alt="find spot"></span></a></li>
            <li><a href="#">add spot <span><img src="img/icons/plus.png" alt="add spot"></span></a></li>
            <li><a href="#">favourites <span><img src="img/icons/star.png" alt="favourites"></span></a></li>
          </ul>-->
          <li><a href="#">about <span><img src="img/icons/info.png" alt="about"></span></a></li>
        </ul>
      </nav>
      <div class="social">
        <a class="facebookBtn smGlobalBtn" href="#"></a>
        <a class="twitterBtn smGlobalBtn" href="#"></a>
        <a class="pinterestBtn smGlobalBtn" href="#"></a>
      </div>
    </div>
  </aside>
  <!--Mobile Nav-->
  <nav class="mblNav pannel">
    <div class="container">
      <button type="button" name="burger"></button>
      <button type="button" name="profile"></button>
    </div>
    <!--Menu-->
    <ul class="dropdown">
      <li><a href="index.php">home<img src="img/icons/home.png" alt="home"></a></li>
      <li><a class="category">category<img src="img/icons/category.png" alt="category"></a></li>
        <!--Dropdown-->
        <ul class="categoryDropdown hide">
          <li><a href="spots.php#skateparks">skateboarder <span><img src="img/icons/skateboard.png" alt="skateboard"></span></a></li>
          <li><a href="spots.php#skateparks">bmx rider <span><img src="img/icons/bmx.png" alt="bmx"></span></a></li>
          <li><a href="spots.php#mtb">trail rider <span><img src="img/icons/trail-bike.png" alt="tail bike"></span></a></li>
        </ul>
      <li><a href="spots.php" class="spot">spots<img src="img/icons/pin.png" alt="locations"></a></li>
      <!--Dropdown-->
      <!-- <ul class="spotDropdown hide">
        <li><a href="#"><img src="img/icons/search.png" alt="find spot"></a></li>
        <li><a href="#"><img src="img/icons/plus.png" alt="add spot"></a></li>
        <li><a href="#"><img src="img/icons/star.png" alt="favourites"></a></li>
      </ul>-->
      <li><a href="#">about<img src="img/icons/info.png" alt="about"></a></li>
    </ul>
    <!--Account/login/register-->
    <div class="account">
      <!--<div class="details">
        <div class="usrName">John Doe</div>
        <button type="button" name="log-out">Log out</button>
      </div>-->
      <div class="register">
        <div class="signupWrap hide">
          <div class="head">
            <h2>sign up</h2>
          </div>
          <form class="signup" action="#" method="post">
            <input class="name" type="text" name="name" placeholder="Your Name" required>
            <input class="email" type="text" name="email" placeholder="Your Email" required>
            <input class="password" type="password" name="password" placeholder="Password" required>
            <input class="password" type="password" name="password" placeholder="Confirm Password" required>
            <button type="submit" name="submit">SIGN UP</button>
          </form>
          <button id="switch" type="button" name="logbtn">Already have an account?</button>
        </div>
        <div class="loginWrap">
          <div class="head">
            <h2>login</h2>
          </div>
          <form class="login" action="#" method="post">
            <input class="email" type="text" name="email" placeholder="Email" required>
            <input class="password" type="password" name="password" placeholder="Password" required>
            <button type="submit" name="submit">LOGIN</button>
          </form>
          <div id="breakerAnim" class="breaker">Or</div>
          <div class="socialTabs">
            <button class="facebookTab" type="button" name="button"><span class="facebookBtn"></span>Login with Facebook</button>
            <button class="googleTab" type="button" name="button"><span class="googleBtn"></span>Login with Google</button>
          </div>
          <button id="switch" type="button" name="regbtn">Register</button>
        </div>
      </div>
    </div>
  </nav>

  <!--Main content-->
  <div id="mainContent" class="mainContent fd-row">
    <!--Google Map-->
    <div id="map"></div>
    <!--Side Menu-->
    <aside id="spotMenu" class="spotMenu">
      <header>
        <div class="searchWrap">
          <form class="initialSearch" onsubmit="">
            <div class="searchBox">
              <input id="search" type="search" name="search" value="" placeholder="Not available yet" />
              <button id="search" type="submit" name="search"></button>
              <button id="geo" type="button" name="geo"></button>
            </div>
          </form>
          <div class="trvlmWrap">
            <div class="trvlMode">
              <input id="selected" class="driving" type="button" name="car" value="DRIVING">
            </div>
            <div class="trvlMode">
              <input class="transit" type="button" name="transit" value="TRANSIT">
            </div>
            <div class="trvlMode">
              <input class="bicycling" type="button" name="bike" value="BICYCLING">
            </div>
            <div class="trvlMode">
              <input class="walking" type="button" name="walk" value="WALKING">
            </div>
          </div>
        </div>
        <div class="placeType">
          <div class="categorySelect">
            <button type="button" name="skateparks" id="skatepark">Skateparks</button>
            <button type="button" name="mtbtrails" id="mtb">MTB Trails</button>
          </div>
        </div>
      </header>
      <div id="places">
        <!--Card locations are placed here-->
      </div>
    </aside>
    <!--Open and close btns-->
    <div id="open" class="menubtn openbtn" onclick="openNav()">
      <span class="tooltip">Expand side menu</span>
    </div>
    <div id="close" class="menubtn closebtn invisible" onclick="closeNav()">
      <span class="tooltip">Collapse side menu</span>
    </div>
  </div>

  <!--Scripts-->
  <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
  <script src="js/script.js"></script>
  <!--GoogleMaps-->
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC8DHt3YTwsj69q0RGe-YgQt5trWIky4gc&libraries=places&callback=initMap" async defer></script>

  <script>
  function openNav(){if($(window).width()>440){document.getElementById("spotMenu").style.display="initial";setTimeout(function(){document.getElementById("spotMenu").style.transform="translateX(0px)";document.getElementById("map").style.marginRight="350px";document.getElementById("open").style.marginRight="350px";document.getElementById("close").style.marginRight="350px"},005)}}
  function closeNav(){if($(window).width()>440){document.getElementById("spotMenu").style.transform="translateX(350px)";document.getElementById("map").style.marginRight="0";document.getElementById("open").style.marginRight="0";document.getElementById("close").style.marginRight="0";setTimeout(function(){document.getElementById("spotMenu").style.display="none"},400)}}
  </script>

</body>

</html>
