setTimeout(() => {
   /*  document.getElementById("quitnavbtn").addEventListener("click", () => {
        
    }) */
    if (localStorage.getItem("hasComputerNavigationBar") != null) {
        document.getElementsByTagName("link")[0].href = ""
        const navbar = document.getElementById("navbar");
        navbar.style.position = "absolute";
        navbar.style.zIndex = 7;
        navbar.style.top = "0%";
        navbar.style.bottom = "0%";
        navbar.style.left = "0%";
        navbar.style.right = "95%";
        navbar.style.backgroundColor = "aqua"
        document.getElementsByClassName("#mainnavbtn").forEach(element => {
            element.style.backgroundColor = "lightblue"
        });
    }
    document.getElementById("threedots").addEventListener("click", () => {
        const threedotsmenu = document.getElementById("threedotsmenu")
        if (threedotsmenu.hidden) {
            threedotsmenu.hidden = false;
            threedotsmenu.style.display = "";
        } else {
            threedotsmenu.hidden = true;
            threedotsmenu.style.display = ""
        }
    })
}, 1)