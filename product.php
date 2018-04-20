<html>
<head>
    <title>Virtual Dressing Room</title>
    <link rel="stylesheet" href="./css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/fontawesome-all.min.css">
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

    .row {
        margin-right: 10rem;
        margin-left: 10rem;
    }

    .footer {
        position: relative;
        bottom: 0;
        width: 100%;
        height: 60px; /* Set the fixed height of the footer here */
        line-height: 60px; /* Vertically center the text there */
        background-color: #f5f5f5;
    }

    .square {
        border-radius: 0;
    }
</style>
<body>
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

<div class="container-fluid mt-5 mb-5">

    <div class="row">
        <div class="col-1"></div>
        <div class="col-4">
            <div class="card">
                <img class="card-img" src="img/<?= $_GET["id"] ?>.jpg">
            </div>
        </div>
        <div class="col-3">
            <p class="h5">
                <?php
                    if ($_GET["id"] == 1) {
                        echo 'Red Stripe Shirt';
                    } else if ($_GET["id"] == 2) {
                        echo 'Flaminggo Summer Shirt';
                    } else if ($_GET["id"] == 3) {
                        echo 'Red Stripe Shirt';
                    }
                ?>
            </p>
            <p class="mt-2 h2 font-weight-bold">
                <?php
                    if ($_GET["id"] == 1) {
                        echo 'Rp 199.000';
                    } else if ($_GET["id"] == 2) {
                        echo 'Rp 179.000';
                    } else if ($_GET["id"] == 3) {
                        echo 'Rp 210.000';
                    }
                ?>
            </p>
            <p class="mt-4 font-weight-light">
                <?php
                    if ($_GET["id"] == 1) {
                        echo 'deskripsi';
                    } else if ($_GET["id"] == 2) {
                        echo 'deskripsi';
                    } else if ($_GET["id"] == 3) {
                        echo 'deskripsi';
                    }
                ?>
            </p>
        </div>
        <div class="col-3">
            <div class="card square">
                <div class="card-body"><b>Checkout</b></div>
                <div class="card-body">
                    <button type="button" class="btn btn-dark w-100 square"><i class="fa fas fa-shopping-cart"></i> Add
                        to Cart
                    </button>
                    <a href="vdroom.php?id=<?=$_GET["id"]?>"><button type="button" class="btn btn-dark mt-1 w-100 square"><i class="fa fas fa-forward"></i> Try
                        in Virtual Dressing Room
                    </button></a>
                </div>
                <div class="card-body" style="color:#770000">
                    Tersedia semua ukuran. Stok terbatas
                </div>
                <div class="card-body">
                    <button type="button" class="btn btn-outline-dark w-100 square"><i class="fa fas fa-heart"></i> Add
                        to Wishlist
                    </button>
                </div>
                <div class="card-body">
                    <p class="h6">Share</p>
                    <button type="button" class="btn" style="background-color:transparent"><i
                                class="fab fa-facebook-f"></i></button>
                    <button type="button" class="btn" style="background-color:transparent"><i
                                class="fab fa-twitter"></i></button>
                    <button type="button" class="btn" style="background-color:transparent"><i class="fab fa-line"></i>
                    </button>
                    <button type="button" class="btn" style="background-color:transparent"><i
                                class="fab fa-google-plus-g"></i></button>
                    <button type="button" class="btn" style="background-color:transparent"><i
                                class="fa fa fa-envelope"></i></button>
                </div>
            </div>
            <div class="card square mt-3">
                <div class="card-body"><b>Informasi pengiriman</b></div>
                <div class="card-body">
                    <table class="table table-sm text-center" style="font-size:0.9rem">
                        <tr>
                            <th>Kurir</th>
                            <th>Lama Pengiriman</th>
                        </tr>
                        <tr>
                            <td>JNE</td>
                            <td>2-3 Hari</td>
                        </tr>
                        <tr>
                            <td>TIKI</td>
                            <td>1-2 Hari</td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>
        <div class="col-1"></div>
    </div>
</div>
<footer class="footer">
    <div class="container">
        <span class="text-muted"></span>
    </div>
</footer>
</body>
</html>