setTimeout(() => {
    require("electron")

        var titlebarscript = document.createElement("script")
        titlebarscript.id = "titlebarscript"
        titlebarscript.src = "../titlebar/titlebar.js"

        var styleLink = document.createElement('link');
        styleLink.rel = 'stylesheet';
        styleLink.type = 'text/css';
        styleLink.href = "../titlebar/titlebarnormal.css"

        document.body.appendChild(titlebarscript)
        document.body.appendChild(styleLink)
},1)