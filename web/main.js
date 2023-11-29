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
  document.getElementById("playsolo").addEventListener("click", () => {window.location.href = "./games/sologame/index.html"})
  document.getElementById("tplaysolo").addEventListener("click", () => {window.location.href = "./games/sologame/index.html"})

  try {
    window.flutter_inappwebview.postMessage('Lol', 'Hello from JavaScript!');
  } catch (e) {

  }
  /* document.getElementById("quitbtn").addEventListener("click", () => {process.exit("0")}) */
}, 1)