class Movable {
  x = 120;
  y = 340;
  height = 100;
  width = 100;
  img;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  moveRight() {}

  moveLeft() {}
}
