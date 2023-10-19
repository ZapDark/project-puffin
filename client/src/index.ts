import { app } from './engine/init';
import { startGameLoop } from './engine/gameLoop';
import { updatePhysics } from './engine/physics';
import { InputManager } from './engine/inputManager';
import { Player } from './gameObjects/player';

const inputManager = new InputManager();
const player = new Player(inputManager);

app.stage.addChild(player.sprite);

function update() {
    player.update();
    updatePhysics();
}

console.log('Hello World!');
startGameLoop(update);
