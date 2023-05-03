import { SHAPES } from "../../utils.js";
const { SQUARE, TRIANGLE, DIAMOND } = SHAPES;
export default class Game extends Phaser.Scene {
  score;
  gameOver;
  timer;
  constructor() {
    super("Game");
  }

  init() {
    this.shapesRecolected = {
      [TRIANGLE]: { count: 0, score: 10 },
      [SQUARE]: { count: 0, score: 20 },
      [DIAMOND]: { count: 0, score: 30 },
    };
    console.log(this.shapesRecolected);
  }

  create() {
    //add background
    this.add.image(400, 300, "sky").setScale(0.555);

    //add static platforms
    let platforms = this.physics.add.staticGroup();
    platforms.create(400, 568, "platform").setScale(2).refreshBody();

    //add shapes
    this.shapesGroup = this.physics.add.group();

    //create event to add shapes
    this.time.addEvent({
      delay: 3000,
      callback: this.addShape,
      callbackScope: this,
      loop: true,
    });
    this.time.addEvent({
      delay: 1000,
      callback: this.oneSecond,
      callbackScope: this,
      loop: true,
    });

    //add player
    this.player = this.physics.add.sprite(100, 450, "ninja");
    this.player.setCollideWorldBounds(true);

    //create cursor
    this.cursors = this.input.keyboard.createCursorKeys();

    //add collider between player and platforms
    //add collider between player and shapes
    //add overlap between player and shapes
    this.physics.add.collider(this.player, platforms);
    this.physics.add.collider(this.player, this.shapesGroup);
    this.physics.add.collider(platforms, this.shapesGroup);
    this.physics.add.collider(this.shapesGroup, this.shapesGroup);

    // add overlap between player and shapes
    this.physics.add.overlap(
      this.player,
      this.shapesGroup,
      this.collectShape, // funcion que llama cuando player choca con shape
      null, //dejar fijo por ahora
      this //dejar fijo por ahora
    );

    // add score on scene
    this.score = 0;
    this.scoreText = this.add.text(20, 20, "Score:" + this.score, {
      fontSize: "32px",
      fontStyle: "bold",
      fill: "#FFFFFF",
    });

    //add timer
    this.timer = 20;
    this.timerText = this.add.text(750, 20, this.timer, {
      fontSize: "32px",
      fontStyle: "bold",
      fill: "#FFFFFF",
    });
  }
  update() {
    //condicion para ganar y mostrar escena
    if (this.score > 200) {
      this.scene.start("Win");
    }
    if (this.gameOver) {
      this.scene.start("GameOver");
    }

    //Move player
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-250);
    } else {
      if (this.cursors.right.isDown) {
        this.player.setVelocityX(250);
      } else {
        this.player.setVelocityX(0);
      }

      //player jump
      if (this.cursors.up.isDown && this.player.body.touching.down) {
        this.player.setVelocityY(-330);
      }
    }
  }
  addShape() {
    // get random shape
    const randomShape = Phaser.Math.RND.pick([DIAMOND, SQUARE, TRIANGLE]);

    // get random position x
    const randomX = Phaser.Math.RND.between(0, 800);

    // add shape to screen
    this.shapesGroup.create(randomX, 0, randomShape).setCircle(25, 7, 7);
    console.log("shape is added", randomX, randomShape);
  }

  collectShape(player, shape) {
    shape.disableBody(true, true);

    const shapeName = shape.texture.key;
    this.shapesRecolected[shapeName].count++;

    this.score += this.shapesRecolected[shapeName].score;
    console.log(this.shapesRecolected[shapeName].score);
    this.scoreText.setText(`Score: ${this.score.toString()}`);
  }
  //add timmer
  oneSecond() {
    this.timer--;
    this.timerText.setText(this.timer);
    if (this.timer <= 0) {
      this.gameOver = true;
    }
  }
}
