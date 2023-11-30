class Player {
    constructor(moveSpeed, keys = { W: false, A: false, S: false, D: false, ' ': false, SHIFT: false }) {
        this.moveSpeed = moveSpeed;
        this.keys = keys;
        this.position = { x: 0, y: 0, z: 0 };
        this.rotation = { x: 0, y: 0, z: 0 };
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
            // Calculate the change in mouse position
            const movementX = event.movementX || 0;
            const movementY = event.movementY || 0;

            // Adjust the player rotation based on mouse movement;
            this.rotation.y -= movementX * 0.002;
            this.rotation.x -= movementY * 0.002;

            // Limit vertical rotation to avoid flipping
            this.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, this.rotation.x));
        }
    }

    // Move the player with keys. PUT THAT IN ANIMATION LOOP
    checkForMovement() {
        if (this.keys.W) this.position.z -= this.moveSpeed;
        if (this.keys.S) this.position.z += this.moveSpeed;
        if (this.keys.A) this.position.x -= this.moveSpeed;
        if (this.keys.D) this.position.x += this.moveSpeed;
        if (this.keys[' ']) this.position.y += this.moveSpeed;
        if (this.keys.SHIFT) this.position.y -= this.moveSpeed;
    }
}

export { Player };
