import { app } from './init';

export function startGameLoop(update: () => void) {
    app.ticker.add(() => {
        update();
        app.render();
    });
}
