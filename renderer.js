setTimeout(() => {
    try {
        require(require("@electron/remote").app.getAppPath() + "./titlebar/titlebar.js")
        const btn = document.getElementById("jsgame-control_center")
        btn.onclick = () => {window.location.href = "https://paologgithub.github.io/JSGameControlCenter/index.html"}
        btn.hidden = false;
    } catch (e) {
        console.info("Aren't in JSGame: " + e)
        const btn = document.getElementById("jsgame-control_center")
        btn.hidden = true;
    }
}, 100)