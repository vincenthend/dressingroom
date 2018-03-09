// Variable declaration
var scene, camera, renderer, controller;

function initViewport(){
    var viewport = document.getElementById("viewport");
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, viewport.clientWidth /viewport.clientHeight, 0.1, 1000 );
    renderer = new THREE.WebGLRenderer();

    renderer.setSize(viewport.clientWidth, viewport.clientHeight);
    viewport.appendChild( renderer.domElement );
}

function drawObject(){    
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshNormalMaterial( { color: 0x00ff00 } );
	var cube = new THREE.Mesh( geometry, material );
	var controls = new THREE.OrbitControls( camera );
    scene.add( cube );
    camera.position.z = 5;
	controls.update();

	var animate = function () {
		requestAnimationFrame( animate );

		controls.update();

		renderer.render(scene, camera);
	};
	animate();
}


initViewport();
var obj = drawObject();