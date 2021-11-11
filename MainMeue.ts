import { Application, Container, Graphics } from "pixi.js";
import { applt, xypair } from "./app";

export class MainMeue extends Container {
  app: applt;
  backround: Graphics;

  constructor(app) {
    super();
    this.app = app;

    this.backround = new Graphics();
    this.backround.beginFill(0x00ff00);
    this.backround.x = 0;
    this.backround.y = 0;
    let xy: xypair = this.app.toPos({ x: 500, y: 200 });
    this.backround.drawRect(0, 0, xy.x, xy.y);
    this.backround.endFill();
    this.addChild(this.backround);

    //@ts-ignore
    this.sortableChildren = true;
  }

  resize() {
    this.backround.clear();
    this.backround.beginFill(0x00ff00);
    let xy: xypair = this.app.toPos({ x: 500, y: 200 });
    this.backround.drawRect(0, 0, xy.x, xy.y);
    this.backround.endFill();
  }

  update(delta) {}
}
