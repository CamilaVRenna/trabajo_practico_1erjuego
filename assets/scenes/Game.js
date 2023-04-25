export default class Game extends Phaser.Scene {
  constructor() {
    super("Game");
  }
  init() {}
  preload() {
    this.load.image("background", "./assets/images/fondo.png");
    this.load.image("platform", "./assets/images/platform.png");
    this.load.image("witch", "./assets/images/witch.png");
    this.load.image("square", "./assets/images/square.png");
    this.load.image("diamond", "./assets/images/diamond.png");
    this.load.image("triangle", "./assets/images/triangle.png");
    this.load.image("candy", "./assets/images/candy.png");
    this.load.image("ghost", "./assets/images/ghost.png");
  }

  create() {
    //add background
    this.add.image(950, 540, "background");

    //add static plataforms group
    let platform = this.physics.add.staticGroup();
    platform.create(500, 78, "platform");

    //add sprite player
    this.player = this.physics.add.sprite(100, 450, "witch");
    this.player.setCollideWorldBounds(true);

    //add shapes groups
    this.shapesGroup = this.physics.add.group();
    this.shapesGroup.create(100, 0, "diamond");
    this.shapesGroup.create(200, 0, "square");
    this.shapesGroup.create(300, 0, "triangle");

    //create cursors{
    this.cursors = this.InputDeviceInfo.keyboard.createCursorsKeys();
    //add collider between player and plattforms}
    this.physics.add.collider(this.player, platforms);
    this.physics.add.collider(platforms, this, shapesGroup);
    this.physics.add.collider(platforms, this.shapesGroup);

    this.time.addEvent({
      delay: 1500,
      callback: this.addShape,
      callback,
    });
  }
  update() {
    //check if not game over or win
    //update player movement
    if (this.cursors.left.isDown) {
      this.player.setVelocity(-250);
    } else {
      if (this.cursors.right.isDown) {
        this.player.setVelocityX(250);
      } else {
        this.player.setVelocityX(0);
      }
    }
  }

  addShape() {
    //get a random shape
    const randomshape = Phaser.Math.RND.pick(["diamond", "triangle", "square"]);
    //get random positionx
    const randomX = Phaser.Math.RND.between(0, 800);
    //add shape to screen
    this.shapesGroup.create(randomX, 0, random);
  }
}
