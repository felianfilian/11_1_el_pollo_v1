class Drawable {
  img;
  imageChache = [];
  currentImage = 0;
  deathImage = 0;

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
}
