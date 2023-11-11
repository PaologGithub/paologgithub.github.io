try {
    const electron = require("electron")
    document.getElementById("jsgame-control_center").hidden = false;
} catch (e) {
    console.info("Not in JSGame: " + e)
    document.getElementById("jsgame-control_center").hidden = true;
}