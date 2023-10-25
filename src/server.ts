import express from 'express';
import { Server, Socket } from 'socket.io';
import http from 'http';
import { PlayerInfo } from './utils/playerInfo';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const players: Record<string, PlayerInfo> = {};

io.on('connection', (socket: Socket) => {
    console.log('a user connected', socket.id);

    // Initialize player
    players[socket.id] = { x: 0, y: 0 };

    // Update player position
    socket.on('playerMove', (data: PlayerInfo) => {
        players[socket.id] = data;
    });

    // Remove player on disconnect
    socket.on('disconnect', () => {
        delete players[socket.id];
    });
});

// Emit game state
setInterval(() => {
    io.emit('gameState', players);
}, 1000 / 60);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

app.get('/api/test-connection', (_req, res) => {
    res.send('Connection to server successful!');
});