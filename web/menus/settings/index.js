const settingsAPI = require("../../programs/settings")
const logAPI = require("@paolog/jsgame-log")

const settings = settingsAPI.loadSettings()

const set = JSON.parse(settings)

/*set.forEach(element => {
    const text = document.createElement("p")
    text.textContent = element;
    document.body.appendChild(text)
});*/

setTimeout(() => {
    if (set.DarkTheme == "true") {
        const darktheme = document.getElementById("darktheme")
        darktheme.checked = true;
    } else {
        const darktheme = document.getElementById("darktheme")
        darktheme.checked = false;
    }
    if (set.soundEnabled == "true") {
        const soundenabled = document.getElementById("soundenabled");
        soundenabled.checked = true;
    } else {
        const soundenabled = document.getElementById("soundenabled");
        soundenabled.checked = false;
    }
    document.getElementById("height").value = set.Height
    document.getElementById("width").value = set.Width
    document.getElementById("xpos").value = set.XPos
    document.getElementById("ypos").value = set.YPos
    
    const exitbtn = document.getElementById("exit");
    exitbtn.addEventListener("click", () => {
        settingsAPI.applySettings();
        if (localStorage.getItem("hasDebugging") === "false") {

            logAPI.log("Changing page to pao.paolog.jsgame/index.html")
            window.location.href = "../../menus/index/index.html"
        } else {
            logAPI.log("Changing Page to pao.paolog.jsgame/indexDebug.html")
            window.location.href = "../indexDebug/index.html";
        }
    })
    const savebtn = document.getElementById("save")
    savebtn.addEventListener("click", () => {
        const darktheme = document.getElementById("darktheme")
        const soundenabled = document.getElementById("soundenabled");
        if (darktheme.checked) {
            settingsAPI.setSettingsValue("DarkTheme", "true")
        } else {
            settingsAPI.setSettingsValue("DarkTheme", "false")
        }
        if (soundenabled.checked) {
            settingsAPI.setSettingsValue("soundEnabled", "true")
        } else {
            settingsAPI.setSettingsValue("soundEnabled", "false")
        }
        settingsAPI.setSettingsValue("Width", parseInt(document.getElementById("width").value))
        settingsAPI.setSettingsValue("Height", parseInt(document.getElementById("height").value))
        settingsAPI.setSettingsValue("XPos", parseInt(document.getElementById("xpos").value))
        settingsAPI.setSettingsValue("YPos", parseInt(document.getElementById("ypos").value))
        alert("Settings saved !!!")  
    })
    document.getElementById("del").addEventListener("click", () => {
        const remote = require("@electron/remote")

        require("fs").rmSync(remote.app.getPath("userData") + "/settings.json")
        logAPI.log("Relaunching app")
        remote.app.relaunch()
        logAPI.finished("Relaunching App")
        logAPI.log("Quitting app")
        require("electron").ipcRenderer.sendSync("closed", "close")
    })
    
    require("@electron/remote").getCurrentWindow().webContents.on("before-input-event", (event, input) => {
        if (input.code == 'F7') {
            event.preventDefault();
            //window.location.href = "https://paologgithub.github.io"
            window.location.href = "http://127.0.0.1:3000/index.html"
        }
    })
    if (localStorage.getItem("theme") == "dark") {
        style.href = "../../themes/menuDark.css"
        logAPI.info("Applying Dark Theme")
    } else {
        style.href = "../../themes/menuLight.css"
        logAPI.info("Applying Dark Theme")
    }
}, 100)