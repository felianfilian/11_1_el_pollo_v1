class World {
  ctx;
  canvas;

  character = new Character(100, 150);
  enemies = [new Chicken(), new Chicken(), new Chicken()];
  clouds = [new Cloud("img/5_background/layers/4_clouds/1.png")];
  backgrounds = [
    new Background("img/5_background/layers/air.png", 0, 0),
    new Background("img/5_background/layers/3_third_layer/1.png", 0, -20),
    new Background("img/5_background/layers/2_second_layer/1.png", 0, -10),
    new Background("img/5_background/layers/1_first_layer/2.png", 0, 0),
  ];

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.iterateDrawObjects(this.backgrounds);
    this.iterateDrawObjects(this.clouds);
    this.iterateDrawObjects(this.enemies);

    this.addToCanvas(this.character);

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  iterateDrawObjects(drawItems) {
    drawItems.forEach((drawItem) => {
      this.addToCanvas(drawItem);
    });
  }

  addToCanvas(drawItem) {
    this.ctx.drawImage(
      drawItem.img,
      drawItem.x,
      drawItem.y,
      drawItem.width,
      drawItem.height
    );
  }
}
