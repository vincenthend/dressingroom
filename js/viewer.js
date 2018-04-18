// Variable declaration
var scene, camera, renderer, controller;

function initViewport(){
    var viewport = document.getElementById("viewport");
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
    camera.position.z = 250;

    scene = new THREE.Scene();

	var ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
    scene.add( ambientLight );
	var pointLight = new THREE.PointLight( 0xffffff, 0.8 );
	camera.add( pointLight );
	scene.add( camera );
	renderer = new THREE.WebGLRenderer();

    // Load the background texture
    var texture = THREE.ImageUtils.loadTexture( 'bgimage.jpg' );
    var backgroundMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 2, 0),
        new THREE.MeshBasicMaterial({
            map: texture
        }));

    backgroundMesh .material.depthTest = false;
    backgroundMesh .material.depthWrite = false;

    // Create your background scene
    backgroundScene = new THREE.Scene();
    backgroundCamera = new THREE.Camera();
    backgroundScene .add(backgroundCamera );
    backgroundScene .add(backgroundMesh );


    renderer.setSize(viewport.clientWidth, viewport.clientHeight);
    viewport.appendChild( renderer.domElement );
}

function loadOBJ(path){
	mat_file = 'model.mtl';
	obj_file = 'model.obj';
	
	var onProgress = function ( xhr ) {
		if ( xhr.lengthComputable ) {
			var percentComplete = xhr.loaded / xhr.total * 100;
			console.log( Math.round(percentComplete, 2) + '% downloaded' );
		}
	};
	var onError = function ( xhr ) {};
	
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.setPath(path);
	mtlLoader.load(mat_file, function(materials) {
		materials.preload();
		var objLoader = new THREE.OBJLoader();
		objLoader.setMaterials(materials);
		objLoader.setPath(path);
		objLoader.load(obj_file, function (object) {
			object.name = 'model';
            object.position.y = - 75;
            object.scale.set(0.1, 0.075, 0.115);
            scene.add( object );
		}, onProgress, onError );
	});
}

function drawObject(){
	clearObject();
    //var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    //var material = new THREE.MeshNormalMaterial( { color: 0x00ff00 } );
	//var cube = new THREE.Mesh( geometry, material );
    //scene.add(cube);
	clothsize = document.getElementById("clothsize").value;
    clothtype = document.getElementById("clothtype").value;
    chest = document.getElementById("chest").value;
    armc = document.getElementById("armc").value;
    arml = document.getElementById("arml").value;
    bodyl = document.getElementById("bodyl").value;
	if (clothtype === "striped"){
		if(((clothsize === "m") && (chest > 106 || armc > 41 || bodyl > 64)) || ((clothsize="l") && (chest > 118 || armc > 45 || bodyl > 64))){
			fitpath = "too small";
		} else if(((clothsize === "m") && (chest > 98 || armc > 37 || bodyl > 60)) || ((clothsize="l") && (chest > 110 || armc > 41 || bodyl > 60))){
			fitpath = "on size";
		} else {
			fitpath = "too big";
		}
	} else if (clothtype === "white"){
        if(((clothsize === "m") && (chest > 100 || armc > 39 || bodyl > 55)) || ((clothsize="l") && (chest > 108 || armc > 43 || bodyl > 57))){
            fitpath = "too small";
        } else if(((clothsize === "m") && (chest > 92 || armc > 35 || bodyl > 51)) || ((clothsize="l") && (chest > 100 || armc > 39 || bodyl > 53))){
			fitpath = "on size";
		} else {
			fitpath = "too big";
		}
	} else {
        if(((clothsize === "m") && (chest > 100 || armc > 35 || bodyl > 55)) || ((clothsize="l") && (chest > 108 || armc > 41 || bodyl > 56))){
            fitpath = "too small";
        } else if(((clothsize === "m") && (chest > 92 || armc > 31 || bodyl > 51)) || ((clothsize="l") && (chest > 100 || armc > 37 || bodyl > 52))){
			fitpath = "on size";
		} else {
			fitpath = "too big";
		}
	}
	if (chest > 110 || armc > 50){
		bodypath = "fat";
	} else if (chest > 80 || armc > 55){
		bodypath = "med";
	} else {
		bodypath = "thin";
	}

	path = "model" + "/" + clothtype + "/" + bodypath + "/" + fitpath + "/";

	loadOBJ(path);


	var controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.update();

    var animate = function () {
		requestAnimationFrame(animate);

		controls.update();

        renderer.autoClear = false;
        renderer.render(backgroundScene , backgroundCamera );
        renderer.render(scene, camera);
	};
	animate();
}

function clearObject(){
    var selectedObject = scene.getObjectByName('model');
    if (selectedObject != null){
        scene.remove( selectedObject );
	}
}

function animate() {

    requestAnimationFrame( animate );
    render();

}

function render() {
    camera.lookAt( scene.position );

    renderer.autoClear = false;
    renderer.render(backgroundScene , backgroundCamera );
    renderer.render(scene, camera);
}

initViewport();
var obj = drawObject();