import { Application } from "pixi.js";

export interface xypair {
  x: number;
  y: number;
}

export class applt extends Application {
  xm: number;
  ym: number;
  data: object;
  curent: object;

  toPos = (obj: xypair) => {
    //convert app xy to real xy
    //@ts-ignore
    return { x: obj.x * this.xm, y: obj.y * this.ym };
  };

  fromPos = (obj: xypair) => {
    //convert real xy to app xy
    //@ts-ignore
    return { x: obj.x / this.xm, y: obj.y / this.ym };
  };
}
