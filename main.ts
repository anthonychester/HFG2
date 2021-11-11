//interface
import { Sprite } from "pixi.js";
import { applt } from "./app";
import { MainMeue } from "./MainMeue";

const inputImageAspectRatio = window.innerWidth / window.innerHeight;

const outputImageAspectRatio = 16 / 9;

let outputWidth = window.innerWidth;
let outputHeight = window.innerHeight;

if (inputImageAspectRatio > outputImageAspectRatio) {
  outputWidth = window.innerHeight * outputImageAspectRatio;
} else if (inputImageAspectRatio < outputImageAspectRatio) {
  outputHeight = window.innerWidth / outputImageAspectRatio;
}

let res = window.devicePixelRatio || 1;

const app = new applt(outputWidth, outputHeight, {
  autoResize: true,
  view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
  //@ts-ignore
  resolution: res,
  backgroundColor: 0x1099bb
});

//@ts-ignore
app.stage.sortableChildren = true;

document.body.appendChild(app.view);

let sence = [];
let MaMu: MainMeue;
MaMu = new MainMeue(app);
sence.push(MaMu);

app.curent = MaMu;

function resize() {
  const inputImageAspectRatio = window.innerWidth / window.innerHeight;

  const outputImageAspectRatio = 16 / 9;

  let outputWidth = window.innerWidth;
  let outputHeight = window.innerHeight;

  if (inputImageAspectRatio > outputImageAspectRatio) {
    outputWidth = window.innerHeight * outputImageAspectRatio;
  } else if (inputImageAspectRatio < outputImageAspectRatio) {
    outputHeight = window.innerWidth / outputImageAspectRatio;
  }

  app.renderer.resize(outputWidth, outputHeight);

  app.xm = app.view.width / 500;
  app.ym = app.view.height / 200;

  for (let i = 0; i < sence.length; i++) {
    sence[i].resize();
  }
}

function setup() {
  let Data = app.loader.resources["./src/data.json"];
  app.data = Data.data;

  resize();
}
app.xm = app.view.width / 500;
app.ym = app.view.height / 200;

app.stage.addChild(MaMu);

app.loader
  .add("./src/data.json", {
    crossOrigin: "anonymous"
  })
  .add("./src/maps/map1/map.png", {
    crossOrigin: "anonymous"
  })
  .load(setup);

// Listen for animate update
app.ticker.add(function (delta) {
  //@ts-ignore
  app.curent.update(delta);
});

window.addEventListener("resize", resize);
