// Variable declaration
var scene, camera, renderer, controller;

function initViewport(){
    var viewport = document.getElementById("viewport");
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, viewport.clientWidth /viewport.clientHeight, 0.1, 1000 );
    renderer = new THREE.WebGLRenderer();

    renderer.setSize(viewport.clientWidth, viewport.clientHeight);
    viewport.appendChild( renderer.domElement );
    controls = new THREE.OrbitControls(camera, renderer.domElement );
    controls.addEventListener( 'change', render );
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
}

function drawObject(){    
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    camera.position.z = 5;
}

var animate = function () {
    requestAnimationFrame( animate );

    //cube.rotation.x += 0.1;
    //cube.rotation.y += 0.1;
    controls.update();

    renderer.render(scene, camera);
};

initViewport();
drawObject();
animate();