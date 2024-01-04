import * as THREE from '../three/src/Three.js'

class Player {
    constructor(moveSpeed, keys = { W: false, A: false, S: false, D: false, ' ': false, SHIFT: false }) {
        this.moveSpeed = moveSpeed;
        this.keys = keys;
        this.position = new THREE.Vector3();
        this.rotation = new THREE.Quaternion();
        this.needToHandleMouseMove = false;
        this.needToHandleKeyboard = false;

        // Bind event handlers to the instance
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

    // Handle Mouse move. PUT IN document.addEventListener("mousemove")
    handleMouseMove(event) {
        if (this.needToHandleMouseMove) {
            let movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
            let movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

            // Créez un quaternion pour la rotation autour de l'axe Y
            let quaternionY = new THREE.Quaternion();
            quaternionY.setFromAxisAngle(new THREE.Vector3(0, 1, 0), -movementX * 0.002);
          
            // Appliquez la rotation autour de l'axe Y
            this.rotation.multiply(quaternionY);
            console.log(this.rotation.y)
          
            // Créez un quaternion pour la rotation autour de l'axe X
            /* let quaternionX = new THREE.Quaternion();
            quaternionX.setFromAxisAngle(new THREE.Vector3(1, 0, 0), -movementY * 0.002);
          
            // Calculez la nouvelle rotation autour de l'axe X
            let newRotation = this.rotation.clone().multiply(quaternionX);
          
            // Obtenez l'angle de rotation autour de l'axe X
            let angle = new THREE.Euler().setFromQuaternion(newRotation, 'YXZ').x;
          
            // Limitez la rotation autour de l'axe X à un demi-tour
            if (angle > -Math.PI / 2 && angle < Math.PI / 2) {
              this.rotation.copy(newRotation);
            } */
        }
    }



    

    // Move the player with keys. PUT THAT IN ANIMATION LOOP
    checkForMovement() {
        let moveSpeedX = this.moveSpeed * Math.sin(this.rotation.y);
        let moveSpeedZ = this.moveSpeed * Math.cos(this.rotation.y);

        if (this.keys.W) {
            this.position.x -= moveSpeedX;
            this.position.z -= moveSpeedZ;
        }
        if (this.keys.S) {
            this.position.x += moveSpeedX;
            this.position.z += moveSpeedZ;
        }
        if (this.keys.D) {
            this.position.x += moveSpeedZ;
            this.position.z -= moveSpeedX;
        }
        if (this.keys.A) {
            this.position.x -= moveSpeedZ;
            this.position.z += moveSpeedX;
        }
        if (this.keys[' ']) this.position.y += this.moveSpeed;
        if (this.keys.SHIFT) this.position.y -= this.moveSpeed;
    }
}
export { Player };
