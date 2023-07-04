class Movable {
  x = 120;
  y = 340;
  height = 100;
  width = 100;
  speed = 0.4;

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

  moveRight() {}

  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 40);
  }

  playAnimation(images) {
    if (this.currentImage >= this.ANIM_WALK.length) {
      this.currentImage = 0;
    }
    let path = images[this.currentImage];
    this.img = this.imageChache[path];
    this.currentImage++;
  }
}
