import * as Matter from 'matter-js';

export const engine = Matter.Engine.create();

export function updatePhysics() {
    Matter.Engine.update(engine, 1000 / 60);
}
