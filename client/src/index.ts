import * as PIXI from 'pixi.js';
import * as Matter from 'matter-js';
import { Howl } from 'howler';
import Hammer from 'hammerjs';

const app = new PIXI.Application();
document.body.appendChild(app.view as HTMLCanvasElement);

const engine = Matter.Engine.create();
const world = engine.world;
Matter.Engine.run(engine);

app.ticker.add((delta) => {
  // Game update logic
  Matter.Engine.update(engine, delta);
});