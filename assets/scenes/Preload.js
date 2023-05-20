import { SHAPES } from "../../utils.js";
const { SQUARE, TRIANGLE, DIAMOND,CIRCLE } = SHAPES;
export default class Preload extends Phaser.Scene {
  constructor() {
    super("Preload");
  }
  preload() {
    this.load.image("sky", "./assets/images/sky.png");
    this.load.image("platform", "../assets/images/platform.png");
    this.load.image("ninja", "../assets/images/ninja.png");
    this.load.image(SQUARE, "../assets/images/square.png");
    this.load.image(CIRCLE, "../assets/images/circle.png");
    this.load.image(DIAMOND, "../assets/images/diamond.png");
    this.load.image(TRIANGLE, "../assets/images/triangle.png");
    this.load.image("gameOver", "../assets/images/gameOver.png");
    this.load.image("win", "../assets/images/win.png");
    this.load.image("platform2", "../assets/images/platform2.png");
  }
  create() {
    console.log("AAA");
    this.scene.start("Game");
  }
}
