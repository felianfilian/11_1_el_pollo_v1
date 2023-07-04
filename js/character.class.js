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

  sound_walk = new Audio("audio/walk01.wav");
  sound_jump = new Audio("audio/jump01.wav");

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
      this.sound_jump.pause();
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.x += this.speed;
        this.lookLeft = false;
      }
      if (this.world.keyboard.LEFT && this.x > 0) {
        this.x -= this.speed;
        this.lookLeft = true;
      }
      if (this.world.keyboard.SPACE) {
        this.sound_jump.play();
      }
      this.world.camera_x = -this.x + 100;
    }, 1000 / 30);

    setInterval(() => {
      this.sound_walk.pause();
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        if (this.currentImage >= this.ANIM_WALK.length) {
          this.currentImage = 0;
        }
        let path = this.ANIM_WALK[this.currentImage];
        this.img = this.imageChache[path];
        this.currentImage++;
        this.sound_walk.play();
      }
    }, 1000 / 10);
  }

  jump() {}
}
