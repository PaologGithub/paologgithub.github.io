const electron = require("electron");
const path = require("path");
const remote = require('@electron/remote')

setTimeout(() => {
    
    
    var titlebar = document.createElement("div");
    titlebar.className = "titlebar"
    titlebar.id = "titlebar"
    document.body.appendChild(titlebar);

    closebtn = document.createElement("button");
    closebtn.id = "closebtn";
    closebtn.className = "closebtn";

    titlet = document.createElement("h3");
    titlet.className = "titlet";
    titlet.textContent = document.title;

    if (remote.getCurrentWindow().getParentWindow != null || document.getElementById("pagevalue") == "popup") {

        var closefls = document.createElement("button");
        closefls.id = "closefls";
        closefls.className = "closefls";

        var flsbtn = document.createElement("button");
        flsbtn.id = "flsbtn";
        flsbtn.className = "flsbtn";

        var tomaxbtn = document.createElement("button");
        tomaxbtn.id = "tomaxbtn";
        tomaxbtn.className = "tomaxbtn";

        var tominbtn = document.createElement("tominbtn");
        tominbtn.id = "tominbtn";
        tominbtn.className = "tominbtn";

        var totskbtn = document.createElement("button");
        totskbtn.id = "totskbtn";
        totskbtn.className = "totskbtn";

        if (remote.getCurrentWindow().resizable == false) {
            closefls.disabled = true;
            flsbtn.disabled = true;
            tominbtn.disabled = true;
            tomaxbtn.disabled = true;
        }

        titlebar.appendChild(closefls);
        titlebar.appendChild(flsbtn);
        titlebar.appendChild(tomaxbtn);
        titlebar.appendChild(tominbtn);
        titlebar.appendChild(totskbtn);

        tominbtn.hidden = true;
        closefls.hidden = true;

        closefls.addEventListener('click', () => {
            close_fullscreen();
        });
        flsbtn.addEventListener('click', () => {
            fullscreen();
        });
        tomaxbtn.addEventListener('click', () => {
            to_maximized();
        });
        tominbtn.addEventListener('click', () => {
            to_minimized();
        });
        totskbtn.addEventListener('click', () => {
            to_taskbar();
        });
    }

    titlebar.appendChild(closebtn);
    titlebar.appendChild(titlet)

    closebtn.addEventListener('click', () => {

            electron.ipcRenderer.sendSync("closed", "close")
    })

    /*if (localStorage.getItem("theme") == "dark") {
        titlebar.style.backgroundColor = "darkgray"
        flsbtn.style.backgroundColor = "darkgray"
        closefls.style.backgroundColor = "darkgray"
        totskbtn.style.backgroundColor = "darkgray";
        tomaxbtn.style.backgroundColor = "darkgray";
        tominbtn.style.backgroundColor = "darkgray"
    }*/
}, 1)
setTimeout(() => {
    if (remote.getCurrentWindow().isMaximized()) {
        to_maximized()
    } else if (remote.getCurrentWindow().isFullScreen()) {
        fullscreen()
    }
}, 500)

setInterval(() => {
    const win = remote.getCurrentWindow();
    if(win.isFocused()) {
        document.getElementById("closebtn").style.backgroundColor = "red";
    } else {
        document.getElementById("closebtn").style.backgroundColor = "lightgray";
    }
}, 100)
function to_maximized() {
    const win = remote.getCurrentWindow();
    win.maximize();
    tomaxbtn = document.getElementById("tomaxbtn")
    tominbtn = document.getElementById("tominbtn")
    tomaxbtn.hidden = true;
    tominbtn.hidden = false;
}
function to_minimized() {
    const win = remote.getCurrentWindow();
    win.restore();
    tomaxbtn = document.getElementById("tomaxbtn")
    tominbtn = document.getElementById("tominbtn")
    tomaxbtn.hidden = false;
    tominbtn.hidden = true;
}
function to_taskbar() {
    const win = remote.getCurrentWindow();
    win.minimize();
}
function fullscreen() {
    const win = remote.getCurrentWindow();
    win.fullScreen = true;
    const titlebar = document.getElementById("titlebar");
    titlebar.style.display = "none";
    const main = document.getElementById("main");
    main.style.top = 0;
    flsbtn = document.getElementById("flsbtn");
    closefls = document.getElementById("closefls");
    tomaxbtn = document.getElementById("tomaxbtn");
    tominbtn = document.getElementById("tominbtn");
    flsbtn.hidden = true;
    closefls.hidden = false;
    

    setInterval(() => {
        if (remote.getCurrentWindow().isFullScreen()) {
            const pos = remote.screen.getCursorScreenPoint();
            window.addEventListener('mousemove', (pos) => {
                if (remote.getCurrentWindow().isFullScreen()) {
                    if (pos.y < 48) {
                        titlebar.style.display = "";
                        main.style.top = "48px";
                    } else {
                        titlebar.style.display = "none";
                        main.style.top = "0px";
                    }
                }
            })
        }
    }, 2000)
}
function close_fullscreen() {
    const win = remote.getCurrentWindow();
    win.fullScreen = false;
    const titlebar = document.getElementById("titlebar");
    titlebar.style.display = "";
    const main = document.getElementById("main");
    main.style.top = 48;
    flsbtn = document.getElementById("flsbtn");
    closefls = document.getElementById("closefls");
    flsbtn.hidden = false;
    closefls.hidden = true;
}