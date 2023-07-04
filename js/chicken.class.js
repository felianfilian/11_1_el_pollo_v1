class Chicken extends Movable {
  ANIM_WALK = [
    "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  constructor() {
    super().loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.loadImages(this.ANIM_WALK);
    this.x = 200 + Math.round(Math.random() * 400);

    this.speed = 0.2 + Math.random() * 0.8;

    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.ANIM_WALK);
    }, 1000 / 10);

    this.moveLeft();
  }
}
