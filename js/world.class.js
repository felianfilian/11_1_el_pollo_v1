class World {
  ctx;
  canvas;
  keyboard;
  camera_x = -100;

  character = new Character(100, 150);

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setworld();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);

    this.iterateDrawObjects(this.backgrounds);
    this.addToCanvas(this.character);
    this.iterateDrawObjects(this.clouds);
    this.iterateDrawObjects(this.enemies);

    this.ctx.translate(-this.camera_x, 0);

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  setworld() {
    this.character.world = this;
  }

  iterateDrawObjects(drawItems) {
    drawItems.forEach((drawItem) => {
      this.addToCanvas(drawItem);
    });
  }

  addToCanvas(drawItem) {
    if (drawItem.lookLeft) {
      this.ctx.save();
      this.ctx.translate(drawItem.width, 0);
      this.ctx.scale(-1, 1);
      drawItem.x = drawItem.x * -1;
    }
    this.ctx.drawImage(
      drawItem.img,
      drawItem.x,
      drawItem.y,
      drawItem.width,
      drawItem.height
    );
    if (drawItem.lookLeft) {
      drawItem.x = drawItem.x * -1;
      this.ctx.restore();
    }
  }
}
