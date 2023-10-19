import * as PIXI from 'pixi.js';
import { InputManager } from '../engine/inputManager';

export class Player {
    sprite: PIXI.Sprite;
    inputManager: InputManager;

    constructor(inputManager: InputManager) {
        this.inputManager = inputManager;
        this.sprite = new PIXI.Sprite(PIXI.Texture.WHITE);
        this.sprite.tint = 0xff0000; // Red color
        this.sprite.width = 50;
        this.sprite.height = 50;
        this.sprite.position.set(375, 275);
    }

    update() {
        if (this.inputManager.isKeyDown('w')) this.sprite.y -= 5;
        if (this.inputManager.isKeyDown('a')) this.sprite.x -= 5;
        if (this.inputManager.isKeyDown('s')) this.sprite.y += 5;
        if (this.inputManager.isKeyDown('d')) this.sprite.x += 5;
    }
}
