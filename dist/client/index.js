"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const init_1 = require("./engine/init");
const gameLoop_1 = require("./engine/gameLoop");
const physics_1 = require("./engine/physics");
const inputManager_1 = require("./engine/inputManager");
const player_1 = require("./gameObjects/player");
const inputManager = new inputManager_1.InputManager();
const player = new player_1.Player(inputManager);
init_1.app.stage.addChild(player.sprite);
function update() {
    player.update();
    (0, physics_1.updatePhysics)();
}
console.log("Hello World!");
(0, gameLoop_1.startGameLoop)(update);
