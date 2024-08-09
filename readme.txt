<!DOCTYPE html>
<html lang="en">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid ">
          <a class="navbar-brand" href="#">Portfolio</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
              <li class="nav-item menu">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item menu">
                <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item menu">
            <a class="nav-link" href="#">Skill</a>
           </li>
           <li class="nav-item menu">
            <a class="nav-link" href="#">Projects</a>
           </li>
           <li class="nav-item">
            <button type="button" class="btn btn-light">Hire me</button>
           </li>
          </div>
        </div>
      </nav>
    <div class="container-fluid banner box">
      <div class="row text">
        <div class="col-md-6 banner-text column-1">
          <h1 class="heading">Hi, I'm <span class="name">Lavish</span></h1>
            <h3>Web Developer</h3>
            <p>Fond of creating web application designs and bring them to life using code & develop mobile designs</p>
              <button type="button" class="btn btn-light">Hire me</button>
              </div>
        </div>
        <div class="row img-banner">
          <div class="col-md-6 banner-img column-2">
            <!-- <img src="3d_image-removebg-preview.png" alt="banner" width="356px" heigth="100%"> -->
            <img src="profile.png"  alt="banner">
          </div>
        </div>
      </div>

      <h1 class="Skill">Skills</h1>
        <div class="card-1  reveal">
          <p>"The web development landscape is constantly evolving, and I'm passionate about staying ahead of the curve.  I actively learn new technologies and frameworks to ensure my skills remain sharp and my projects innovative."</p>
        </div>


       <script>

        window.addEventListener('scroll', reveal);

        function reveal() {
          console.log("reveal function called");
          var reveal = document.querySelector(".reveal");

          if (reveal) {
            console.log("reveal element found");
            var windowHeight = window.innerHeight;
            var revealTop = reveal.getBoundingClientRect().top;
            var revealPoint = 100000000000;

            if (revealTop < windowHeight - revealPoint) {
              console.log("Element is within " + revealPoint + "px from the top of the viewport.");
              reveal.classList.add('active');
            } else {
              console.log("Element is not within " + revealPoint + "px from the top of the viewport.");
              reveal.classList.remove('active');
            }
          } else {
            console.log("reveal element not found");
          }
        }

       </script>
    </body>
</html>