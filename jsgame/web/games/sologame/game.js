//import 3d
import * as engine from './three/src/Three.js'
//import GLTF Loader
import {GLTFLoader} from './three/examples/jsm/loaders/GLTFLoader.js'
import {OBJLoader} from './three/examples/jsm/loaders/OBJLoader.js'
import {MTLLoader} from './three/examples/jsm/loaders/MTLLoader.js'

//import Player
import {Player} from './src/player.js'

//make player
const player = new Player(0.1)

//Make pause variable
var isPaused = false;

//make camera
const camera = new engine.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
//change camera position
player.position.z = 3;

//create scene
const scene = new engine.Scene();
//put skyblue background
scene.background = new engine.Color("skyblue")

//create renderer
const renderer = new engine.WebGLRenderer();
//set renderer size
renderer.setSize(window.innerWidth, window.innerHeight);
//set renderer animation
renderer.setAnimationLoop(animate)
//set renderer.domElement style and attributes
renderer.domElement.style.width = "100%";
renderer.domElement.style.height = "100%";
renderer.domElement.className = "main";
renderer.domElement.id = "main"

//light:
const ambientLight = new engine.AmbientLight(0xFFFFFF);
ambientLight.intensity = 4;
scene.add( ambientLight );

//game logic: 

//camera:
//ask for pointer lock
renderer.domElement.addEventListener("click", () => {
    renderer.domElement.requestPointerLock();
})
//Rotate the camera when mouse moving
renderer.domElement.addEventListener("mousemove", player.handleMouseMove, false)

//Make something when pointer lock
document.addEventListener("pointerlockchange", () => {
    if (document.pointerLockElement === renderer.domElement) {
        isPaused = false;
    } else {
        isPaused = true;
    }
})

setInterval(() => {

    if (isPaused) {
        player.needToHandleMouseMove = false;
        player.needToHandleKeyboard = false;
        document.getElementById("pauseMenu").style.display = "";
    } else {
        player.needToHandleMouseMove = true;
        player.needToHandleKeyboard = true;
        document.getElementById("pauseMenu").style.display = "none";
    }
}, 20)
//Make paused in start
isPaused = true;

// END OF CAMERA
//Movement:
document.addEventListener("keydown", player.handleKeyDown)
document.addEventListener("keyup", player.handleKeyUp)
//END OF MOVEMENT
//disable scrolling
document.addEventListener('wheel', (event) => {event.preventDefault();}, {passive: false});

//append the game
document.body.appendChild(renderer.domElement);

//name all laoders
const glftLoader = new GLTFLoader();
const objLoader = new OBJLoader();
const mtlLoader = new MTLLoader();
//load my testmap
glftLoader.load("./res/TestMap.gltf", (glftScene) => {
    var obj = glftScene.scene.children[0];
    obj.position.x = 0;
    obj.position.y = 0;
    obj.position.z = 0;
    scene.add(obj)
})


function animate(time) {

    player.checkForMovement();


    /* camera.setRotationFromQuaternion(player.rotation) */
    //camera.rotation.copy(player.rotation)
    camera.quaternion.copy(player.rotation)
    camera.position.copy(player.position)

    /* camera.position.x = player.position.x;
    camera.position.y = player.position.y;
    camera.position.z = player.position.z;
 */
    renderer.render(scene, camera);
};

//HTML Logic:
document.getElementById("play").addEventListener("click", () => {isPaused = !isPaused; renderer.domElement.requestPointerLock()})
document.getElementById("menuquit").addEventListener("click", () => {window.location.href = "/jsgame/web/index.html"})
document.getElementById("osquit").addEventListener("click", () => {window.close()})