export default class Win extends Phaser.Scene {
  constructor() {
    super("Win");
  }
  Init() {}

  create() {
    this.add.image(400, 300, "win");
  }
}
