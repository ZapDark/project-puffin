import Phaser from 'phaser';

export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'player');
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setCollideWorldBounds(true);
    }

    update() {
        if (!this.scene || !this.scene.input || !this.scene.input.keyboard) {
            return;
        }

        const cursors = this.scene.input.keyboard.createCursorKeys();
        this.setVelocity(0);

        if (cursors.left.isDown) {
            this.setVelocityX(-200);
        } else if (cursors.right.isDown) {
            this.setVelocityX(200);
        }

        if (cursors.up.isDown) {
            this.setVelocityY(-200);
        } else if (cursors.down.isDown) {
            this.setVelocityY(200);
        }
    }
}
