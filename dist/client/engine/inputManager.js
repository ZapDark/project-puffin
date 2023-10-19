"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputManager = void 0;
class InputManager {
    constructor() {
        this.keys = {};
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
    }
    onKeyDown(event) {
        this.keys[event.key.toLowerCase()] = true;
    }
    onKeyUp(event) {
        this.keys[event.key.toLowerCase()] = false;
    }
    isKeyDown(key) {
        return this.keys[key.toLowerCase()] || false;
    }
}
exports.InputManager = InputManager;
