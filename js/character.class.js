class Character extends Movable {
  ANIM_WALK = [
    "img/2_character_pepe/2_walk/W-21.png",
    "img/2_character_pepe/2_walk/W-22.png",
    "img/2_character_pepe/2_walk/W-23.png",
    "img/2_character_pepe/2_walk/W-24.png",
    "img/2_character_pepe/2_walk/W-25.png",
    "img/2_character_pepe/2_walk/W-26.png",
  ];
  speed = 8;

  constructor(x, y) {
    super().loadImage("img/2_character_pepe/1_idle/idle/I-1.png");
    this.loadImages(this.ANIM_WALK);
    this.x = x;
    this.y = y;
    this.height = 300;
    this.width = 150;

    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.world.keyboard.RIGHT) {
        this.x += this.speed;
      }
      if (this.world.keyboard.LEFT) {
        this.x -= this.speed;
      }
    }, 1000 / 60);

    setInterval(() => {
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        if (this.currentImage >= this.ANIM_WALK.length) {
          this.currentImage = 0;
        }
        let path = this.ANIM_WALK[this.currentImage];
        this.img = this.imageChache[path];
        this.currentImage++;
      }
    }, 1000 / 10);
  }

  jump() {}
}
