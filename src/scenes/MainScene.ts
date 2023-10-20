import Phaser from 'phaser';
import Player from '../gameObjects/Player';

export default class MainScene extends Phaser.Scene {
    private player!: Player;

    constructor() {
        super({ key: 'MainScene' });
    }

    preload() {
        this.load.image('player', 'src/assets/player.png');
    }

    create() {
        this.physics.world.setBounds(0, 0, 800, 600);
        this.player = new Player(this, 400, 300);
    }

    update() {
        this.player.update();
    }
}
