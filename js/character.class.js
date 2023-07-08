class Character extends Movable {
  ANIM_WALK = [
    "img/2_character_pepe/2_walk/W-21.png",
    "img/2_character_pepe/2_walk/W-22.png",
    "img/2_character_pepe/2_walk/W-23.png",
    "img/2_character_pepe/2_walk/W-24.png",
    "img/2_character_pepe/2_walk/W-25.png",
    "img/2_character_pepe/2_walk/W-26.png",
  ];
  ANIM_JUMP = [
    "img/2_character_pepe/3_jump/J-31.png",
    "img/2_character_pepe/3_jump/J-32.png",
    "img/2_character_pepe/3_jump/J-33.png",
    "img/2_character_pepe/3_jump/J-34.png",
    "img/2_character_pepe/3_jump/J-35.png",
    "img/2_character_pepe/3_jump/J-36.png",
    "img/2_character_pepe/3_jump/J-37.png",
    "img/2_character_pepe/3_jump/J-38.png",
    "img/2_character_pepe/3_jump/J-39.png",
  ];

  ANIM_JUMP = [];
  speed = 8;

  sound_walk = new Audio("audio/walk01.wav");
  sound_jump = new Audio("audio/jump01.wav");

  constructor(x, y) {
    super().loadImage("img/2_character_pepe/1_idle/idle/I-1.png");
    this.loadImages(this.ANIM_WALK);
    this.loadImages(this.ANIM_JUMP);
    this.x = x;
    this.y = y;
    this.height = 300;
    this.width = 150;

    this.update();
    this.applyGravity();
  }

  update() {
    this.movement();
    this.animate();
  }

  movement() {
    setInterval(() => {
      this.sound_jump.pause();
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.moveRight();
        this.lookLeft = false;
      }
      if (this.world.keyboard.LEFT && this.x > 0) {
        this.moveLeft();
        this.lookLeft = true;
      }
      if (this.world.keyboard.SPACE) {
        super.jump();
        this.sound_jump.play();
      }
      this.world.camera_x = -this.x + 100;
    }, 1000 / 30);
  }

  animate() {
    setInterval(() => {
      this.sound_walk.pause();
      if (!this.isGrounded) {
        this.playAnimation(this.ANIM_JUMP);
      }
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        this.playAnimation(this.ANIM_WALK);
        this.sound_walk.play();
      }
    }, 1000 / 10);
  }

  jump() {}
}
