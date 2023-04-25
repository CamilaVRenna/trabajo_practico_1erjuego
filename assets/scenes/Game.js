export default class Game extends Phaser.Scene {
  constructor() {
    super("Game");
  }
  init() {}
  preload() {
    this.load.image("sky", "./assets/images/fondo.png");
    this.load.image("platform", "./assets/images/platform.png");
    this.load.image("ninja", "./assets/images/ninja.png");
    this.load.image("square", "./assets/images/square.png");
    this.load.image("diamond", "./assets/images/diamond.png");
    this.load.image("triangle", "./assets/images/triangle.png");
  }

  create() {
    //add background
    this.add.image(400, 300, "sky").setScale(0.555);

    //add static plataforms group
    let platform = this.physics.add.staticGroup();
    platform.create(400, 568, "platform").setScale(2).refreshBody();

    //add sprite player
    this.player = this.physics.add.sprite(100, 450, "ninja");
    this.player.setCollideWorldBounds(true);

    //add shapes groups
    this.shapesGroup = this.physics.add.group();
    this.shapesGroup.create(100, 0, "diamond");
    this.shapesGroup.create(200, 0, "square");
    this.shapesGroup.create(300, 0, "triangle");
  }
}
