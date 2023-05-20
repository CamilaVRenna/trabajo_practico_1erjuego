export default class GameOver extends Phaser.Scene {
constructor() {
    super("GameOver");
  }
  Init() {}

  create() {
    this.add.image(400, 300, "gameOver");
  }

}