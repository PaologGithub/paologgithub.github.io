import * as engine from './three/src/Three.js'
//const OBJLoader = require("three/examples/jsm/loaders/OBJLoader")
/* import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader"; */

const camera = new engine.PerspectiveCamera(70,window.innerWidth / window.innerHeight, 0.01, 10);
camera.position.z = 1;

const scene = new engine.Scene();
scene.background = new engine.Color('skyblue')

const geometry = new engine.BoxGeometry(0.2,0.2,0.2);
const material = new engine.MeshNormalMaterial();

const mesh = new engine.Mesh(geometry, material);
scene.add(mesh);

const renderer = new engine.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animation);
renderer.domElement.id = "gameCanvas";
renderer.domElement.style.width = "100%";
renderer.domElement.style.height = "100%";
renderer.domElement.className = "main";
renderer.domElement.id = "main"
renderer.domElement.style.cursor = "crosshair"


renderer.domElement.addEventListener("click", () => {
    renderer.domElement.requestPointerLock()
    /* renderer.domElement.addEventListener('mousemove', (cur) => {
        //remote.getCurrentWebContents().sendInputEvent({type: '', x: window.innerWidth /2, y: window.innerHeight /2})
        console.log(cur);
        if (cur.x < window.innerWidth / 2) {
            //console.log("left");
            camera.rotation.y -= 0.01
        } 
        if (cur.x > window.innerWidth / 2) {
            //console.log("right");
            camera.rotation.y += 0.01
        } 
        if (cur.y > window.innerHeight / 2) {
            //console.log("bottom")
            camera.rotation.x -= 0.01
        } 
        if (cur.y < window.innerHeight / 2) {
            //console.log("top")
            camera.rotation.x +=0.01
        }
    }) */
})

document.body.appendChild(renderer.domElement);



//const player = FPS.THREE_ADDONS.FirstPersonControls(camera, renderer.domElement)

function animation(time) {
    mesh.rotation.x = time / 2000;
    mesh.rotation.y = time / 1000;
    
    renderer.render(scene, camera);
}



setInterval(() => {
    
    /* window.addEventListener('mousemove', (cur) => {
        //remote.getCurrentWebContents().sendInputEvent({type: '', x: window.innerWidth /2, y: window.innerHeight /2})
        //console.log(cur)
        if (cur.x < window.innerWidth / 2) {
            console.log("left");
            camera.rotation.y -= 0.01
        } 
        if (cur.x > window.innerWidth / 2) {
            console.log("right");
            camera.rotation.y += 0.01
        } 
        if (cur.y > window.innerHeight / 2) {
            console.log("bottom")
            camera.rotation.x += 0.01
        } 
        if (cur.y < window.innerHeight / 2) {
            console.log("top")
            camera.rotation.x -=0.01
        }
    }) */
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    
}, 20)