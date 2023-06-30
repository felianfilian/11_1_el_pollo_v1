class Character extends Movable {
  constructor(x, y) {
    super().loadImage("img/2_character_pepe/1_idle/idle/I-1.png");
    this.x = x;
    this.y = y;
    this.height = 300;
    this.width = 150;
  }

  jump() {}
}
