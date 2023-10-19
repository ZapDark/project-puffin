import express from 'express';
import path from 'path';

const app = express();

// Serve static files from the client/dist directory
app.use(express.static(path.resolve(__dirname, '../../dist/client')));

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
