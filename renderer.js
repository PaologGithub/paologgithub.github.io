setTimeout(() => {
    try {
        const electron = require("electron")
        const btn = document.getElementById("jsgame-control_center")
        btn.hidden = false;
    } catch (e) {
        console.info("Not in JSGame: " + e)
        const btn = document.getElementById("jsgame-control_center")
        btn.hidden = true;
    }
}, 100)