let canvas;
let ctx;
let world;
let keyboard = new Keyboard();

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas);
  console.log("Character: ", world.character);
}

window.addEventListener("keypress", (e) => {
  console.log(e);
});
