<html>
<head>
    <title>Sweet Creatures</title>
    <link rel="stylesheet" href="./css/bootstrap.min.css">
    <script src="./js/jquery-3.2.1.slim.min.js"></script>
    <script src="./js/popper.min.js"></script>
    <script src="./js/bootstrap.min.js"></script>
</head>
<style>
    html {
        font-size: 0.9rem;
    }

    #carousel {
        height: 20rem;
    }

    #carousel div {
        height: 20rem;
    }

    #carousel div img {
        width: auto;
        object-fit: cover;
    }

    .footer {
        position: relative;
        bottom: 0;
        width: 100%;
        height: 60px; /* Set the fixed height of the footer here */
        line-height: 60px; /* Vertically center the text there */
        background-color: #f5f5f5;
    }
</style>
<body>
<!-- Nav -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="index.php"><b>Sweet Creatures</b></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="index.php">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Collection</a>
            </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
</nav>
<!-- Carousel -->
<div id="carousel" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img class="d-block w-100" src="img/2_banner.jpg" alt="Second slide">
            <div class="carousel-caption d-flex flex-md-row align-items-end pb-0">
                <span>
                    <p class="h1 text-left" style="text-shadow: 2px 2px 2px #333333;">Koleksi Musim Panas</p>
                    <p class="lead" style="text-shadow: 2px 2px 2px #333333;">Koleksi musim panas untuk memulai musim panas yang menyenangkan</p>
                </span>
            </div>
        </div>
    </div>
</div>

<!-- Item -->
<div class="container mt-5 mb-5">
    <div class="row">
        <p class="lead">
            Featured Items
        </p>
    </div>
    <div class="row">
        <div class="card-deck">
            <div class="card" style="width: 18rem;">
                <a href="product.php?id=1" style="color:#333; text-decoration: none">
                    <img class="card-img-top" src="img/1_sm.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Red Stripe Shirt</h5>
                        <p class="card-text">Rp XXXXX</p>
                    </div>
                </a>
            </div>
            <div class="card" style="width: 18rem;">
                <a href="product.php?id=2" style="color:#333; text-decoration: none">
                    <img class="card-img-top" src="img/2_sm.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Flaminggo Summer Shirt</h5>
                        <p class="card-text">Rp XXXXX</p>
                    </div>
                </a>
            </div>
            <div class="card" style="width: 18rem;">
                <a href="product.php?id=3" style="color:#333; text-decoration: none">
                    <img class="card-img-top" src="img/3_sm.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">White Pajama Shirt</h5>
                        <p class="card-text">Rp XXXXX</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>
<footer class="footer">
    <div class="container">
        <span class="text-muted"></span>
    </div>
</footer>
</body>
</html>