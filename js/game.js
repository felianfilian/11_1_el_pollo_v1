let canvas;
let ctx;
let world;
let Keyboard = new Keyboard();

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas);
  console.log("Character: ", world.character);
}
