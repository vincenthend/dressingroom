<html>
<head>
    <title>Virtual Dressing Room</title>
    <link rel="stylesheet" href="./css/bootstrap.min.css">
    <script src="./js/jquery-3.2.1.slim.min.js"></script>
    <script src="./js/popper.min.js"></script>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <style>
        html {
            font-size: 14px;
        }

        .fill {
            min-height: 100vh;
            height: 100%;
        }

        #viewport {
            padding: 0;
        }

        .options {
            padding: 1rem;
        }

        .fieldname {
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }

        .row.input-field {
            padding-bottom: 0.2rem;
        }

    </style>
</head>
<body>
<div class="container-fluid">
    <div class="row fill">
        <div class="col-3 options">
            <h3>
                Virtual Dressing Room
            </h3>
            <div class="row input-field">
                <div class="col-6 fieldname">
                    <label for="height">Tinggi Badan:</label>
                </div>
                <div class="col-6 input-group">
                    <input type="number" class="form-control" id="height" min="0" value="155">
                    <div class="input-group-append">
                        <span class="input-group-text">cm</span>
                    </div>
                </div>
            </div>
            <div class="row input-field">
                <div class="col-6 fieldname">
                    <label for="weight">Berat Badan:</label>
                </div>
                <div class="col-6 input-group">
                    <input type="number" class="form-control" id="weight" min="0" value="45">
                    <div class="input-group-append">
                        <span class="input-group-text">kg</span>
                    </div>
                </div>
            </div>
            <div class="row input-field">
                <div class="col-6 fieldname">
                    <label for="chest">Lingkar Dada:</label>
                </div>
                <div class="col-6 input-group">
                    <input type="number" class="form-control" id="chest" min="0" value="90">
                    <div class="input-group-append">
                        <span class="input-group-text">cm</span>
                    </div>
                </div>
            </div>
            <div class="row input-field">
                <div class="col-6 fieldname">
                    <label for="armc">Lingkar Lengan:</label>
                </div>
                <div class="col-6 input-group">
                    <input type="number" class="form-control" id="armc" min="0" value="40">
                    <div class="input-group-append">
                        <span class="input-group-text">cm</span>
                    </div>
                </div>
            </div>
            <div class="row input-field">
                <div class="col-6 fieldname">
                    <label for="hip">Lingkar Pinggang:</label>
                </div>
                <div class="col-6 input-group">
                    <input type="number" class="form-control" id="hip" min="0" value="68">
                    <div class="input-group-append">
                        <span class="input-group-text">cm</span>
                    </div>
                </div>
            </div>
            <div class="row input-field">
                <div class="col-6 fieldname">
                    <label for="stomach">Lingkar Perut:</label>
                </div>
                <div class="col-6 input-group">
                    <input type="number" class="form-control" id="stomach" min="0" value="88">
                    <div class="input-group-append">
                        <span class="input-group-text">cm</span>
                    </div>
                </div>
            </div>
            <div class="row input-field">
                <div class="col-6 fieldname">
                    <label for="arml">Panjang Lengan:</label>
                </div>
                <div class="col-6 input-group">
                    <input type="number" class="form-control" id="arml" min="0" value="52">
                    <div class="input-group-append">
                        <span class="input-group-text">cm</span>
                    </div>
                </div>
            </div>
            <div class="row input-field">
                <div class="col-6 fieldname">
                    <label for="bodyl">Panjang Badan:</label>
                </div>
                <div class="col-6 input-group">
                    <input type="number" class="form-control" id="bodyl" min="0" value="52">
                    <div class="input-group-append">
                        <span class="input-group-text">cm</span>
                    </div>
                </div>
            </div>
            <div class="row input-field">
                <div class="col-6 fieldname">
                    <label for="shoulder">Lebar Bahu:</label>
                </div>
                <div class="col-6 input-group">
                    <input type="number" class="form-control" id="shoulder" min="0" value="12">
                    <div class="input-group-append">
                        <span class="input-group-text">cm</span>
                    </div>
                </div>
            </div>
            <div class="text-right row input-field">
                <div class="col-6 fieldname">
                    <label for="clothtype">Jenis Baju:</label>
                </div>
                <div class="col-6 input-group">
                    <select id="clothtype" class="form-control">
                        <?php
                            if ($_GET["id"] == 1) {
                                echo '<option value="striped" selected>Striped</option>';
                            } else if ($_GET["id"] == 2) {
                                echo '<option value="flamingo" selected>Flamingo</option>';
                            } else if ($_GET["id"] == 3) {
                                echo '<option value="white" selected>White</option>';
                            } ?>
                    </select>
                </div>
            </div>
            <div class="text-right row input-field">
                <div class="col-6 fieldname">
                    <label for="clothsize">Ukuran Baju:</label>
                </div>
                <div class="col-6 input-group">
                    <select id="clothsize" class="form-control">
                        <option value="m">S</option>
                        <option value="l" selected>L</option>
                    </select>
                </div>
            </div>
            <div class="text-right row input-field">
                <div class="col-12 mt-2">
                    <button type="submit" class="btn btn-primary" onclick="drawObject()">Submit</button>
                </div>
            </div>
        </div>
        <div class="col-9" id="viewport" style="background-color: grey">
        </div>
    </div>
</div>
<script src="js/three.min.js"></script>
<script src="js/loader/MTLLoader.js"></script>
<script src="js/loader/OBJLoader.js"></script>
<script src="js/controls/OrbitControls.js"></script>
<script src="js/viewer.js"></script>
</body>
</html>