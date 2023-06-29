class World {
  ctx;
  canvas;

  character = new Character();
  enemies = [new Chicken(), new Chicken(), new Chicken()];
  clouds = [new Cloud("img/5_background/layers/4_clouds/1.png")];
  backgrounds = [
    new Background("img/5_background/layers/1_first_layer/1.png"),
    new Background("img/5_background/layers/1_first_layer/1.png"),
  ];

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.backgrounds.forEach((background) => {
      this.ctx.drawImage(
        background.img,
        background.x,
        background.y,
        background.width,
        background.height
      );
    });

    this.clouds.forEach((cloud) => {
      this.ctx.drawImage(
        cloud.img,
        cloud.x,
        cloud.y,
        cloud.width,
        cloud.height
      );
    });

    this.ctx.drawImage(
      this.character.img,
      this.character.x,
      this.character.y,
      this.character.width,
      this.character.height
    );

    for (let chick of this.enemies) {
      this.ctx.drawImage(
        chick.img,
        chick.x,
        chick.y,
        chick.width,
        chick.height
      );
    }

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }
}
