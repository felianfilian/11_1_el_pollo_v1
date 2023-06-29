class Cloud extends Movable {
  y = 20;
  constructor() {
    super().loadImage("img/5_background/layers/4_clouds/1.png");
    this.x = Math.random() * 500;
    this.height = 250;
    this.width = 500;
  }
}
