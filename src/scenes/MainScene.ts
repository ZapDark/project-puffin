import Phaser from 'phaser';
import Player from '../gameObjects/Player';
import socket from '../utils/socket';
import { PlayerInfo } from '../utils/playerInfo';

export default class MainScene extends Phaser.Scene {
    private player!: Player;
    private otherPlayers: Record<string, Player> = {};

    constructor() {
        super({ key: 'MainScene' });
    }

    preload() {
        this.load.image('player', 'src/assets/player.png');
    }

    create() {
        this.testConnection();
        this.physics.world.setBounds(0, 0, 800, 600);
        this.player = new Player(this, 400, 300);
        socket.on('gameState', (players: Record<string, PlayerInfo>) => {
            this.updateOtherPlayers(players);
        });
    }

    update() {
        this.player.update();
    }

    async testConnection() {
        try {
            const response = await fetch('/api/test-connection');
            const message = await response.text();
            console.log(message);
        } catch (error) {
            console.error('Error testing connection:', error);
        }
    }

    updateOtherPlayers(players: Record<string, PlayerInfo>) {
        Object.keys(players).forEach((id) => {
            if (id === socket.id) return; // Skip the local player

            if (!this.otherPlayers[id]) {
                // Create a new Player instance for the new player
                this.otherPlayers[id] = new Player(this, players[id].x, players[id].y);
            } else {
                // Update the position of the existing player
                this.otherPlayers[id].x = players[id].x;
                this.otherPlayers[id].y = players[id].y;
            }
        });

        // Remove disconnected players
        Object.keys(this.otherPlayers).forEach((id) => {
            if (!players[id]) {
                this.otherPlayers[id].destroy();
                delete this.otherPlayers[id];
            }
        });
    }
}
