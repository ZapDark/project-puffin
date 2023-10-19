"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startGameLoop = void 0;
const init_1 = require("./init");
function startGameLoop(update) {
    init_1.app.ticker.add(() => {
        update();
        init_1.app.render();
    });
}
exports.startGameLoop = startGameLoop;
