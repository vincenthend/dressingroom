// Variable declaration
var scene, camera, renderer, controller;

function initViewport(){
    var viewport = document.getElementById("viewport");
    scene = new THREE.Scene();
    //camera = new THREE.PerspectiveCamera( 75, viewport.clientWidth /viewport.clientHeight, 0.1, 1000 );
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 5000 );
	
	//Set Camera starting position
	
	camera.rotation.x = -0.17908;
	camera.rotation.y = 0.04418;
	camera.rotation.z = 1.5;
	camera.position.x = -500;
	camera.position.y = 2000;
	camera.position.z = 2000;
	
	
	var ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
	var pointLight = new THREE.PointLight( 0xffffff, 0.8 );
	scene.add( ambientLight );
	camera.add( pointLight );
	scene.add( camera );
    renderer = new THREE.WebGLRenderer();

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
	mtlLoader.load('model.mtl', function(materials) {
		materials.preload();
		var objLoader = new THREE.OBJLoader();
		objLoader.setMaterials(materials);
		objLoader.setPath(path);
		objLoader.load(obj_file, function (object) {
			object.position.y = -95;
			object.name = 'model';
			object.scale.x = 1.2;
			camera.lookAt(object.position);
			scene.add(object);
			//remove with 
			//var obj = scene.getObjectByName('model');
			//scene.remove(object)
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
		if(((clothsize === "m") && (chest > 104 || armc > 40 || bodyl > 63)) || ((clothsize="l") && (chest > 116 || armc > 44 || bodyl > 63))){
			path = "model/striped_sm/";
		} else {
            path = "model/striped/";
		}
	} else if (clothtype === "white"){
        if(((clothsize === "m") && (chest > 98 || armc > 38 || bodyl > 60)) || ((clothsize="l") && (chest > 106 || armc > 42 || bodyl > 56))){
            path = "model/white_sm/";
        } else {
            path = "model/white/";
        }
	} else {
        if(((clothsize === "m") && (chest > 98 || armc > 34 || bodyl > 54)) || ((clothsize="l") && (chest > 106 || armc > 40 || bodyl > 55))){
            path = "model/flamingo_sm/";
        } else {
            path = "model/flamingo/";
        }
	}


	loadOBJ(path);
	var controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.update();

	var animate = function () {
		requestAnimationFrame(animate);

		controls.update();

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


initViewport();
var obj = drawObject();