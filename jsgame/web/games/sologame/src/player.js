import * as THREE from '../three/src/Three.js'

class Player {
    constructor(moveSpeed, keys = { W: false, A: false, S: false, D: false, ' ': false, SHIFT: false }) {
        this.moveSpeed = moveSpeed;
        this.keys = keys;
        this.position = new THREE.Vector3();
        this.rotation = new THREE.Quaternion();
        this.needToHandleMouseMove = false;
        this.needToHandleKeyboard = false;

        this.rotation.order = "YXZ"
        
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }
    
    

    // Handle Key Down. PUT IN document.addEventListener("keydown")
    handleKeyDown(event) {
        if (this.needToHandleKeyboard) {
            const key = event.key.toUpperCase();
            console.log("Key: " + key)
            if (this.keys.hasOwnProperty(key)) {
                this.keys[key] = true;
                if (key === ' ') {
                    event.preventDefault();
                }
            }
        }
    }

    // Handle Key Up. PUT IN document.addEventListener("keyup")
    handleKeyUp(event) {
        if (this.needToHandleKeyboard) {
            const key = event.key.toUpperCase();
            console.log("KeyUp: " + key)
            if (this.keys.hasOwnProperty(key)) {
                this.keys[key] = false;
            }
        }
    }

    handleMouseMove(event) {
        if (this.needToHandleMouseMove) {
            let movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
            let movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;
    
            // Create a Y quaternion
            let quaternionY = new THREE.Quaternion();
            quaternionY.setFromAxisAngle(new THREE.Vector3(0, 1, 0), -movementX * 0.002);
    
            // Apply Y rotation
            this.rotation.multiply(quaternionY);
    
            // Create a quaternion for rotation around the X axis
            let quaternionX = new THREE.Quaternion();
            quaternionX.setFromAxisAngle(new THREE.Vector3(1, 0, 0), -movementY * 0.002);
    
            this.rotation.multiply(quaternionX);
        }
    }
    



    

    // Move the player with keys. PUT THAT IN ANIMATION LOOP
    checkForMovement() {
        let direction = new THREE.Vector3();
        let rotationMatrix = new THREE.Matrix4();
        rotationMatrix.makeRotationFromQuaternion(this.rotation);
    
        if (this.keys.W) {
            direction.z -= 1;
        }
        if (this.keys.S) {
            direction.z += 1;
        }
        if (this.keys.D) {
            direction.x += 1;
        }
        if (this.keys.A) {
            direction.x -= 1;
        }
        if (this.keys[' ']) {
            direction.y += 1;
        }
        if (this.keys.SHIFT) {
            direction.y -= 1;
        }
    
        direction.normalize(); // this ensures consistent movements in all directions
        direction.applyMatrix4(rotationMatrix);
        direction.multiplyScalar(this.moveSpeed);
    
        this.position.add(direction);
    }
}
export { Player };
