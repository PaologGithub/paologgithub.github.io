const engine = require('three');
//const OBJLoader = require("three/examples/jsm/loaders/OBJLoader")
/* import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader"; */
import {OBJLoader} from "./three/examples/jsm/loaders/OBJLoader.js"
const crash = require("../../programs/crash.js");
const logAPI = require("@paolog/jsgame-log")
const remote = require("@electron/remote");


const camera = new engine.PerspectiveCamera(70,window.innerWidth / window.innerHeight, 0.01, 10);
logAPI.finished("Creating Camera")
camera.position.z = 1;

const scene = new engine.Scene();
scene.background = new engine.Color('skyblue')
logAPI.finished("Creating Scene")

/* const geometry = new engine.BoxGeometry(0.2,0.2,0.2);
const material = new engine.MeshNormalMaterial();

const mesh = new engine.Mesh(geometry, material);
scene.add(mesh); */

const renderer = new engine.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animation);
renderer.domElement.id = "gameCanvas";
renderer.domElement.style.width = "100%";
renderer.domElement.style.height = "100%";
renderer.domElement.className = "main";
renderer.domElement.id = "main"
renderer.domElement.style.cursor = "crosshair"
logAPI.finished("Creating domElement and attribute him some settings")


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

try {
    //renderer.domElement = null
    document.body.appendChild(renderer.domElement);
    logAPI.finished("Showing domElement to body")
}
catch(e){
    logAPI.error("Error while showing domElement to body: " + e)
    crash.crash(e, () => {window.location.href="../../games/sologame/index.html"})
}


const loader = new OBJLoader()


loader.load(remote.app.getPath("userData") + '/res/block.obj',
    function (obj) {
        var text = new engine.TextureLoader(remote.app.getPath("userData") + '/res/pycr_logo.png');
        var mat = new engine.MeshLambertMaterial({map:text})
        var mesh1 = new engine.Mesh(obj)
        
        scene.add(mesh1)
    }, function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + "%loaded")
    },
    function(error) {
        console.log("Error: " + error)
    }
)

//const player = FPS.THREE_ADDONS.FirstPersonControls(camera, renderer.domElement)

function animation(time) {
    /* mesh.rotation.x = time / 2000;
    mesh.rotation.y = time / 1000; */
    
    renderer.render(scene, camera);
}

var isPaused = false;

window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

remote.getCurrentWindow().webContents.on("before-input-event", (event, input) => {
    if (input.key.valueOf() == "a") {
        camera.position.x -= 0.01;
    } else if (input.key.valueOf() == "d") {
        camera.position.x += 0.01;
    } else if (input.key.valueOf() == "w") {
        camera.position.z -= 0.01;
    } else if (input.key.valueOf() == "s") {
        camera.position.z += 0.01;
    } else if (input.key.valueOf() == "Escape") {
        if (isPaused) {
            setTimeout(() => {
                isPaused = false
                document.getElementById("pauseMenu").style.display = "none"
                console.log(isPaused)
            }, 10)
        } else {
            setTimeout(() => {
                isPaused = true
                document.getElementById("pauseMenu").style.display = ""
                console.log(isPaused)
            }, 10)
        }
    } else if (input.key.valueOf() == "ArrowDown") {
        event.preventDefault();
        camera.rotation.x -= 0.01
    } else if (input.key.valueOf() == "ArrowUp") {
        event.preventDefault();
        camera.rotation.x += 0.01
    } else if (input.key.valueOf() == "ArrowLeft") {
        event.preventDefault()
        camera.rotation.y -= 0.01
    } else if (input.key.valueOf() == "ArrowRight") {
        event.preventDefault()
        camera.rotation.y += 0.01
    }
})


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
    renderer.domElement.style.width = document.documentElement.clientWidth;
    renderer.domElement.style.height = (document.documentElement.clientHeight - 48);
    
}, 20)