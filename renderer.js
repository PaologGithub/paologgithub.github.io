setTimeout(() => {
    try {
        require("electron")

        var titlebarscript = document.createElement("script")
        titlebarscript.id = "titlebarscript"
        titlebarscript.src = "/jsgame/titlebar/titlebar.js"

        var styleLink = document.createElement('link');
        styleLink.rel = 'stylesheet';
        styleLink.type = 'text/css';
        styleLink.href = "/jsgame/titlebar/titlebarnormal.css"

        document.body.appendChild(titlebarscript)
        document.body.appendChild(styleLink)

        /* const btn = document.getElementById("jsgame-control_center")
        btn.onclick = () => {window.location.href = "https://paologgithub.github.io/jsgame/JSGameControlCenter/index.html"}
        btn.hidden = false; */
    } catch (e) {
        console.info("Aren't in JSGame: " + e)
        /* const btn = document.getElementById("jsgame-control_center")
        btn.hidden = true; */
    }
}, 100)