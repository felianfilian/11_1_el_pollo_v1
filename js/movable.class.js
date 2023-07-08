class Movable {
  x = 120;
  y = 340;
  height = 100;
  width = 100;
  speed = 0.4;
  speedY = 0;
  acceleration = 2.5;
  groundLevel = 140;

  img;
  imageChache = [];
  currentImage = 0;
  lookLeft = false;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   *
   * @param (Array) arr = ['img/img01.jpg','img/img01.jpg', ...]
   */

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageChache[path] = img;
    });
  }

  moveRight() {
    this.x += this.speed;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  jump() {
    this.speedY = 30;
  }

  playAnimation(images) {
    if (this.currentImage >= images.length) {
      this.currentImage = 0;
    }
    let path = images[this.currentImage];
    this.img = this.imageChache[path];
    this.currentImage++;
  }

  applyGravity() {
    setInterval(() => {
      if (!this.isGrounded() || this.speedY > 0) {
        this.y -= this.speedY;
        if (this.y > this.groundLevel) {
          this.y = this.groundLevel;
        }
        this.speedY -= this.acceleration;
      }
    }, 1000 / 30);
  }

  isGrounded() {
    return this.y >= this.groundLevel;
  }

  draw(ctx) {}

  drawFrame() {}
}
