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

function loadOBJ(){
	path = 'model/striped/';
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
    //var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    //var material = new THREE.MeshNormalMaterial( { color: 0x00ff00 } );
	//var cube = new THREE.Mesh( geometry, material );
    //scene.add(cube);
	
	loadOBJ();
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
    var selectedObject = scene.getObjectByName(object.name);
    scene.remove( selectedObject );
    animate();
}


initViewport();
var obj = drawObject();