/* const { invoke } = window.__TAURI__.primitives;

let greetInputEl;
let greetMsgEl;

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });
}

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
  document.querySelector("#greet-form").addEventListener("submit", (e) => {
    e.preventDefault();
    greet();
  });
}); */
setTimeout(() => {
  if (navigator.userAgent.toLowerCase().includes("firefox")) {
    // Do Nothing
  } else {
    if (window.confirm("ALERT: You are using Non-Firefox Browser\nNon-Firefox Browser are not tested by JSGame\nIt is not completely breaked, but just untested.\n\nTo access JSGame Online on your browser, press Cancel\nTo access to JSGame Online in Firefox, press OK")) {
      navigator.clipboard.writeText(window.location.href)
      alert("Link Copied !")
    } else {
      //Do Nothing
    }
  }

  document.getElementById("playsolo").addEventListener("click", () => {window.location.href = "./games/sologame/index.html"})
  document.getElementById("tplaysolo").addEventListener("click", () => {window.location.href = "./games/sologame/index.html"})
  /* document.getElementById("quitbtn").addEventListener("click", () => {process.exit("0")}) */
}, 1)